---
sidebar_position: 11
---

# Screw Mechanisms

import BeltChainScrew from '@site/src/components/BeltChainScrew';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="screw" />

<div class="jordan-note">البرغي يحوّل الدوران إلى حركة خطية. المهم: هل يدور البرغي أم الصامولة؟ وهل يتحرك البرغي أم الصامولة؟ أربع حالات.</div>

Four cases: screw rotates + nut moves; screw rotates + screw moves; nut rotates + screw moves; nut rotates + nut moves. Self-locking: friction stops the load back-driving the screw.

<div class="ar-note">الملزمة: البرغي يدور والصامولة تتحرك. وغطاء البرطمان: الصامولة تدور وتتحرك. ورافعة السيارة تبقى مرفوعة لأنها قفل ذاتي.</div>

## Geometry and designation

Major/minor diameter, pitch, threads per inch, root, crest, body. Unified `½−13 UNC` → 13 threads per inch. Metric `M8−1.25` → 1.25 mm pitch. Inch pitch $p = 1/(\text{threads per inch})$.

## Kinematics

$$ΔR = p·Δθ \qquad v = p·ω \qquad a = p·α$$

($Δθ$ in revolutions; $ω$ in rev/min → $v$ in in/min.)

<div class="check-block">1-8 rod, 10 rev: ΔR = 1.25 in. ¾-10 UNC, 12 rev: lowers 1.2 in. ½-13 UNC at 1200 rpm: v ≈ 92.3 in/min.</div>

<BeltChainScrew />

<div class="ar-note">رافعة السيارة: دورات كثيرة ترفع قليلا. خطوة صغيرة تعني قوة كبيرة وحركة بطيئة. وبراغي الـ CNC تحرّك الرأس بدقة عالية.</div>
