# AGENTS.md

No code, README, manifest, or toolchain in repo yet — docs project pre-scaffold. Trust `plan.md` + `Machine_Components_Summary.md`; detail lives in `AGENT.md` (singular). Don't invent build/test commands until Docusaurus lands.

## Preview (only runnable thing)
- `python3 -m http.server 8099 --directory themes-gallery` → chooser at `http://127.0.0.1:8099/index.html`; canonical look `theme-03-bauhaus.html`. Theme 3 locked: paper `#FAFAF6`, ink `#111`, red `#D42A1E`, blue `#2140D4`, yellow `#F2B705`; `Archivo Black` display + `Space Grotesk` body (+ `Amiri` for Arabic RTL); radius 0; no gradients, no third-party sim embeds.

## Conventions agents miss
- English main, Arabic notes RTL in white blocks (`🌍`); `🇯🇴` → blue, `📖` → yellow, `🧮` → black/yellow (must reproduce value), `⚠️` → red. Keep exam symbols (`+>`/`⊖`).
- Sims share `<MechStage>` (yellow crank, white coupler, red follower) + slider; verify presets: Grashof 12/3/12/5 → crank-rocker; Q1.25→β20°; R53.19; TV9.33→128.6ccw.
- Never publish flagged slide typos as fact: slide-170 α (use book 7.23/7.24), 93–94 rpm (27.9 vs 133.3), chain C-in-pitches, `F=12/Pd`.
- Order: scaffold → 13 MDX pages → 10 sims → media → search/deploy. `npm run build` + Lighthouse mobile ≥90 once scaffolded.
