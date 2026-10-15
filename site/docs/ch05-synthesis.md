---
sidebar_position: 5
---

# Mechanism Design (Synthesis)

import QuickReturn from '@site/src/components/QuickReturn';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="synthesis" />

<div class="jordan-note">هنا نعكس المسألة: نعرف الحركة المطلوبة ونريد أطوال الأذرع. الفكرة الأساسية: زمن الشوط الأمامي لا يساوي زمن الرجوع.</div>

## In-line slider-crank (Q = 1)

$$L_2 = \frac{Δ(R_4)_{max}}{2} \qquad \text{stroke} = 2L_2$$

Smooth acceleration needs $L_3 \gg L_2$; rule of thumb $L_3 > 4L_2$.

Slide design: stroke 1.25 in, 0.2 s out and 0.2 s back → $L_2 = 0.625$ in, $L_3 > 2.5$ in.

<div class="check-block">Cycle time 0.4 s → crank speed = 1 rev / 0.4 s = 150 rpm.</div>

<div class="ar-note">مضخة هواء الدراجة زمن الدفع فيها يساوي زمن الرجوع تقريبا. وذراع الربط الطويل يعطي حركة أنعم مثل مكبس المحرك.</div>

## Quick-return action

$$Q = \frac{\text{advance time}}{\text{return time}} \ge 1$$
$$Q = \frac{180° + β}{180° − β} \qquad β = 180°\frac{Q-1}{Q+1}$$

Crank speed (rpm) = 60 / cycle time in seconds.

<QuickReturn />

<div class="ar-note">ماكينة التشغيل: الشوط القاطع بطيء وقوي لأن القطع يحتاج قوة، والرجوع سريع لأنه فارغ فنوفّر وقتا.</div>

## Offset slider-crank design

1. Compute $β$ from required $Q$.
2. Draw the two limiting slider positions separated by $Δ(R_4)_{max}$.
3. Construct lines at angle $β$ to meet at the crank pivot (extreme distances $L_3−L_2$ and $L_3+L_2$).
4. Pick $L_3$ ($> 4L_2$), measure offset $L_1$ and $L_2$.
5. Crank speed from cycle time.

Slide problem 5-14: $Q = 1.25$, stroke 2.75 in, cycle 0.6 s → $β = 20°$, $ω = 100$ rpm; $L_1 ≈ 1.761$ in, $L_2 ≈ 1.209$ in, $L_3 ≈ 3.959$ in.

## Four-bar design

- **Throw angle** $(Δθ_4)_{max}$: angle between rocker extremes.
- **Transmission angle** $γ$: keep $40° < γ < 140°$.
- Steps: $Q$ and $β$ → draw rocker extremes → construct at $β$ → pick a length, measure the rest → scale to target $L_1$ → check $γ$ and Grashof.

Slide throw example (55°, 1.15 s out, 1 s back, target $L_1 = 6.7611$ in): $Q = 1.15 \to β = 12.55°$; hand solution $L_4 = 4.0$ in gives $L_2 = 1.666$ in, $L_3 = 7.4606$ in.

<div class="typo-flag">Stated times give cycle 2.15 s → about 27.9 rpm. The handwritten 133.3 rpm on the slide matches a 0.45 s cycle — looks like a different problem. Confirm with your instructor.</div>

<div class="check-block">Slide problem 5-2: out 0.35 s, in 0.2 s → Q = 1.75, β = 49.1°, cycle 0.55 s → about 109 rpm.</div>

<div class="ar-note">دفع باب ثقيل بزاوية حادة صعب لأن معظم القوة تضيع. وكذلك دواسة الدراجة عند النقطة الميتة يصعب دفعها لأن زاوية النقل صغيرة.</div>
