## Learning Impact
<!-- What makes Cognify measurably better for students after this PR? -->
- **Goal**:
- **Learning Quality Score delta** (`npm run audit:learning`): `before -> after` (or `N/A` for pure tooling/UI)

## Changes
-

## Verification Checklist
- [ ] `npm run check` passes (`typecheck`, `test`, and production `build`)
- [ ] If `src/data/courses/**` changed: `npm run verify:youtube` passes (all HTTP `200`) and `npm run audit:learning:write` updated `docs/LEARNING_QUALITY_REPORT.md`
- [ ] Verified Light + Dark mode with zero console errors (if UI/styles changed)
- [ ] 100% Paywall-Free preserved (zero upgrade locks or weekly caps)
- [ ] Architecture boundaries kept clean (`src/types/`, `src/data/`, `src/utils/` remain pure & UI-agnostic; persistence centralized in `AppContext.tsx`)
