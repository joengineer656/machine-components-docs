---
sidebar_position: 7
---

# Acceleration Analysis

import AccelerationLab from '@site/src/components/AccelerationLab';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="acceleration" />

<div class="jordan-note">التسارع له مركبتان: مماسية بسبب تغيّر المقدار، وعمودية بسبب تغيّر الاتجاه. نفس طريقة السرعة النسبية لكن بمركبات أكثر.</div>

## Components

- **Tangential** $a^t = r·α$ — change in speed; perpendicular to radius.
- **Normal** $a^n = ω^2r = v^2/r$ — change in direction; toward the centre.
- Total: $a = a^n +\!>\, a^t$.

<div class="ar-note">في منعطف بسرعة ثابتة تشعر بدفعة نحو الباب: هذا تغيّر الاتجاه. والضغط على البنزين في المنعطف نفسه: هذا تغيّر المقدار. ومضاعفة السرعة الزاوية تعني أربعة أضعاف التسارع، لذلك تهتز الغسالة عند العصر.</div>

## Relative acceleration

$$a_i^n +\!>\, a_i^t = a_j^n +\!>\, a_j^t +\!>\, a_{i/j}^n +\!>\, a_{i/j}^t$$

Relative tangential is perpendicular to the joining line; relative normal lies along it (i toward j). Shortcuts: translating link → no normal; constant-speed rotation → no tangential.

## Graphical steps

1. Finish velocity analysis first (need every $ω$).
2. Compute known normals $a^n = v^2/r$ and tangentials $a^t = αr$.
3. Draw the acceleration polygon: normals first, then tangentials.
4. Close it, measure unknowns, $α = a^t / r$.

Slide 7.7 (slider-crank): $v_B = 72$ in/s → $a_B^n = 5184$ in/s²; result $a_A = 2138$ in/s² vertical.

<AccelerationLab />

## Analytical forms

Slider-crank (slide calls the slider term $α_4$; it is linear acceleration $a_4$):

$$α_3 = \frac{ω_2^2L_2\sin θ_2 + ω_3^2L_3\sin θ_3 − α_2L_2\cos θ_2}{L_3\cos θ_3}$$

<div class="book-only">Four-bar, book eq. 7.23/7.24: α₃ and α₄ with the full loop-closure terms (see Checks page for the exact forms used here).</div>

<div class="typo-flag">Slide 170 prints the four-bar formulas differently (wrong lengths in α₃, missing ω₃²L₃ term in α₄). This site uses the book version. Confirm with your instructor before the exam.</div>

Slide floating-point example 7.10 ends with $a_X ≈ 33.8$ m/s².

<div class="ar-note">مكبس المحرك عند النقاط الميتة: السرعة صفر لحظة لكن التسارع كبير، فتتولد قوى قصور واهتزازات.</div>
