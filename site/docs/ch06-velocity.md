---
sidebar_position: 6
---

# Velocity Analysis

import VelocityLab from '@site/src/components/VelocityLab';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="velocity" />

<div class="jordan-note">النقاط لها سرعة خطية، والأذرع لها سرعة زاوية. نقطتان على جسم صلب لا يوجد بينهما إلا سرعة نسبية عمودية على الخط الواصل بينهما. هذه أهم فكرة في الفصل.</div>

## Linear and angular velocity

- **Linear velocity v:** instantaneous speed + direction of a point.
- **Angular velocity ω:** instantaneous rotation rate of a link (cw/ccw). $ω = Δθ / Δt$.
- Relation: $v = r·ω$ — ω must be in rad/s; direction of v is perpendicular to the radius.
- Conversion: $ω$ (rad/s) $= n$ (rpm) $× 2π/60$. Points have linear velocity; links have rotational velocity.

<div class="ar-note">عجلة السيارة: نقطة قريبة من المحور تتحرك ببطء ونقطة على الحافة أسرع، رغم أن السرعة الزاوية واحدة.</div>

## Relative velocity method

Two points on one rigid body have relative velocity perpendicular to the line joining them:

$$v_{B/A} = v_B ⊖ v_A \qquad v_B = v_A +\!>\, v_{B/A}$$

Link angular velocity: $ω_{AB} = v_{B/A} / AB$.

<VelocityLab />

<div class="ar-note">عندما تتجاوز سيارة أخرى تراها تتحرك ببطء بالنسبة لك رغم أن كلتيكما سريعة. هذه هي السرعة النسبية.</div>

## Graphical velocity analysis

1. Draw the mechanism to scale; find the known velocity (usually driver $v = rω$).
2. Write the relative velocity equation; mark known directions and magnitudes.
3. Draw the velocity polygon from a pole point; two unknowns close it.
4. Measure unknowns; get floating-link $ω$ from $v_{rel} / length$.
5. Check cw/ccw from the relative velocity direction.

## Floating points and sliding contact

Coupler point X needs two equations through known points G and H:

$$v_X = v_G +\!>\, v_{X/G} \qquad v_X = v_H +\!>\, v_{X/H}$$

For sliding contact, take two coincident points (one per link); their relative velocity lies along the slot.

## Analytical forms

Slider-crank:

$$ω_3 = −ω_2 \frac{L_2\cos θ_2}{L_3\cos θ_3}$$
$$v_4 = −ω_2L_2\sin θ_2 + ω_3L_3\sin θ_3$$

Four-bar:

$$ω_3 = −ω_2 \frac{L_2\sin(θ_4−θ_2)}{L_3\sin γ} \qquad ω_4 = −ω_2 \frac{L_2\sin(θ_3−θ_2)}{L_4\sin γ}$$

## Slide worked examples

- Shaper: $ω = 4.2$ rad/s, $v_B = 1.26$ m/s; polygon gives ram velocity and slotted-lever $ω$.
- Lever DC (AB = DE = 150 mm, 120 rpm): $v_B = 1.885$ m/s; $v_F = 0.7$ m/s, $ω_{DC} = 5$ rad/s ccw, rubbing speed at C = 0.
- Slider-crank 6-41 (950 rpm): $ω_2 = 99.48$ rad/s, $v_C = 145.86$ in/s.
- Pumps: piston velocity × area $(π/4)(1.0)^2$ = flow (182.66 and 205.81 in³/s).

<div class="typo-flag">Rubbing speed at a pin = difference of link angular velocities × pin radius. Same rate, same sense → zero.</div>
