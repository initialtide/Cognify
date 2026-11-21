import React, { useMemo, useState } from 'react';
import {
  BarChart3,
  Clock,
  Download,
  Mail,
  Moon,
  Pencil,
  RotateCcw,
  SlidersHorizontal,
  Sparkles,
  Upload,
  User,
  UserPlus,
  Volume2,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { MonsterAvatar } from '../../components/artwork/Avatars';
import { exportProfileJson, useApp } from '../../store/AppContext';

type ActivityRange = 'today' | 'week' | 'month' | 'year' | 'all';

interface AccountLayoutProps {
  onOpenAvatarModal: () => void;
  onOpenDailyGoalModal: () => void;
}

export const AccountLayout: React.FC<AccountLayoutProps> = ({
  onOpenAvatarModal,
  onOpenDailyGoalModal,
}) => {
  const { tab } = useParams<{ tab?: string }>();
  const activeTab = tab === 'preferences' ? 'preferences' : tab === 'activity' ? 'activity' : 'profile';

  const {
    state,
    profile,
    updateProfile,
    updatePreferences,
    switchProfile,
    createProfile,
    importProfile,
    resetActiveProfile,
  } = useApp();

  const [editName, setEditName] = useState(profile.name);
  const [editYear, setEditYear] = useState(profile.yearGroup);
  const [savedNotice, setSavedNotice] = useState('');
  const [newProfileName, setNewProfileName] = useState('');
  const [importError, setImportError] = useState('');

  // Activity Log state — ALL 5 timeframes unlocked!
  const [range, setRange] = useState<ActivityRange>('today');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  const filteredEvents = useMemo(() => {
    const now = Date.now();
    const dayMs = 86400000;
    return profile.activityLog.filter((ev) => {
      const diff = now - new Date(ev.timestamp).getTime();
      const inRange =
        range === 'today'
          ? diff <= 2 * dayMs
          : range === 'week'
            ? diff <= 7 * dayMs
            : range === 'month'
              ? diff <= 30 * dayMs
              : range === 'year'
                ? diff <= 365 * dayMs
                : true;
      const matchesSubject = subjectFilter === 'all' || ev.subjectName === subjectFilter;
      return inRange && matchesSubject;
    });
  }, [profile.activityLog, range, subjectFilter]);

  const totalMinutes = Math.round(
    filteredEvents.reduce((acc, e) => acc + e.durationSeconds, 0) / 60
  );
  const totalQuestions = filteredEvents.reduce((acc, e) => acc + e.questionsAnswered, 0);
  const totalXp = filteredEvents.reduce((acc, e) => acc + e.xpEarned, 0);

  const bySubject = useMemo(() => {
    const map = new Map<string, number>();
    for (const ev of filteredEvents) {
      map.set(ev.subjectName, (map.get(ev.subjectName) ?? 0) + ev.xpEarned);
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [filteredEvents]);

  const byType = useMemo(() => {
    const map = new Map<string, number>();
    for (const ev of filteredEvents) {
      map.set(ev.type, (map.get(ev.type) ?? 0) + 1);
    }
    return Array.from(map.entries());
  }, [filteredEvents]);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile((p) => ({
      ...p,
      name: editName.trim() || p.name,
      yearGroup: editYear.trim().toUpperCase() || p.yearGroup,
    }));
    setSavedNotice('Profile updated!');
    setTimeout(() => setSavedNotice(''), 2000);
  };

  const handleExport = () => {
    const json = exportProfileJson(profile);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cognito-clone-${profile.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importProfile(String(reader.result ?? ''));
      if (!ok) {
        setImportError('Invalid Cognito backup JSON file.');
      } else {
        setImportError('');
        setSavedNotice('Backup imported and activated!');
        setTimeout(() => setSavedNotice(''), 2500);
      }
    };
    reader.readAsText(file);
  };

  const uniqueSubjects = Array.from(new Set(profile.activityLog.map((e) => e.subjectName)));

  return (
    <main className="page-container">
      {/* Grid-Paper Profile Header Card (NO Upgrade to Pro Banner!) */}
      <section
        className="cognito-card cognito-grid-bg"
        style={{ padding: '24px 26px', display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}
      >
        <div style={{ position: 'relative' }}>
          <MonsterAvatar avatarId={profile.avatarId} size={90} />
          <button
            type="button"
            onClick={onOpenAvatarModal}
            aria-label="Edit avatar"
            style={{
              position: 'absolute',
              right: -2,
              bottom: -2,
              width: 32,
              height: 32,
              borderRadius: '999px',
              border: '1px solid var(--border-card)',
              backgroundColor: 'var(--bg-elevated)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Pencil size={14} />
          </button>
        </div>

        <div>
          <h1 className="font-heading" style={{ fontSize: '2rem', lineHeight: 1.15 }}>
            {profile.name}
          </h1>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: 2 }}>
            Student · {profile.yearGroup}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
            <span
              className="font-logo"
              style={{
                padding: '5px 14px',
                borderRadius: 8,
                backgroundColor: 'var(--color-blue-500)',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 700,
              }}
            >
              ALL ACCESS · UNLOCKED
            </span>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Joined {profile.joinedDate}
            </span>
          </div>
        </div>
      </section>

      <hr className="dashed-divider" style={{ margin: '28px 0' }} />

      <div className="account-layout">
        {/* Left Navigation */}
        <nav aria-label="Account sections" style={{ display: 'grid', gap: 6 }}>
          {(
            [
              ['profile', '/account/profile', 'Account', <User key="u" size={17} />],
              ['preferences', '/account/preferences', 'Preferences', <SlidersHorizontal key="p" size={17} />],
              ['activity', '/account/activity', 'Activity', <BarChart3 key="a" size={17} />],
            ] as const
          ).map(([key, to, label, icon]) => {
            const active = activeTab === key;
            return (
              <Link
                key={key}
                to={to}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  padding: '12px 16px',
                  borderRadius: 12,
                  fontWeight: 700,
                  backgroundColor: active ? 'var(--bg-card)' : 'transparent',
                  border: active ? '1px solid var(--border-card)' : '1px solid transparent',
                  color: active ? 'var(--text-heading)' : 'var(--text-secondary)',
                }}
              >
                {icon} {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Panel */}
        <div style={{ minWidth: 0 }}>
          {activeTab === 'profile' && (
            <div style={{ display: 'grid', gap: 20 }}>
              <section className="cognito-card" style={{ padding: '26px 26px' }}>
                <span className="tilted-badge tilted-badge--edge tilted-badge--paper">ACCOUNT</span>
                <form onSubmit={handleSaveProfile} style={{ display: 'grid', gap: 14, maxWidth: 420 }}>
                  <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.9rem' }}>
                    Display name
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      style={{ padding: '10px 12px', borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
                    />
                  </label>
                  <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.9rem' }}>
                    Year group label
                    <input
                      type="text"
                      value={editYear}
                      onChange={(e) => setEditYear(e.target.value)}
                      style={{ padding: '10px 12px', borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
                    />
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <button type="submit" className="tactile-btn tactile-btn--solid-blue">
                      Save details
                    </button>
                    {savedNotice && <span style={{ color: 'var(--color-green-600)', fontWeight: 700 }}>{savedNotice}</span>}
                  </div>
                </form>
              </section>

              {/* Profile Switcher & JSON Backup */}
              <section className="cognito-card" style={{ padding: '26px 26px' }}>
                <span className="tilted-badge tilted-badge--edge tilted-badge--navy">PROFILES &amp; BACKUP</span>
                <div style={{ display: 'grid', gap: 12, marginBottom: 18 }}>
                  {state.profiles.map((p) => (
                    <div
                      key={p.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: 12,
                        backgroundColor: p.id === profile.id ? 'var(--color-blue-50)' : 'var(--bg-sunken)',
                        color: p.id === profile.id ? '#0b3c61' : 'var(--text-primary)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <MonsterAvatar avatarId={p.avatarId} size={36} />
                        <div>
                          <div style={{ fontWeight: 800 }}>{p.name}</div>
                          <div style={{ fontSize: '0.78rem', opacity: 0.8 }}>{p.enrolledCourseIds.length} courses</div>
                        </div>
                      </div>
                      {p.id === profile.id ? (
                        <span className="score-pill">Active</span>
                      ) : (
                        <button type="button" className="tactile-btn tactile-btn--sm" onClick={() => switchProfile(p.id)}>
                          Switch
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                  <input
                    type="text"
                    placeholder="New student name..."
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                    style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
                  />
                  <button
                    type="button"
                    className="tactile-btn tactile-btn--sm"
                    onClick={() => {
                      if (!newProfileName.trim()) return;
                      createProfile({ name: newProfileName, yearGroup: 'YEAR 11', avatarId: 'wizard' });
                      setNewProfileName('');
                    }}
                  >
                    <UserPlus size={15} /> Create profile
                  </button>
                </div>

                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                  <button type="button" className="tactile-btn tactile-btn--sm tactile-btn--blue" onClick={handleExport}>
                    <Download size={15} /> Export JSON backup
                  </button>
                  <label className="tactile-btn tactile-btn--sm" style={{ cursor: 'pointer' }}>
                    <Upload size={15} /> Import JSON
                    <input type="file" accept=".json,application/json" onChange={handleImportFile} style={{ display: 'none' }} />
                  </label>
                  <button type="button" className="tactile-btn tactile-btn--sm tactile-btn--pink" onClick={resetActiveProfile}>
                    <RotateCcw size={15} /> Reset progress
                  </button>
                </div>
                {importError && <p style={{ color: 'var(--color-red-600)', fontWeight: 700 }}>{importError}</p>}
              </section>
            </div>
          )}

          {activeTab === 'preferences' && (
            <section className="cognito-card" style={{ padding: '26px 26px' }}>
              <span className="tilted-badge tilted-badge--edge tilted-badge--paper">PREFERENCES</span>

              <div style={{ display: 'grid', gap: 0 }}>
                {/* Email notifications */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Mail size={19} style={{ marginTop: 3 }} />
                    <div>
                      <div style={{ fontWeight: 700 }}>Email notifications</div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Receive study reminders in local simulation mode.</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={profile.preferences.emailNotifications}
                    className="toggle-switch"
                    onClick={() => updatePreferences({ emailNotifications: !profile.preferences.emailNotifications })}
                  >
                    <span className="toggle-switch__knob" />
                  </button>
                </div>

                {/* AI Marking + Optional API Key */}
                <div style={{ padding: '16px 0', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <Sparkles size={19} style={{ marginTop: 3 }} />
                      <div>
                        <div style={{ fontWeight: 700 }}>AI marking &amp; rubric grader</div>
                        <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                          Works 100% offline with our mark-scheme rubric engine. Optionally add your own Gemini/OpenAI key below.
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={profile.preferences.aiMarkingEnabled}
                      className="toggle-switch"
                      onClick={() => updatePreferences({ aiMarkingEnabled: !profile.preferences.aiMarkingEnabled })}
                    >
                      <span className="toggle-switch__knob" />
                    </button>
                  </div>

                  {profile.preferences.aiMarkingEnabled && (
                    <div style={{ marginTop: 12, marginLeft: 31, padding: 14, borderRadius: 12, backgroundColor: 'var(--bg-sunken)', display: 'grid', gap: 10 }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', fontWeight: 700 }}>
                        <input
                          type="checkbox"
                          checked={profile.preferences.aiConfig.enabled}
                          onChange={(e) =>
                            updatePreferences({
                              aiConfig: { ...profile.preferences.aiConfig, enabled: e.target.checked },
                            })
                          }
                        />
                        Use external LLM API key (falls back to offline mark-scheme rubric if blank/offline)
                      </label>
                      {profile.preferences.aiConfig.enabled && (
                        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 8 }}>
                          <select
                            value={profile.preferences.aiConfig.provider}
                            onChange={(e) =>
                              updatePreferences({
                                aiConfig: {
                                  ...profile.preferences.aiConfig,
                                  provider: e.target.value as 'gemini' | 'openai',
                                },
                              })
                            }
                            style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
                          >
                            <option value="gemini">Gemini</option>
                            <option value="openai">OpenAI</option>
                          </select>
                          <input
                            type="password"
                            value={profile.preferences.aiConfig.apiKey}
                            onChange={(e) =>
                              updatePreferences({
                                aiConfig: { ...profile.preferences.aiConfig, apiKey: e.target.value },
                              })
                            }
                            placeholder="Paste API key (stored locally only)..."
                            style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Sound effects */}
                <div style={{ padding: '16px 0', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <Volume2 size={19} style={{ marginTop: 3 }} />
                      <div>
                        <div style={{ fontWeight: 700 }}>Sound effects</div>
                        <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Play chimes on quiz answers and card flips.</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={profile.preferences.soundEnabled}
                      className="toggle-switch"
                      onClick={() => updatePreferences({ soundEnabled: !profile.preferences.soundEnabled })}
                    >
                      <span className="toggle-switch__knob" />
                    </button>
                  </div>
                  <div style={{ marginLeft: 31, display: 'flex', alignItems: 'center', gap: 10, maxWidth: 320 }}>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={profile.preferences.soundVolume}
                      onChange={(e) => updatePreferences({ soundVolume: Number(e.target.value) })}
                      aria-label="Volume"
                      style={{ flex: 1 }}
                    />
                    <span style={{ fontWeight: 700, fontSize: '0.86rem' }}>{profile.preferences.soundVolume}%</span>
                  </div>
                </div>

                {/* Dark mode */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Moon size={19} style={{ marginTop: 3 }} />
                    <div>
                      <div style={{ fontWeight: 700 }}>Dark mode</div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Switch between warm paper light mode and charcoal dark mode.</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={profile.preferences.darkMode}
                    className="toggle-switch"
                    onClick={() => updatePreferences({ darkMode: !profile.preferences.darkMode })}
                  >
                    <span className="toggle-switch__knob" />
                  </button>
                </div>

                {/* Daily XP Goal */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--border-subtle)' }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>Daily XP goal</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Currently {profile.dailyXpGoal} XP per day</div>
                  </div>
                  <button type="button" className="tactile-btn tactile-btn--sm" onClick={onOpenDailyGoalModal}>
                    Change goal
                  </button>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'activity' && (
            <div style={{ display: 'grid', gap: 20 }}>
              {/* All 5 Timeframe Tabs Unlocked (Zero Padlocks!) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div role="tablist" aria-label="Activity timeframe" style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 4, padding: 4, borderRadius: 12, backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
                  {(
                    [
                      ['today', 'Today & Yesterday'],
                      ['week', 'Week'],
                      ['month', 'Month'],
                      ['year', 'Year'],
                      ['all', 'All time'],
                    ] as [ActivityRange, string][]
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={range === key}
                      onClick={() => setRange(key)}
                      style={{
                        padding: '7px 13px',
                        borderRadius: 9,
                        border: 0,
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        backgroundColor: range === key ? 'var(--bg-sunken)' : 'transparent',
                        color: range === key ? 'var(--text-heading)' : 'var(--text-muted)',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <select
                  value={subjectFilter}
                  onChange={(e) => setSubjectFilter(e.target.value)}
                  aria-label="Filter by subject"
                  style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-card)', fontWeight: 700 }}
                >
                  <option value="all">All subjects</option>
                  {uniqueSubjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Metric Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 16 }}>
                <div className="cognito-card" style={{ padding: '24px 20px 18px' }}>
                  <span className="tilted-badge tilted-badge--edge" style={{ backgroundColor: 'var(--color-blue-500)', color: '#ffffff' }}>
                    <Clock size={12} /> TIME STUDIED
                  </span>
                  <div className="font-heading" style={{ fontSize: '2.1rem' }}>{totalMinutes} min</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>+{totalXp} XP earned</div>
                </div>

                <div className="cognito-card" style={{ padding: '24px 20px 18px' }}>
                  <span className="tilted-badge tilted-badge--edge tilted-badge--purple">
                    ACTIVITIES
                  </span>
                  <div className="font-heading" style={{ fontSize: '2.1rem' }}>{filteredEvents.length}</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Completed sessions</div>
                </div>

                <div className="cognito-card" style={{ padding: '24px 20px 18px' }}>
                  <span className="tilted-badge tilted-badge--edge" style={{ backgroundColor: 'var(--color-green-600)', color: '#ffffff' }}>
                    QUESTIONS
                  </span>
                  <div className="font-heading" style={{ fontSize: '2.1rem' }}>{totalQuestions}</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Questions &amp; cards</div>
                </div>
              </div>

              {/* Breakdown by Subject & Activity Type */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                <div className="cognito-card" style={{ padding: '24px 20px 18px' }}>
                  <span className="tilted-badge tilted-badge--edge tilted-badge--navy">BY SUBJECT</span>
                  {bySubject.length === 0 ? (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No activity in this timeframe yet.</div>
                  ) : (
                    <div style={{ display: 'grid', gap: 8 }}>
                      {bySubject.map(([subj, xp]) => (
                        <div key={subj} style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem' }}>
                          <span>{subj}</span>
                          <span style={{ color: 'var(--color-blue-500)' }}>{xp} XP</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="cognito-card" style={{ padding: '24px 20px 18px' }}>
                  <span className="tilted-badge tilted-badge--edge tilted-badge--navy">BY ACTIVITY TYPE</span>
                  {byType.length === 0 ? (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No activity in this timeframe yet.</div>
                  ) : (
                    <div style={{ display: 'grid', gap: 8 }}>
                      {byType.map(([t, count]) => (
                        <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem', textTransform: 'capitalize' }}>
                          <span>{t.replace('-', ' ')}</span>
                          <span>{count}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* WHAT YOU'VE DONE timeline */}
              <section className="cognito-card" style={{ padding: '24px 22px 14px' }}>
                <span className="tilted-badge tilted-badge--edge tilted-badge--paper">WHAT YOU&apos;VE DONE</span>
                {filteredEvents.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)' }}>Complete a lesson, quiz, flashcard deck, or exam question to see your activity here.</p>
                ) : (
                  filteredEvents.slice(0, 25).map((ev, idx) => (
                    <div
                      key={ev.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        padding: '12px 0',
                        borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700 }}>{ev.title}</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                          {ev.courseLabel} · {new Date(ev.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      <span className="score-pill">+{ev.xpEarned} XP</span>
                    </div>
                  ))
                )}
              </section>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
