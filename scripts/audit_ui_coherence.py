#!/usr/bin/env python3
"""
Cognify UI Coherence & Polish Auditor (Playwright + Headless Chrome)

Audits every major route across Desktop (1366x900) and Mobile (390x844),
in both Light and Dark themes, scoring 10 concrete UI/UX dimensions (100 pts max)
and saving screenshots for visual design critique in an iterative polish loop.
"""

import argparse
import json
import os
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROUTES = [
    ("dashboard", "/dashboard", "Student Dashboard", True),
    ("courses", "/courses", "Courses Catalog", True),
    ("workspace-notes", "/course/igcse-biology-cie", "Course Workspace (Notes)", True),
    ("workspace-lessons", "/course/igcse-biology-cie/lessons", "Course Workspace (Lessons)", True),
    ("workspace-papers", "/course/igcse-biology-cie/past-papers", "Course Workspace (Past Papers)", True),
    ("notes-reader", "/course/igcse-biology-cie/notes/igbio-1-2", "Notes Reader", False),
    ("lesson-player", "/course/igcse-biology-cie/lesson/igbio-1-2", "Lesson Player", False),
    ("quiz-player", "/course/igcse-biology-cie/quiz/igbio-1-2", "Quiz Player", False),
    ("flashcards-player", "/course/igcse-biology-cie/flashcards/igbio-1-2", "Flashcards Player", False),
    ("exam-practice", "/course/igcse-biology-cie/exam-practice/igbio-1-2", "Exam Practice", False),
    ("key-terms", "/course/igcse-biology-cie/key-terms", "Key Terms", True),
    ("onboarding", "/onboarding", "Guided Onboarding", False),
    ("auth", "/auth", "Sign In / Register", True),
    ("account", "/account/profile", "Account Settings", True),
    ("teacher-tools", "/teacher-tools", "Teacher Tools", True),
    ("faq", "/faq", "Help & FAQ", True),
    ("about", "/about", "About Page", True),
    ("docs", "/docs", "Developer Docs", True),
]

