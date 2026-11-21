type SoundKind = 'correct' | 'incorrect' | 'flip' | 'xp' | 'complete';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) {
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playTone(freq: number, duration: number, type: OscillatorType, gainVal: number, delay = 0): void {
  const ctx = getAudioContext();
  if (!ctx || gainVal <= 0) return;

  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.001, gainVal * 0.14), now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

export function playSound(kind: SoundKind, enabled: boolean, volumePercent: number): void {
  if (!enabled || volumePercent <= 0) return;
  const v = Math.min(1, Math.max(0, volumePercent / 100));

  switch (kind) {
    case 'correct':
      playTone(523.25, 0.12, 'triangle', v, 0);
      playTone(659.25, 0.18, 'triangle', v, 0.08);
      break;
    case 'incorrect':
      playTone(260, 0.14, 'sine', v * 0.85, 0);
      playTone(215, 0.2, 'sine', v * 0.85, 0.1);
      break;
    case 'flip':
      playTone(440, 0.07, 'sine', v * 0.65, 0);
      break;
    case 'xp':
      playTone(587.33, 0.1, 'triangle', v, 0);
      playTone(783.99, 0.14, 'triangle', v, 0.07);
      playTone(987.77, 0.18, 'triangle', v, 0.14);
      break;
    case 'complete':
      playTone(523.25, 0.12, 'triangle', v, 0);
      playTone(659.25, 0.12, 'triangle', v, 0.09);
      playTone(783.99, 0.14, 'triangle', v, 0.18);
      playTone(1046.5, 0.28, 'triangle', v, 0.27);
      break;
  }
}
