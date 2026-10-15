---
sidebar_position: 12
---

# Static and Dynamic Machine Forces

import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="forces" />

<div class="jordan-note">القوى الساكنة تكفي عندما يكون التسارع صغيرا (أقل من 0.25g) أو السرعة ثابتة. والأهم: ارسم مخطط الجسم الحر لكل عضو.</div>

Static analysis covers stationary or constant-velocity links — often fine below 0.25 g. Moment: $M_A = F·d$ (perpendicular distance), with sense cw/ccw.

<div class="ar-note">مفتاح الربط: ذراع أطول يفتح الصامولة العنيدة بجهد أقل. وادفع الباب بعيدا عن المفصلة فيفتح بسهولة.</div>

## Free-body diagrams

1. Isolate the component. 2. Draw it floating freely. 3. Replace supports with forces/couples. 4. Prevented motion direction → reaction in that direction. 5. One FBD per link (engine hoist: whole hoist, link DEF, base, cylinder CE).

<div class="ar-note">تدفع خزانة ثقيلة: ارسم الخزانة وحدها ثم وزنها ودفعك والاحتكاك ورد فعل الأرض.</div>

## Two-force members

Two forces only → tension or compression along the joining line (e.g. hydraulic cylinder CE).

<div class="ar-note">الحبل المشدود شد فقط بمحاذاته. والمكبس الهيدروليكي شد أو ضغط على امتداد محوره.</div>

## Static equilibrium

$$\sum F_x = 0 \qquad \sum F_y = 0 \qquad \sum M = 0$$

Per member: FBD → mark two-force members → three equations each → moment points that kill unknowns → solve.

<div class="check-block">Pliers problem 1-12: 10 lb on handles, arms 3.75/1.25 in → F_nut = 30 lb about the pivot.</div>

Dynamic force (short on slides): when acceleration matters, $\sum F = m·a$ with Chapter 7 acceleration. Slider check: $m = 0.2$ kg, $a = 10.495$ m/s² → $F ≈ 2.10$ N.

<div class="ar-note">الكماشة: عشر باوندات عند المقبضين تصبح قوة أكبر عند الفكين لأن ذراع المقبض أطول. والميزان يتوازن عندما تتساوى العزوم.</div>