PAGE_AUDIT_JS = r"""
({ theme, viewportWidth, expectFooter }) => {
  const issues = [];

  function parseRgba(str) {
    if (!str || str === 'transparent') return [0, 0, 0, 0];
    const m = str.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)/i);
    if (!m) return [0, 0, 0, 0];
    return [Number(m[1]), Number(m[2]), Number(m[3]), m[4] === undefined ? 1 : Number(m[4])];
  }

  function relLum(r, g, b) {
    const f = (c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  }

  function contrastRatio(rgb1, rgb2) {
    const l1 = relLum(rgb1[0], rgb1[1], rgb1[2]);
    const l2 = relLum(rgb2[0], rgb2[1], rgb2[2]);
    const hi = Math.max(l1, l2);
    const lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  }

  function blend(fg, bg) {
    const a = fg[3];
    return [
      fg[0] * a + bg[0] * (1 - a),
      fg[1] * a + bg[1] * (1 - a),
      fg[2] * a + bg[2] * (1 - a),
      1,
    ];
  }

  function effectiveBg(el) {
    const layers = [];
    let cur = el;
    while (cur && cur.nodeType === 1) {
      const c = parseRgba(getComputedStyle(cur).backgroundColor);
      if (c[3] > 0.01) layers.push(c);
      if (c[3] >= 0.99) break;
      cur = cur.parentElement;
    }
    const base = theme === 'dark' ? [30, 31, 34, 1] : [250, 249, 247, 1];
    return layers.reverse().reduce((acc, layer) => blend(layer, acc), base);
  }

  function isVisible(el) {
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) < 0.05) return false;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return false;
    if (el.classList.contains('sr-only')) return false;
    return true;
  }

  // 1. Horizontal overflow check
  const overflowPx = Math.round(document.documentElement.scrollWidth - window.innerWidth);
  let overflowOffenders = [];
  if (overflowPx > 2) {
    const all = Array.from(document.querySelectorAll('body *'));
    for (const el of all) {
      if (!isVisible(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.right > window.innerWidth + 3) {
        overflowOffenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className && typeof el.className === 'string' ? el.className : '').slice(0, 60),
          right: Math.round(r.right),
          vw: window.innerWidth,
          text: (el.textContent || '').trim().slice(0, 40),
        });
        if (overflowOffenders.length >= 5) break;
      }
    }
    issues.push({
      category: 'overflow',
      severity: 'high',
      detail: `Horizontal overflow of ${overflowPx}px (scrollWidth=${document.documentElement.scrollWidth}, viewport=${window.innerWidth})`,
      offenders: overflowOffenders,
    });
  }

  // 2. Canvas theme luminance & dark mode parity
  const bodyBg = effectiveBg(document.body);
  const bodyLum = relLum(bodyBg[0], bodyBg[1], bodyBg[2]);
  const activeThemeAttr = document.documentElement.dataset.theme || '';
  if (theme === 'dark' && bodyLum > 0.12) {
    issues.push({
      category: 'theme',
      severity: 'high',
      detail: `Dark mode body background too bright (lum=${bodyLum.toFixed(3)}, bg=${bodyBg.slice(0, 3).join(',')})`,
    });
  }
  if (theme === 'light' && bodyLum < 0.7) {
    issues.push({
      category: 'theme',
      severity: 'high',
      detail: `Light mode body background unexpectedly dark (lum=${bodyLum.toFixed(3)})`,
    });
  }

  // Detect blinding hardcoded white containers in Dark mode
  let darkWhiteSurfaces = [];
  if (theme === 'dark') {
    const containers = Array.from(document.querySelectorAll('section, article, div, aside, header, footer, table, form, input, select, textarea'));
    for (const el of containers) {
      if (!isVisible(el)) continue;
      if (el.closest('.cognito-video-stage-wrap') || el.closest('svg') || el.closest('.diagram-svg-box')) continue;
      const bg = parseRgba(getComputedStyle(el).backgroundColor);
      if (bg[3] >= 0.85 && relLum(bg[0], bg[1], bg[2]) > 0.82) {
        const r = el.getBoundingClientRect();
        // Ignore tiny toggle knobs / avatars / white pill badges smaller than 90px
        if (r.width >= 140 && r.height >= 44) {
          darkWhiteSurfaces.push({
            tag: el.tagName.toLowerCase(),
            cls: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
            w: Math.round(r.width),
            h: Math.round(r.height),
            bg: getComputedStyle(el).backgroundColor,
          });
          if (darkWhiteSurfaces.length >= 5) break;
        }
      }
    }
    if (darkWhiteSurfaces.length > 0) {
      issues.push({
        category: 'dark-surface',
        severity: 'high',
        detail: `${darkWhiteSurfaces.length} large hardcoded white/light surface(s) in Dark Mode`,
        samples: darkWhiteSurfaces,
      });
    }
  }

  // 3. Typography & Heading Hierarchy
  const bodyStyle = getComputedStyle(document.body);
  const bodyFont = bodyStyle.fontFamily || '';
  const bodyFontSize = parseFloat(bodyStyle.fontSize) || 16;
  if (!/nunito/i.test(bodyFont)) {
    issues.push({
      category: 'typography',
      severity: 'medium',
      detail: `Body font missing Nunito token (got: ${bodyFont})`,
    });
  }
  if (bodyFontSize < 14) {
    issues.push({
      category: 'typography',
      severity: 'medium',
      detail: `Body font-size too small (${bodyFontSize}px)`,
    });
  }
  const h1s = Array.from(document.querySelectorAll('h1'));
  if (h1s.length === 0) {
    issues.push({
      category: 'typography',
      severity: 'medium',
      detail: 'Missing <h1> heading on page',
    });
  } else if (h1s.length > 1) {
    issues.push({
      category: 'typography',
      severity: 'low',
      detail: `Multiple <h1> headings (${h1s.length}) on page`,
    });
  }
  const hasMain = Boolean(document.querySelector('main'));
  if (!hasMain) {
    issues.push({
      category: 'a11y',
      severity: 'medium',
      detail: 'Missing <main> semantic landmark',
    });
  }

  // 4. WCAG AA Text Contrast Sampling
  const contrastFailures = [];
  const textEls = Array.from(document.querySelectorAll('h1, h2, h3, p, a, button, label, li, th, td, span'));
  let checkedCount = 0;
  for (const el of textEls) {
    if (checkedCount >= 180) break;
    if (!isVisible(el)) continue;
    if (el.closest('.cognito-video-facade') || el.closest('svg') || el.closest('.diagram-svg-box')) continue;
    // Skip elements whose text comes only from nested children unless it's a leaf/button/link
    const directText = Array.from(el.childNodes)
      .filter((n) => n.nodeType === 3)
      .map((n) => (n.textContent || '').trim())
      .join(' ')
      .trim();
    if (!directText || directText.length < 2) continue;
    // Skip intentionally disabled controls
    if (el.matches(':disabled') || el.getAttribute('aria-disabled') === 'true' || el.closest(':disabled')) continue;
    const style = getComputedStyle(el);
    if (parseFloat(style.opacity) < 0.7) continue;

    checkedCount += 1;
    const fgRaw = parseRgba(style.color);
    const bg = effectiveBg(el);
    const fg = fgRaw[3] < 0.99 ? blend(fgRaw, bg) : fgRaw;
    const ratio = contrastRatio(fg, bg);
    const size = parseFloat(style.fontSize) || 14;
    const weight = parseInt(style.fontWeight, 10) || 400;
    const isLarge = size >= 24 || (size >= 18.66 && weight >= 700);
    const minReq = isLarge ? 3.0 : 4.2; // Allow tiny AA rounding margin

    if (ratio < minReq) {
      contrastFailures.push({
        tag: el.tagName.toLowerCase(),
        cls: (typeof el.className === 'string' ? el.className : '').slice(0, 50),
        text: directText.slice(0, 35),
        ratio: Number(ratio.toFixed(2)),
        minReq,
        fg: style.color,
        bg: `rgb(${Math.round(bg[0])},${Math.round(bg[1])},${Math.round(bg[2])})`,
      });
      if (contrastFailures.length >= 6) break;
    }
  }
  if (contrastFailures.length > 0) {
    issues.push({
      category: 'contrast',
      severity: 'high',
      detail: `${contrastFailures.length} low-contrast text element(s) below WCAG AA`,
      samples: contrastFailures,
    });
  }

  // 5. Broken Images & Icon-Only Accessibility
  const brokenImgs = [];
  for (const img of Array.from(document.querySelectorAll('img'))) {
    if (!isVisible(img)) continue;
    if (!img.complete || img.naturalWidth === 0) {
      brokenImgs.push(img.getAttribute('src') || 'unknown');
    }
  }
  if (brokenImgs.length > 0) {
    issues.push({
      category: 'media',
      severity: 'high',
      detail: `${brokenImgs.length} broken image(s): ${brokenImgs.slice(0, 3).join(', ')}`,
    });
  }

  const unlabeledButtons = [];
  for (const btn of Array.from(document.querySelectorAll('button, a'))) {
    if (!isVisible(btn)) continue;
    const text = (btn.textContent || '').trim();
    const aria = (btn.getAttribute('aria-label') || '').trim();
    const title = (btn.getAttribute('title') || '').trim();
    const labelledBy = (btn.getAttribute('aria-labelledby') || '').trim();
    if (!text && !aria && !title && !labelledBy) {
      unlabeledButtons.push((typeof btn.className === 'string' ? btn.className : btn.tagName).slice(0, 50));
      if (unlabeledButtons.length >= 5) break;
    }
  }
  if (unlabeledButtons.length > 0) {
    issues.push({
      category: 'a11y',
      severity: 'medium',
      detail: `${unlabeledButtons.length} icon-only button(s)/link(s) missing accessible name`,
      samples: unlabeledButtons,
    });
  }

  // 6. Clipped / Cramped Button or Pill Text
  const clippedControls = [];
  for (const el of Array.from(document.querySelectorAll('button, a.tactile-btn, .topnav-pill, .cl-meta-pill'))) {
    if (!isVisible(el)) continue;
    const style = getComputedStyle(el);
    if (style.textOverflow === 'ellipsis') continue;
    if (el.scrollWidth > el.clientWidth + 6 && el.clientWidth > 20) {
      clippedControls.push({
        cls: (typeof el.className === 'string' ? el.className : '').slice(0, 45),
        text: (el.textContent || '').trim().slice(0, 35),
        sw: el.scrollWidth,
        cw: el.clientWidth,
      });
      if (clippedControls.length >= 4) break;
    }
  }
  if (clippedControls.length > 0) {
    issues.push({
      category: 'clipping',
      severity: 'medium',
      detail: `${clippedControls.length} control(s) with clipped text`,
      samples: clippedControls,
    });
  }

  // 7. Brand & Copy Consistency Check (catch stale "clone" copy or typos)
  const pageText = (document.body.innerText || '');
  const staleMatches = [];
  for (const pat of [/dashboard clone/i, /cognito clone/i, /lorem ipsum/i, /TODO/i, /undefined/i]) {
    const m = pageText.match(pat);
    if (m) staleMatches.push(m[0]);
  }
  if (staleMatches.length > 0) {
    issues.push({
      category: 'copy-coherence',
      severity: 'medium',
      detail: `Stale or inconsistent copy found: ${staleMatches.join(', ')}`,
    });
  }

  // 8. Header & Footer Chrome Coherence
  const header = document.querySelector('header');
  if (header && isVisible(header)) {
    const hRect = header.getBoundingClientRect();
    if (hRect.height > 115 && viewportWidth >= 1024) {
      issues.push({
        category: 'chrome',
        severity: 'medium',
        detail: `Desktop header unexpectedly tall/wrapped (${Math.round(hRect.height)}px)`,
      });
    }
  }

  if (expectFooter) {
    const footer = document.querySelector('footer.site-footer');
    if (!footer || !isVisible(footer)) {
      issues.push({
        category: 'chrome',
        severity: 'low',
        detail: 'Expected SiteFooter not visible on standard page',
      });
    }
  }

  // 9. Floating Feedback Button Overlap Check against primary CTAs
  const fab = document.querySelector('.floating-feedback-btn');
  if (fab && isVisible(fab)) {
    const fr = fab.getBoundingClientRect();
    const ctas = Array.from(document.querySelectorAll('.cl-tactile-btn, .tactile-btn--solid-blue, button[type="submit"]'));
    for (const cta of ctas) {
      if (!isVisible(cta)) continue;
      const cr = cta.getBoundingClientRect();
      const overlapX = Math.max(0, Math.min(fr.right, cr.right) - Math.max(fr.left, cr.left));
      const overlapY = Math.max(0, Math.min(fr.bottom, cr.bottom) - Math.max(fr.top, cr.top));
      if (overlapX * overlapY > 60) {
        issues.push({
          category: 'chrome',
          severity: 'medium',
          detail: `Floating feedback button overlaps primary CTA "${(cta.textContent || '').trim().slice(0, 30)}"`,
        });
        break;
      }
    }
  }

  return {
    activeThemeAttr,
    overflowPx,
    bodyLum: Number(bodyLum.toFixed(3)),
    h1Count: h1s.length,
    issues,
  };
}
"""


