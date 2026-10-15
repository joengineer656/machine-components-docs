---
sidebar_position: 2
---

# Machines and Mechanisms

import GrashofExplorer from '@site/src/components/GrashofExplorer';
import InversionToggle from '@site/src/components/InversionToggle';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="mechanisms" />

## Core definitions

- **Machine:** a device used to alter, transmit and direct forces to accomplish a specific objective (example: a chain saw).
- **Mechanism:** the mechanical portion of a machine that transfers motion and force from a power source to an output.
- **Kinematics:** the study of how things move (position, displacement, rotation, speed, velocity, acceleration). It gives the geometry, dimensions and operating range.
- **Dynamic analysis:** power capacity, stability, member loads.
- **Planar mechanism:** motion in 2D space.

<div class="ar-note">السيارة آلة، أما الأجزاء التي تنقل الحركة من المحرك إلى العجلات (عمود المرفق، التروس، العمود) فهي الآلية.</div>

## Mechanism terminology

- **Link:** a rigid body. **Frame:** the fixed link. **Joint:** the connection between links.
- **Linkage:** links in a closed chain. **Mechanism:** a group of links with one link fixed.
- **Primary (full) joints:** revolute (pin/hinge, pure rotation); sliding/prismatic (linear sliding).
- **Higher-order (half) joints:** allow rotation and sliding — cam joint, gear connection.
- **Simple link:** two joints (crank, rocker). **Complex link:** more than two (rocker arm, bellcrank).
- **Actuator:** the power-source link. **Point of interest:** the point whose motion you care about.

<div class="ar-note">مفصلة الباب مفصل دوّار: دوران فقط بلا انزلاق. ودرج المكتب مفصل منزلق: حركة خطية فقط.</div>

## Kinematic diagrams

A kinematic model shows only the dimensions that influence the motion. Steps: identify the frame; number links 1…n and letter joints A, B, C…; draw links as lines between joints; mark the fixed frame with the ground symbol.

## Mobility (degrees of freedom)

Kutzbach criterion (planar):

$$F = 3(n-1) - 2j_p - j_h$$

| $F$ | Meaning |
|---|---|
| $F = 1$ | Constrained mechanism (one input drives everything) |
| $F \le 0$ | Locked mechanism / structure |
| $F > 1$ | Unconstrained (needs more than one driver) |

Gruebler's criterion (constrained, pin joints only): $1 = 3(l-1) - 2j$, or $3l - 2j - 4 = 0$.

A pin joint connects exactly two links — three links meeting at one pin count as two joints. **Inversion:** fixing different links of the same chain gives different mechanisms.

<InversionToggle />

<div class="ar-note">المقص درجة حرية واحدة: حرّك المقبض فتتحرك الشفرتان معا. والجسر الحديدي هيكل مقفل لا يتحرك. وذراع الإنسان يحتاج أكثر من مدخل لتثبيت وضعه.</div>

## Four-bar and Grashof's law

Four links, four pins: frame, driver (input), coupler, follower. Continuous relative motion is possible only if $s + l < p + q$.

| Condition | Shortest link | Category |
|---|---|---|
| $s + l < p + q$ | Frame | Double crank |
| $s + l < p + q$ | Side | Crank–rocker |
| $s + l < p + q$ | Coupler | Double rocker |
| $s + l = p + q$ | Any | Change point |
| $s + l > p + q$ | Any | Triple rocker |

<div class="ar-note">مساحات زجاج السيارة crank-rocker: محرك صغير يدور دورة كاملة والذراع يتأرجح ذهابا وإيابا.</div>

<GrashofExplorer />

## Slider-crank

Four links, four joints (3 pins + 1 slider): frame, crank, coupler, sliding link. In-line (slider axis through crank pivot) or offset.

<div class="ar-note">محرك السيارة slider-crank: المكبس يتحرك خطيا وعمود المرفق يدور.</div>

## Slide examples

- Toggle clamp: $n = 4, j = 4 \to F = 1$.
- Package ram (problem 1-15): $n = 6, j = 7 \to F = 1$.
- Water-spray four-bar ($a = 12, b = 3, c = 12, d = 5$ in): $s = 3, l = 12 \to 3 + 12 < 12 + 5$, shortest is a side → **crank–rocker**.
