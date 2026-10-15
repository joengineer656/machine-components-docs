---
sidebar_position: 9
---

# Gears

import GearStudio from '@site/src/components/GearStudio';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="gears" />

<div class="jordan-note">الترس ينقل الحركة الدورانية والعزم. الأسنان الإنفولوت تعطي تعشيقا سلسا. وشرط التعشيق: نفس زاوية الضغط ونفس الـ Diametral Pitch.</div>

Teeth transmit rotation and torque without slipping; involute curves engage smoothly.

Spur, rack and pinion, internal, helical, bevel, herringbone, miter, worm.

<div class="ar-note">مقود السيارة rack and pinion. ومفاتيح العود worm gear. والمثقاب اليدوي bevel gear بزاوية تسعين درجة.</div>

## Spur gear geometry

$$p = \frac{πd}{N} \qquad P_d = \frac{N}{d} \qquad d_b = d\cos φ$$
$$a = 1/P_d \qquad b = 1.25/P_d \qquad F = 12/P_d$$

Outside diameter $= d + 2a$; root $= d − 2b$. Pressure angle $φ$ standard: 14.5°, 20°, 25°. Mating gears share $φ$ and $P_d$.

<GearStudio /> Centre distance: external $c = r_1 + r_2$; internal $c = r_2 − r_1$.

<div class="check-block">18 teeth, Pd = 12, 20° full-depth: d = 1.5 in, outside 1.667 in, root 1.292 in, F = 1 in, db = 1.410 in, p = 0.262 in. Two 4-pitch gears (14, 42T): d = 3.5/10.5 in → c = 7.0 in.</div>

## Kinematics

$$VR = \frac{ω_1}{ω_2} = \frac{d_2}{d_1} = \frac{N_2}{N_1}$$

Sign: external mesh reverses (+ to −). Pitch-line velocity $v_t = πdn/12$ (d in inches, n rpm → fpm) sets lubrication and quality.

<div class="ar-note">الغيار الأول نسبة كبيرة: عزم عال وسرعة منخفضة. والدراجة: ترس أمامي كبير مع خلفي صغير يعطي سرعة عالية بجهد أكبر.</div>

## Gear trains

$$TV = (VR)_1·(VR)_2·… \qquad ω_{out} = ω_{in}/TV$$

<div class="check-block">Slide train N = 24/48/24/48/15/35, input 1200 rpm cw: TV = 9.33 → output ≈ 128.6 rpm ccw (three external meshes). Pair centres: 2.25, 3.0, 2.5 in.</div>

<div class="ar-note">ساعة اليد قطار تروس يخفّض سرعة المحرك إلى حركة العقارب. وكل تعشيق خارجي يعكس الاتجاه.</div>
