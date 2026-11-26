import { AuthAccount, UserProfile } from '../types/user';

export interface AuthVaultSnapshot {
  accounts: AuthAccount[];
  profiles: UserProfile[];
  updatedAt: string;
}

const IDB_NAME = 'cognify_auth_vault_db';
const IDB_STORE = 'vault';
const IDB_KEY = 'accounts_v1';

function hasIndexedDb(): boolean {
  try {
    return typeof indexedDB !== 'undefined' && typeof indexedDB.open === 'function';
  } catch {
    return false;
  }
}

function openVaultDb(): Promise<IDBDatabase | null> {
  if (!hasIndexedDb()) return Promise.resolve(null);
  return new Promise((resolve) => {
    try {
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export async function writeAuthVaultIdb(
  accounts: AuthAccount[],
  profiles: UserProfile[]
): Promise<boolean> {
  if (accounts.length === 0) return false;
  const db = await openVaultDb();
  if (!db) return false;

  const accountProfileIds = new Set(accounts.map((a) => a.profileId));
  const payload: AuthVaultSnapshot = {
    accounts,
    profiles: profiles.filter((p) => accountProfileIds.has(p.id)),
    updatedAt: new Date().toISOString(),
  };

  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      tx.objectStore(IDB_STORE).put(payload, IDB_KEY);
      tx.oncomplete = () => {
        db.close();
        resolve(true);
      };
      tx.onerror = () => {
        db.close();
        resolve(false);
      };
    } catch {
      db.close();
      resolve(false);
    }
  });
}

export async function readAuthVaultIdb(): Promise<AuthVaultSnapshot | null> {
  const db = await openVaultDb();
  if (!db) return null;

  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(IDB_KEY);
      req.onsuccess = () => {
        db.close();
        const result = req.result as Partial<AuthVaultSnapshot> | undefined;
        if (!result || !Array.isArray(result.accounts)) {
          resolve(null);
          return;
        }
        resolve({
          accounts: result.accounts,
          profiles: Array.isArray(result.profiles) ? result.profiles : [],
          updatedAt: typeof result.updatedAt === 'string' ? result.updatedAt : '',
        });
      };
      req.onerror = () => {
        db.close();
        resolve(null);
      };
    } catch {
      db.close();
      resolve(null);
    }
  });
}

export function isLocalStorageWritable(): boolean {
  try {
    const probeKey = '__cognify_storage_probe__';
    localStorage.setItem(probeKey, '1');
    localStorage.removeItem(probeKey);
    return true;
  } catch {
    return false;
  }
}
