# Machine Components Docs — Build Plan (Theme 3: Bauhaus Kinematics locked)

## 1. Goal
Bilingual-friendly (English main + Arabic notes) Docusaurus docs site for **Machine Components & Mechanisms — BAU Mechatronics**, from `Machine_Components_Summary.md` (744 lines, slides Ch 1,3,4,5,6,7,9,10,11,12,13-14 + Myszka 3rd ed).
Job: student reference with photos + custom in-site simulations (no GeoGebra/Desmos embeds). Scope: **all chapters at once**.

## 2. Theme 3 tokens (locked from themes-gallery/theme-03-bauhaus.html)
- **Palette:** paper `#FAFAF6`, ink `#111111`, bauhaus red `#D42A1E`, blue `#2140D4`, yellow `#F2B705`, white `#FFFFFF`, black stage `#111111`.
  Usage: paper page bg; black only for mechanism stage + footer; red = follower/critical (limits, pressure angle warnings); blue = info/coupler/velocity; yellow = crank pin + active control + highlights. Never gradient washes, never cream+terracotta, never acid-green dark mode.
- **Type:** `Archivo Black` display (hero, H1/H2 only, -0.02em, line-height 0.9-1.0); `Space Grotesk` body/UI (400/700, 15-17px, line-height 1.6-1.7, max 62ch). Arabic notes: `Amiri` or system Naskh fallback, RTL, same yellow/blue block language. Sentence case everywhere. No ALL-CAPS eyebrows, no single-word accent color, no `→` links (use boxed buttons).
- **Layout:** left-aligned, max-width 1040px. Hero = headline "Every motion is circles and bars" + black stage with live four-bar (yellow crank pin, white coupler, red follower). Below: red/blue solid blocks for Grashof + quick-return. Chapter cards = solid color blocks (yellow/blue/red rotation), 3-col → 1-col mobile, hard edges (radius 0), offset shadow 6px 6px 0 #111 on Arabic callout only. One motion only: mechanism answers to slider/scrub; no scroll-reveal fades.
- **Structure-as-information:** color encodes role (yellow=input, white=coupler, red=output, blue=info). Numbers only where sequence is real (Grashof table, rise/dwell/fall steps).

## 3. Information architecture (Docusaurus)
```
docs/
  intro.md            (course, grading Mid 40/Part 10/Final 50, how to read markers, notation +>/−>)
  ch01-mechanisms.md  (DOF, Grashof 5 cases, slider-crank, toggle-clamp/package-ram/water-spray examples)
  ch03-vectors.md
  ch04-position.md
  ch05-synthesis.md   (Q/β, L2=stroke/2, L3>4L2, γ 40-140)
  ch06-velocity.md    (rubbing speed)
  ch07-acceleration.md (slide-170 typo flag vs book 7.23/7.24)
  ch09-cams.md        (4 schemes + Table 9.5 peaks, pressure angle, nomenclature)
  ch10-gears.md       (Pd/p/db, VR/TV, pitch-line velocity)
  ch11-belt-chain.md  (belt/chain L/C, lubrication bands)
  ch12-screws.md      (4 cases, UNC/Metric, ΔR=pΔθ)
  ch13-14-forces.md   (FBD, two-force, ΣF=ΣM=0, F=ma bridge)
  formulas.md         (quick sheet verbatim)
  checks.md           (5 instructor double-checks)
```
Sidebar: Intro → Chapters in numeric order → Formulas → Checks. Admonitions map: `🇯🇴` → blue info block; `🌍` → white block with black border + offset shadow (Arabic RTL); `📖 Book only` → yellow block; `🧮 Check` → black stage block with yellow numbers; `⚠️ typo` → red block.

