---
sidebar_position: 8
---

# Cams

import CamComparer from '@site/src/components/CamComparer';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="cams" />

<div class="jordan-note">الكام يحوّل الدوران إلى حركة تابع محددة مسبقا. الخطوات: حدّد الحركة → ارسم مخطط الإزاحة → اختر نوع الحركة.</div>

## Types

Plate, drum, linear cams. Followers: translating or pivoted; in-line or offset; knife-edge, roller, flat-face, spherical.

<div class="ar-note">عمود الكامات في المحرك يفتح الصمام في اللحظة المحددة ثم يغلقه. وشكل الكام يحدد حركة الصمام.</div>

## Prescribed motion and displacement diagram

Rise, dwell, fall, dwell intervals:

$$\sum T_i \;\; \text{total cycle} \qquad ω = 1\,\text{rev}/\sum T_i$$
$$β_i = ω·T_i$$

Slide 9.1: $ΣT = 3.9$ s, $ω = 15.38$ rpm, $β = 110.5°, 27.6°, 82.9°, 55.3°, 82.9°$.

## Motion schemes

**Constant velocity:** rise $ΔR = H·t/T$, $v = ±H/T$; infinite acceleration at interval ends (impact).

**Constant acceleration** (parabolic), rise: first half $ΔR = 2H(t/T)^2$, $a = +4H/T^2$; second half mirrored with $−4H/T^2$.

**Harmonic:** rise $ΔR = (H/2)[1 − \cos(πt/T)]$, $v_{max} = πH/2T$, $a_{max} = π^2H/2T^2$.

**Cycloidal:** rise $ΔR = H[t/T − (1/2π)\sin(2πt/T)]$, $a_{max} = 2πH/T^2$.

| Scheme | Peak v | Peak a |
|---|---|---|
| Constant velocity | 1.000 H/T | ∞ |
| Constant acceleration | 2.000 H/T | 4.000 H/T² |
| Harmonic | 1.571 H/T | 4.945 H/T² |
| Cycloidal | 2.000 H/T | 6.283 H/T² |

<div class="ar-note">السرعة الثابتة مثل إيقاف صندوق ثقيل فجأة: صدمة. والسيكلويدي مثل المصعد الحديث: يبدأ ببطء ويتوقف بنعومة.</div>

<CamComparer />

## Slide examples

Example 9.2: rise 50 mm/1.5 s constant velocity, return 2.0 s cycloidal, dwell 0.75 s → $ΣT = 4.25$ s, $ω = 14.12$ rpm. Assembly-machine trio (0.75 in const-V, 0.75 in const-A, 13 mm harmonic): $ΣT = 7$ s → $ω = 8.57$ rpm.

## Pressure angle

Contact forces act perpendicular to surfaces. Pressure angle $δ$ sits between follower-motion line and contact normal. Reduce it by: bigger base circle, smaller displacement, larger rise/fall cam angle, smaller offset, different scheme.

<div class="ar-note">دفع باب ثقيل قرب المفصلة يحتاج قوة أكبر. وكذلك نكبّر الدائرة الأساسية لتصغير زاوية الضغط.</div>

## Nomenclature

<div class="book-only">Trace point (follower contact point), prime circle (through trace point at home), pitch curve (roller-centre path). Profile construction uses kinematic inversion: hold the cam, rotate the follower opposite to cam rotation.</div>
