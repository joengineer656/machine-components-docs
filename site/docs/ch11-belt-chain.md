---
sidebar_position: 10
---

# Belt and Chain Drives

import BeltChainScrew from '@site/src/components/BeltChainScrew';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="beltdrive" />

<div class="jordan-note">الأحزمة والسلاسل تنقل الحركة بين محورين متباعدين. نسبة السرعة من الأقطار أو عدد الأسنان. واحفظ حدود السرعة المثالية.</div>

## Belt drives

$$VR = \frac{ω_1}{ω_2} = \frac{D_2}{D_1} \qquad v_b = \frac{πDn}{12}$$

Ideal: $1000 < v_b < 6500$ fpm. V-belt section (3V/5V/8V) from horsepower and rpm charts. Centre distance: $D_2 < C < 3(D_1 + D_2)$. Standard lengths:

$$L = 2C + \frac{π}{2}(D_2+D_1) + \frac{(D_2−D_1)^2}{4C}$$

<div class="check-block">1750 rpm motor, 4.5 in → 8 in: n₂ ≈ 984 rpm; vb ≈ 2062 fpm, inside the ideal range.</div>

<BeltChainScrew />

<div class="ar-note">سير المروحة ينقل الحركة إلى المولّد والمضخة والمكيف. وبكرة صغيرة تقود كبيرة تعني تخفيض السرعة وزيادة العزم.</div>

## Chain drives

$$VR = \frac{N_2}{N_1} \qquad v_c < 2500\;\text{fpm ideal}$$

Lubrication: manual below 650 fpm, bath 650–1500, stream above 1500. Chain number = 80·p (No.40 → ½ in). Sprocket $D = p/\sin(180°/N)$. Centre $30p < C < 50p$. Length in links (round to integer), then recompute actual C.

<div class="typo-flag">First chain-length formula prints the last term as /(4π²C) — dimensionally correct only if C is in pitches. Use C/p wherever C appears.</div>

<div class="ar-note">سلسلة الدراجة لا تنزلق لأنها تعشق الأسنان. والمرتخية تقفز من الترس لذلك نحدّد المسافة. وتزييت الدراجة يدوي لأن سرعتها بطيئة.</div>
