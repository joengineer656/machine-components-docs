# AGENT.md — Machine Components Docs (Bauhaus Kinematics)

Source of truth: `plan.md` + `Machine_Components_Summary.md`. Theme 3 locked. Preview gallery: `themes-gallery/` (canonical look: `theme-03-bauhaus.html`, serve via `python3 -m http.server 8099 --directory themes-gallery`).

## What we are building
Docusaurus 3 + MDX + KaTeX docs site for BAU Mechatronics **Machine Components & Mechanisms**. English main, Arabic notes RTL. All 11 chapter groups at once (Ch 1,3,4,5,6,7,9,10,11,12,13-14) + formulas + checks = 13 MDX pages. Custom React+SVG sims only — no GeoGebra/Desmos/YouTube embeds.

## Theme 3 — hard rules
- Palette: paper `#FAFAF6`, ink `#111`, red `#D42A1E`, blue `#2140D4`, yellow `#F2B705`, white `#FFF`, stage black `#111`. Red = follower/critical, blue = info/coupler, yellow = crank input/active. No gradients, no cream+terracotta, no acid-green dark mode.
- Type: `Archivo Black` display only (H1/H2, tight, left-aligned); `Space Grotesk` body 15–17px/1.6–1.7, max 62ch; Arabic `Amiri`/system Naskh, `dir="rtl"`. Sentence case. No ALL-CAPS eyebrows, no one-word color accents, no `→` on links (boxed buttons).
- Layout: max-width 1040px, left-aligned, radius 0, 3-col solid blocks → 1-col mobile. Hero = headline + black `<MechStage>` (yellow crank pin, white coupler, red follower). Offset shadow `6px 6px 0 #111` on Arabic callout only. Only motion: mechanism responds to slider/play; honor `prefers-reduced-motion` (freeze autoplay, slider still works); blue focus rings.
- Color encodes role; numbers only for real sequences (Grashof table, rise/dwell/fall).

## Content conventions (from summary markers)
- `🇯🇴` → blue info block; `🌍` → white block, black border + offset shadow, Arabic RTL; `📖 Book only` → yellow block; `🧮 Check` → black stage block, yellow numbers, must reproduce value; `⚠️ slide typo` → red block. Flag: slide-170 four-bar α (use book 7.23/7.24), slides 93–94 rpm mismatch (27.9 vs 133.3), chain-length C-in-pitches, F=12/Pd single-value.
- Formulas via KaTeX. Keep symbols exam-identical (`+>`/`⊖`, `F=3(n-1)-2jp-jh`, `Q=(180+β)/(180−β)`).
- IA: `docs/intro, ch01, ch03, ch04, ch05, ch06, ch07, ch09, ch10, ch11, ch12, ch13-14, formulas, checks`. Sidebar numeric order.

## Sims — 10 widgets on shared `<MechStage>`
Black SVG viewport + crank slider + play + readout. Unit-test each preset:
1. Grashof explorer — 12/3/12/5 → crank-rocker. 2. Inversion toggle. 3. Vector polygon — A46/B23/θ95° → R53.19. 4. Position sweep — θ2 0–360 + displacement plot + limits. 5. Quick-return — Q1.25→β20°, Q1.75→β49.1°. 6. Velocity lab — v=rω, pump 182.66/205.81 in³/s. 7. Acceleration lab — 5184/2138 check + book/slide toggle. 8. Cam comparer — 4 schemes, peaks 1.0/2.0/1.571/2.0, Ex9.2 ΣT4.25s/14.12rpm. 9. Gear+train — 18T/Pd12 → 1.667/1.292/1.410; TV9.33→128.6ccw. 10. Belt-chain-screw — 984rpm/2062fpm band, sprocket D, ½-13@1200→92.3in/min, 4 screw cases.
- Photos: per-chapter slots with captions/alt (scissors, wiper, shaper, camshaft, rack/worm/bevel, serpentine/bike chain, vise/jack/CNC, wrench/pliers); kinematic symbols as theme SVG; Ch4–7 polygons marked "redrawn from slide method".

## Build order
P0 scaffold (Docusaurus + theme CSS + admonitions + sidebar) → P1 migrate 13 MDX → P2 sims → P3 media → P4 search/SEO/deploy. `npm run build` must pass; Lighthouse mobile ≥90.

## Do / do not
Do: verify every 🧮 number before marking done; keep Arabic shaping QA; offline-first (fonts fallback ok).
Do not: add third-party sim embeds; introduce new palette/fonts/radius; add scroll-reveal or gradient décor; publish flagged typos as fact.
