---
sidebar_position: 4
---

# Position and Displacement Analysis

import PositionSweep from '@site/src/components/PositionSweep';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="position" />

<div class="jordan-note">الفكرة: حرّك الذراع المحرّك ثم اعرف أين أصبحت باقي النقاط. الإزاحة تساوي الموضع النهائي ناقص الموضع الابتدائي.</div>

## Definitions

- **Position of a point:** vector from origin, e.g. $R_B = 34$ mm ∠45°.
- **Angular position:** angle of a link line from a reference axis (e.g. $θ_2 = 134.3°$ ccw).
- **Linear displacement:** $ΔR_C = R_C′ ⊖ R_C$ (final minus initial).
- **Rotational displacement:** $Δθ_4 = θ_4′ − θ_4$ (give sense cw/ccw).

## Graphical position analysis

1. Draw the mechanism to scale at the initial position.
2. Move the driver to its new angle.
3. Respect the joints: arcs of link lengths locate the new pin positions.
4. Measure the new angles and compute displacements.

<div class="ar-note">الحفّارة: عندما يمتد المكبس الهيدروليكي نريد معرفة أين أصبحت الدلو بالضبط.</div>

## Analytical position analysis

Slider-crank (offset $L_1$, crank $L_2$, coupler $L_3$, frame distance $L_4$):

$$θ_3 = \sin^{-1}\left[\frac{L_1 + L_2\sin θ_2}{L_3}\right]$$
$$L_4 = L_2\cos θ_2 + L_3\cos θ_3$$
$$γ = 180° − (θ_2 + θ_3)$$

Four-bar ($L_1$ frame, $L_2$ input, $L_3$ coupler, $L_4$ follower):

$$BD = \sqrt{L_1^2 + L_2^2 − 2L_1L_2\cos θ_2}$$
$$γ = \cos^{-1}\left[\frac{L_3^2 + L_4^2 − BD^2}{2L_3L_4}\right]$$

## Limiting positions

Configurations with the follower in an extreme position (crank and coupler lined up, stretched or folded). They give total stroke or throw.

<div class="ar-note">مساحة الزجاج: الوضع الأقصى يمينا والأقصى يسارا، والمسافة بينهما هي زاوية المسح.</div>

## Coupler point and full cycle

Transfer known distances from B and C to locate floating point X′. For a full cycle, position links every 30° or 90° of input and plot output versus input angle — the displacement diagram.

<PositionSweep />