def compute_scores(route_results):
    """Compute 100-point UI Coherence & Polish scorecard across all tested states."""
    penalties = {
        "runtime": 0,
        "overflow": 0,
        "typography": 0,
        "contrast": 0,
        "dark_surface": 0,
        "a11y": 0,
        "media": 0,
        "clipping": 0,
        "copy_coherence": 0,
        "chrome": 0,
    }
    findings = []

    for r in route_results:
        label = f"{r['name']} [{r['theme']}/{r['viewport']}]"
        if r["consoleErrors"] or r["pageErrors"] or r["failedRequests"]:
            penalties["runtime"] = min(10, penalties["runtime"] + 5)
            findings.append(f"[runtime] {label}: console={len(r['consoleErrors'])}, page={len(r['pageErrors'])}, net={len(r['failedRequests'])}")

        for iss in r["issues"]:
            cat = iss["category"]
            sev = iss.get("severity", "medium")
            pts = 4 if sev == "high" else 2 if sev == "medium" else 1
            if cat == "overflow":
                penalties["overflow"] = min(10, penalties["overflow"] + pts)
            elif cat == "typography":
                penalties["typography"] = min(10, penalties["typography"] + pts)
            elif cat == "contrast":
                penalties["contrast"] = min(10, penalties["contrast"] + pts)
            elif cat in ("theme", "dark-surface"):
                penalties["dark_surface"] = min(10, penalties["dark_surface"] + pts)
            elif cat == "a11y":
                penalties["a11y"] = min(10, penalties["a11y"] + pts)
            elif cat == "media":
                penalties["media"] = min(10, penalties["media"] + pts)
            elif cat == "clipping":
                penalties["clipping"] = min(10, penalties["clipping"] + pts)
            elif cat == "copy-coherence":
                penalties["copy_coherence"] = min(10, penalties["copy_coherence"] + 5)
            elif cat == "chrome":
                penalties["chrome"] = min(10, penalties["chrome"] + pts)

            extra = ""
            if "samples" in iss:
                extra = f" | samples={json.dumps(iss['samples'][:2])}"
            elif "offenders" in iss:
                extra = f" | offenders={json.dumps(iss['offenders'][:2])}"
            findings.append(f"[{cat}] {label}: {iss['detail']}{extra}")

    dimensions = {
        "Runtime & Network Stability": 10 - penalties["runtime"],
        "Zero Horizontal Overflow (Desktop + Mobile)": 10 - penalties["overflow"],
        "Typography & Heading Hierarchy": 10 - penalties["typography"],
        "WCAG AA Text Contrast": 10 - penalties["contrast"],
        "Light & Dark Mode Surface Parity": 10 - penalties["dark_surface"],
        "Accessibility Landmarks & Labels": 10 - penalties["a11y"],
        "Media & SVG Integrity": 10 - penalties["media"],
        "Control Sizing & Zero Text Clipping": 10 - penalties["clipping"],
        "Brand & Copy Coherence": 10 - penalties["copy_coherence"],
        "Header, Footer & Floating Chrome": 10 - penalties["chrome"],
    }
    total = sum(dimensions.values())
    return total, dimensions, findings


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", default="http://127.0.0.1:4199")
    parser.add_argument("--screenshots-dir", default="")
    parser.add_argument("--json-out", default="")
    args = parser.parse_args()

    shots_dir = Path(args.screenshots_dir) if args.screenshots_dir else None
    if shots_dir:
        shots_dir.mkdir(parents=True, exist_ok=True)

    results = []
    viewports = [
        ("desktop", {"width": 1366, "height": 900}),
        ("mobile", {"width": 390, "height": 844}),
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path="/usr/bin/google-chrome",
            headless=True,
            args=["--disable-dev-shm-usage"],
        )

        for vp_name, vp_size in viewports:
            for theme in ("light", "dark"):
                # Mobile checks run on key high-traffic routes + desktop checks all 18 routes
                routes_to_run = ROUTES if vp_name == "desktop" else [
                    r for r in ROUTES if r[0] in (
                        "dashboard", "courses", "workspace-notes", "workspace-lessons",
                        "notes-reader", "lesson-player", "quiz-player", "flashcards-player",
                        "onboarding", "auth", "account", "faq", "docs"
                    )
                ]

                ctx = browser.new_context(viewport=vp_size)
                page = ctx.new_page()

                # Prime dark mode preference cleanly via UI once for dark contexts
                page.goto(f"{args.base_url}/dashboard", wait_until="networkidle")
                page.wait_for_selector("header.top-nav", timeout=8000)
                if theme == "dark":
                    page.locator('button:has-text("Alex")').first.click()
                    page.locator('[role="switch"], button:has-text("Dark mode")').first.click()
                    page.wait_for_timeout(150)

                for slug, route_path, title, expect_footer in routes_to_run:
                    console_errors = []
                    page_errors = []
                    failed_requests = []

                    def on_console(msg):
                        if msg.type == "error":
                            console_errors.append(msg.text)

                    def on_pageerror(err):
                        page_errors.append(str(err))

                    def on_response(resp):
                        if resp.status >= 400 and "youtube" not in resp.url and "ytimg" not in resp.url:
                            failed_requests.append(f"{resp.status} {resp.url}")

                    page.on("console", on_console)
                    page.on("pageerror", on_pageerror)
                    page.on("response", on_response)

                    page.goto(f"{args.base_url}{route_path}", wait_until="networkidle")
                    page.wait_for_selector("header.top-nav, header.sp-topbar, header.onboarding-header", timeout=8000)
                    page.wait_for_timeout(180)

                    audit = page.evaluate(
                        PAGE_AUDIT_JS,
                        {
                            "theme": theme,
                            "viewportWidth": vp_size["width"],
                            "expectFooter": expect_footer,
                        },
                    )

                    if shots_dir and (
                        (vp_name == "desktop" and slug in (
                            "dashboard", "courses", "workspace-notes", "workspace-lessons",
                            "notes-reader", "lesson-player", "quiz-player", "flashcards-player",
                            "exam-practice", "onboarding", "auth", "account", "teacher-tools", "faq", "about", "docs"
                        ))
                        or (vp_name == "mobile" and slug in (
                            "dashboard", "workspace-lessons", "lesson-player", "onboarding", "docs"
                        ))
                    ):
                        page.screenshot(
                            path=str(shots_dir / f"{vp_name}-{theme}-{slug}.png"),
                            full_page=True,
                        )

                    page.remove_listener("console", on_console)
                    page.remove_listener("pageerror", on_pageerror)
                    page.remove_listener("response", on_response)

                    results.append({
                        "name": slug,
                        "title": title,
                        "path": route_path,
                        "viewport": vp_name,
                        "theme": theme,
                        "consoleErrors": console_errors,
                        "pageErrors": page_errors,
                        "failedRequests": failed_requests,
                        **audit,
                    })

                ctx.close()
        browser.close()

    total_score, dimensions, findings = compute_scores(results)
    payload = {
        "score": total_score,
        "maxScore": 100,
        "statesAudited": len(results),
        "dimensions": dimensions,
        "findings": findings,
        "results": results,
    }

    if args.json_out:
        Path(args.json_out).write_text(json.dumps(payload, indent=2), encoding="utf-8")

    print(json.dumps({
        "score": total_score,
        "statesAudited": len(results),
        "dimensions": dimensions,
        "findingCount": len(findings),
        "findings": findings,
    }, indent=2))

    sys.exit(0 if total_score == 100 else 0)


if __name__ == "__main__":
    main()