## 4. Simulations (10 custom React + SVG/Canvas, no third party)
All share `<MechStage>` (black SVG viewport, yellow crank, white coupler, red/blue follower) + crank slider + play button + numeric readout + `prefers-reduced-motion` freeze. Formulas unit-tested against summary values.
1. **Grashof explorer** (Ch1): 4 length sliders, live s/l/p/q + category (double-crank/crank-rocker/double-rocker/change/triple) + animated type switch. Verify water-spray 12/3/12/5 → crank-rocker.
2. **Inversion toggle** (Ch1): same chain, fix frame/crank/coupler/follower buttons.
3. **Vector polygon** (Ch3): drag A/B magnitude+angle, tip-to-tail SVG, R=53.19 ft/s² check (A46 B23 θ95°).
4. **Position sweep** (Ch4): θ2 0-360 slider, slider-crank + four-bar closed forms, displacement diagram canvas + limiting-position markers.
5. **Quick-return designer** (Ch5): Q slider → β=180(Q-1)/(Q+1), advance 180+β vs return 180−β arcs; checks Q1.25→β20°, Q1.75→β49.1°.
6. **Velocity lab** (Ch6): mechanism + polygon side-by-side, ω slider, v=rω readout; pump Q=v·A demo (182.66/205.81 in³/s).
7. **Acceleration lab** (Ch7): stacked aⁿ/aᵗ vectors, a_A vs θ2 plot; slider-crank α3/a4 formulas; flag four-bar book-vs-slide discrepancy toggle.
8. **Cam comparer** (Ch9): scheme tabs (const-V/const-A/harmonic/cycloidal), H/T sliders, ΔR/v/a plots; peak table (1.0/2.0/1.571/2.0 × H/T); Example 9.2 preset (ΣT4.25s ω14.12rpm).
9. **Gear + train studio** (Ch10): N/Pd/φ inputs → d/outside/root/db/p + mesh check (same Pd+φ); train builder N1-6 → TV=9.33 ωout128.6ccw check; involute SVG mesh.
10. **Belt-chain-screw calculators** (Ch11-12): D/C/L + vb band 1000-6500 + chain lube band + sprocket D=p/sin(180/N) + screw ΔR/v (½-13 @1200rpm → 92.3 in/min); 4 screw-case diagrams.

## 5. Photos/diagrams
Per-chapter placeholder slots with CC/BYU captions: Ch1 scissors/hinges/drawer/wiper/engine piston; Ch5 shaper/hacksaw; Ch9 camshaft/valve; Ch10 steering rack/guitar worm/drill bevel; Ch11 serpentine belt/bike chain; Ch12 vise/jar-lid/jack/CNC lead screw; Ch13-14 wrench/door/pliers. Kinematic symbols redrawn as SVG (line=link, circle=pin, block=slider) in theme colors. Missing slide figures (Ch4-7 polygons) recreated as SVG, marked "redrawn from slide method".

## 6. Tech
Docusaurus 3 + MDX + KaTeX (`F=3(n-1)-2jp-jh` etc.), custom theme CSS variables for §2 tokens, `docusaurus-search-local`, RTL CSS (`dir=rtl` on Arabic blocks only), responsive 1040→1col, keyboard-focus rings in blue, `prefers-reduced-motion` disables autoplay (slider still works). Deploy: GitHub Pages (or Vercel); `npm run build` must pass; Lighthouse mobile ≥90; Arabic shaping QA.

## 7. Phases
- P0 scaffold: Docusaurus + Theme 3 CSS + admonition components + sidebar.
- P1 migrate: all 13 MDX pages from summary, formulas + checks verbatim, Arabic blocks RTL.
- P2 sims: 10 widgets above, each with preset matching a slide worked example.
- P3 media: photos/SVG diagrams, captions, alt text.
- P4 release: search, SEO/meta, deploy preview, student click-test (find Grashof table <30s, run Q calc, scrub cam plot).

## 8. Acceptance
- Every 🎬 marker has a working widget; every 🧮 check reproduces (150rpm, 100rpm, 109rpm, 53.19, 1.885/0.7/5, 5184/2138, 15.38rpm, 8.57rpm, 1.667/1.292/1.410, 7.0in, 984rpm/2062fpm, 1.25/1.2in, 30lb).
- Slide-170, 93-94 rpm, chain-length units, F=12/Pd range flagged in red blocks + checks.md.
- No external sim iframes; offline build works except Google Fonts (system fallback ok).

## 9. Risks
Slide-figure-only problems need redraw approval; confirm 4 typos with instructor before exam publishing; photo licensing — prefer self-shot lab hardware.
