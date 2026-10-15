---
sidebar_position: 3
---

# Vectors

import VectorPolygon from '@site/src/components/VectorPolygon';
import ChapterArt from '@site/src/components/ChapterArt';

<ChapterArt variant="vectors" />

<div class="jordan-note">الفصل 3 في الكتاب (الفصل 2 غير مشروح في الشرائح). المتجهات هي لغة التحليل الرياضي لكل ما بعدها: إزاحة، سرعة، تسارع.</div>

A vector has magnitude and direction (sense). Addition (`R = A +> B`): place tip-to-tail; the resultant runs from first tail to last tip. Subtraction (`J = A ⊖ B = A +> (−B)`): the subtracted vector goes tip-to-tip.

<div class="ar-note">قارب يعبر نهرا: سرعة القارب زائد سرعة التيار تساوي السرعة الفعلية. وشخصان يسحبان صندوقا بحبلين: المحصلة هي اتجاه حركة الصندوق. والسرعة النسبية بين سيارتين هي طرح متجهين.</div>

## Graphical method

Draw the vectors to scale (CAD works well) and measure the resultant's length and angle.

## Analytical method

Two vectors — triangle plus trigonometry:

$$R = \sqrt{A^2 + B^2 - 2AB\cos\theta}$$

$$\beta = \sin^{-1}\left[\frac{B}{R}\sin\theta\right]$$

Slide example: $A = 46$, $B = 23$ ft/s², $\theta = 95° \to R = 53.19$ ft/s².

<VectorPolygon />

Three or more vectors — components:

$$R_x = \sum A_x \qquad R_y = \sum A_y$$
$$R = \sqrt{R_x^2 + R_y^2} \qquad \text{direction} = \tan^{-1}(R_y/R_x)$$

with $A_x = A\cos\theta$, $A_y = A\sin\theta$ (check the quadrant).

<div class="ar-note">رمي كرة بزاوية: نفصل سرعتها إلى مركبة أفقية وأخرى رأسية ونحلّل كل واحدة وحدها.</div>

## Vector equations

Write an equation around a closed polygon, e.g. `A = C +> D +> B`. A 2D vector equation solves two unknowns: magnitude + direction of one vector, or magnitudes of two vectors with known directions. Draw the polygon, close it, solve.
