import { CloudSyncConfig, UserProfile } from '../types/user';

const SYNC_CODE_PREFIX = 'COGNIFY-SAVE-V1:';

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function validateEmail(email: string): string | null {
  const cleaned = normalizeEmail(email);
  if (!cleaned) return 'Please enter your email address.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) {
    return 'Please enter a valid email address (e.g. name@example.com).';
  }
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) return 'Please enter a password.';
  if (password.length < 6) return 'Password must be at least 6 characters long.';
  return null;
}

export function generateSalt(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  }
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 18)}`;
}

/**
 * Deterministic fallback hash used only if Web Crypto SubtleCrypto is unavailable
 * (e.g. non-HTTPS legacy contexts). Produces a salted multi-round hex digest.
 */
function fallbackSaltedHash(password: string, salt: string): string {
  let h1 = 0xdeadbeef ^ salt.length;
  let h2 = 0x41c6ce57 ^ password.length;
  const input = `${salt}::${password}::cognify-auth-v1`;
  for (let round = 0; round < 64; round++) {
    for (let i = 0; i < input.length; i++) {
      const ch = input.charCodeAt(i) ^ ((round * 31 + i) & 0xff);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  }
  return `fb1:${(h2 >>> 0).toString(16).padStart(8, '0')}${(h1 >>> 0).toString(16).padStart(8, '0')}`;
}

/**
 * Hashes a password using Web Crypto PBKDF2-SHA256 (100,000 iterations) when
 * SubtleCrypto is available, with a salted deterministic fallback otherwise.
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
  if (
    typeof crypto !== 'undefined' &&
    crypto.subtle &&
    typeof TextEncoder !== 'undefined'
  ) {
    try {
      const enc = new TextEncoder();
      const keyMaterial = await crypto.subtle.importKey(
        'raw',
        enc.encode(password),
        'PBKDF2',
        false,
        ['deriveBits']
      );
      const derived = await crypto.subtle.deriveBits(
        {
          name: 'PBKDF2',
          salt: enc.encode(salt),
          iterations: 100_000,
          hash: 'SHA-256',
        },
        keyMaterial,
        256
      );
      const hex = Array.from(new Uint8Array(derived), (b) =>
        b.toString(16).padStart(2, '0')
      ).join('');
      return `pbkdf2:${hex}`;
    } catch {
      return fallbackSaltedHash(password, salt);
    }
  }
  return fallbackSaltedHash(password, salt);
}

export async function verifyPassword(
  password: string,
  salt: string,
  expectedHash: string
): Promise<boolean> {
  if (expectedHash.startsWith('fb1:')) {
    return fallbackSaltedHash(password, salt) === expectedHash;
  }
  const actual = await hashPassword(password, salt);
  return actual === expectedHash;
}

function utf8ToBase64(str: string): string {
  if (typeof TextEncoder !== 'undefined') {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(b64: string): string {
  const binary = atob(b64);
  if (typeof TextDecoder !== 'undefined') {
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }
  return decodeURIComponent(escape(binary));
}

/**
 * Encodes a user's study profile into a compact portable Sync Code so they can
 * transfer their saved progress between browsers or devices even without a backend.
 */
export function encodeSyncCode(profile: UserProfile): string {
  const payload = {
    v: 1,
    exportedAt: new Date().toISOString(),
    profile: {
      ...profile,
      preferences: {
        ...profile.preferences,
        // Never leak personal AI API keys inside portable sync codes
        aiConfig: {
          ...profile.preferences.aiConfig,
          apiKey: '',
        },
      },
    },
  };
  return `${SYNC_CODE_PREFIX}${utf8ToBase64(JSON.stringify(payload))}`;
}

export function decodeSyncCode(raw: string): UserProfile | null {
  try {
    const trimmed = raw.trim();
    if (!trimmed.startsWith(SYNC_CODE_PREFIX)) return null;
    const encoded = trimmed.slice(SYNC_CODE_PREFIX.length).replace(/\s+/g, '');
    const parsed = JSON.parse(base64ToUtf8(encoded));
    const candidate = parsed?.profile;
    if (
      !candidate ||
      typeof candidate.name !== 'string' ||
      !Array.isArray(candidate.enrolledCourseIds)
    ) {
      return null;
    }
    return candidate as UserProfile;
  } catch {
    return null;
  }
}

export function getDefaultCloudSyncConfig(): CloudSyncConfig {
  const envUrl = (import.meta.env?.VITE_SUPABASE_URL as string | undefined) ?? '';
  const envKey = (import.meta.env?.VITE_SUPABASE_ANON_KEY as string | undefined) ?? '';
  const hasEnv = Boolean(envUrl.trim() && envKey.trim());
  return {
    provider: hasEnv ? 'supabase' : 'local',
    supabaseUrl: envUrl.trim(),
    supabaseAnonKey: envKey.trim(),
  };
}

/**
 * Optional zero-dependency Supabase PostgREST sync adapter.
 * Expects a `cognify_profiles` table with columns:
 *   email (text primary key), payload (jsonb), updated_at (timestamptz)
 */
export async function pushProfileToSupabase(
  config: CloudSyncConfig,
  email: string,
  profile: UserProfile
): Promise<{ ok: boolean; error?: string }> {
  if (config.provider !== 'supabase' || !config.supabaseUrl || !config.supabaseAnonKey) {
    return { ok: false, error: 'Cloud sync is not configured.' };
  }
  const baseUrl = config.supabaseUrl.replace(/\/+$/, '');
  try {
    const res = await fetch(`${baseUrl}/rest/v1/cognify_profiles?on_conflict=email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${config.supabaseAnonKey}`,
        Prefer: 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        email: normalizeEmail(email),
        payload: profile,
        updated_at: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      return { ok: false, error: `Cloud sync failed (HTTP ${res.status}).` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Could not reach Supabase cloud server.' };
  }
}

export async function pullProfileFromSupabase(
  config: CloudSyncConfig,
  email: string
): Promise<{ ok: boolean; profile?: UserProfile; error?: string }> {
  if (config.provider !== 'supabase' || !config.supabaseUrl || !config.supabaseAnonKey) {
    return { ok: false, error: 'Cloud sync is not configured.' };
  }
  const baseUrl = config.supabaseUrl.replace(/\/+$/, '');
  try {
    const res = await fetch(
      `${baseUrl}/rest/v1/cognify_profiles?email=eq.${encodeURIComponent(normalizeEmail(email))}&select=payload`,
      {
        headers: {
          apikey: config.supabaseAnonKey,
          Authorization: `Bearer ${config.supabaseAnonKey}`,
        },
      }
    );
    if (!res.ok) {
      return { ok: false, error: `Cloud pull failed (HTTP ${res.status}).` };
    }
    const rows = (await res.json()) as Array<{ payload?: UserProfile }>;
    if (!Array.isArray(rows) || rows.length === 0 || !rows[0]?.payload) {
      return { ok: false, error: 'No cloud backup found for this email yet.' };
    }
    return { ok: true, profile: rows[0].payload };
  } catch {
    return { ok: false, error: 'Could not reach Supabase cloud server.' };
  }
}
