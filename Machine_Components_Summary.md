# Machine Components & Mechanisms — Course Summary

**Course:** Machine Components & Mechanisms (مكونات الآلة وآلياتها) — Mechatronics Engineering, Al-Balqa Applied University
**Main source:** Lecture slides (272 slides) · **Second source:** *Machines and Mechanisms: Applied Kinematic Analysis*, D. Myszka, 3rd ed.
**Grading:** Mid exam 40% · Participation 10% · Final exam 50%

## How to read this file

| Marker | Meaning |
|---|---|
| *(no marker)* | Taken from the **slides** |
| 📖 **Book only** | Information that is in the book but **not** in the slides |
| 🎬 **Simulate** | This idea is hard to understand from static text. Animate/simulate it (GeoGebra, MATLAB/Simulink, Working Model, SolidWorks Motion, Desmos…) |
| 🧮 **Check** | A short calculation I did myself from the slide formulas, so you can test your understanding. It is not written on the slides |
| 🇯🇴 | Short Arabic note |
| 🌍 | Real-life example in Arabic, to help you remember the concept |

**Notation on the slides:** `+>` means *vector addition*, and `−>` (or `⊖`) means *vector subtraction*. Angles are in degrees; the degree symbol was lost in the slide text.

**Coverage:** The slides cover book chapters **1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13–14**. Chapters 2 and 8 are skipped. Topics in the course outline that the slides never reach (balancing, joints and joining elements, shafts, keys, bearings, clutches, brakes) are **not** summarized, as you requested.

## Contents

1. [Chapter 1 — Machines and Mechanisms](#chapter-1--machines-and-mechanisms)
2. [Chapter 3 — Vectors](#chapter-3--vectors)
3. [Chapter 4 — Position and Displacement Analysis](#chapter-4--position-and-displacement-analysis)
4. [Chapter 5 — Mechanism Design (Synthesis)](#chapter-5--mechanism-design-synthesis)
5. [Chapter 6 — Velocity Analysis](#chapter-6--velocity-analysis)
6. [Chapter 7 — Acceleration Analysis](#chapter-7--acceleration-analysis)
7. [Chapter 9 — Cams](#chapter-9--cams)
8. [Chapter 10 — Gears](#chapter-10--gears)
9. [Chapter 11 — Belt and Chain Drives](#chapter-11--belt-and-chain-drives)
10. [Chapter 12 — Screw Mechanisms](#chapter-12--screw-mechanisms)
11. [Chapters 13–14 — Static (and Dynamic) Machine Forces](#chapters-1314--static-and-dynamic-machine-forces)
12. [Quick formula sheet](#quick-formula-sheet)

---

## Chapter 1 — Machines and Mechanisms

> 🇯🇴 **ملاحظة:** هذا الفصل هو الأساس. افهم الفرق بين الآلة (Machine) والآلية (Mechanism)، وتعلّم حساب درجات الحرية (DOF) لأنها تتكرر في كل المسائل.

### Core definitions
- **Machine:** a device used to alter, transmit and direct forces to accomplish a specific objective (example: a chain saw).
- **Mechanism:** the mechanical portion of a machine that transfers motion and force from a power source to an output.
- **Kinematics:** the study of how things move (position, displacement, rotation, speed, velocity, acceleration). It gives the geometry/dimensions and the operating range.
- **Dynamic analysis:** power capacity, stability, member loads.
- **Planar mechanism:** motion in 2D space.

> 🌍 **مثال من الحياة:** **الآلة مقابل الآلية:** السيارة = آلة. أما الأجزاء التي تنقل الحركة من المحرك إلى العجلات (عمود المرفق، التروس، العمود) فهي الـ**آلية**.

### Mechanism terminology
- **Link:** a rigid body. **Frame:** the fixed link. **Joint:** the connection between links.
- **Linkage:** links connected together in a closed chain. **Mechanism:** a group of links with one link fixed (absolutely or relatively).
- **Primary (full) joints:**
  - *Revolute* (pin/hinge): pure rotation.
  - *Sliding* (prismatic/piston): linear sliding.
- **Higher-order (half) joints:** allow rotation **and** sliding, e.g. *cam joint* and *gear connection*.
- **Simple link:** only two joints (crank, rocker). **Complex link:** more than two joints (rocker arm, bellcrank).
- **Actuator:** the power-source link. **Point of interest:** a point whose motion you care about.

> 🌍 **أمثلة من الحياة:**
> - **المفصل الدوّار (Revolute):** مفصلة الباب. دوران فقط، ولا انزلاق.
> - **المفصل المنزلق (Sliding):** درج المكتب. حركة خطية فقط.

### Kinematic diagrams / models
- A **kinematic model** shows **only the dimensions that influence the motion**; remove all superfluous detail.
- Use the standard symbols (simple link = line, complex link = triangle, pin = small circle, slider = block, cam and gear joints = their outline shapes).
- Steps: (1) identify the frame, (2) number links 1…n and letter joints A, B, C…, (3) draw links as lines between joints, (4) mark the fixed frame with the ground symbol.

### Mobility (degrees of freedom)
**Kutzbach criterion (planar):**

```
F = 3(n − 1) − 2·jp − jh
n  = number of links (including the frame)
jp = number of primary joints
jh = number of higher-order joints
```

| F | Meaning |
|---|---|
| F = 1 | **Constrained** mechanism (one input drives everything) |
| F ≤ 0 (< 1) | **Locked** mechanism / structure |
| F > 1 | **Unconstrained** (needs more than one driver) |

**Gruebler's criterion** (constrained motion, F = 1, only pin joints): `1 = 3(l − 1) − 2j`, or `3l − 2j − 4 = 0`.

**Special case:** a pin joint connects exactly **two** links. When three links meet at one pin, count it as **two** joints (2–3 and 3–4).

**Inversion:** fixing different links of the same kinematic chain gives different mechanisms.

> 🎬 **Simulate:** Inversion is much easier to see animated. Build a four-bar in GeoGebra and re-fix a different link each time.

> 🌍 **أمثلة من الحياة:**
> - **درجات الحرية F = 1:** المقص. حرّك المقبض فتتحرك الشفرتان معاً. أما **F = 0** فمثل جسر حديدي أو سقف مثلثي، فهو هيكل لا يتحرك (Locked).
> - **F > 1:** ذراع الإنسان أو ذراع روبوت. تحتاج أكثر من مدخل لتثبيت وضعها.
> - **Inversion:** نفس سلسلة الأذرع، وتثبيت ذراع مختلف يعطي آلية مختلفة. مثل مقص يمكنك مسك أي شفرة منه.

### Four-bar mechanism and Grashof's law
- 4 links, 4 pins: **frame, driver (input), coupler, follower**.
- **Grashof's law:** continuous relative motion is possible only if `s + l < p + q`
  (s = shortest, l = longest, p and q = the other two).

| Case | Condition | Shortest link | Category |
|---|---|---|---|
| 1 | s + l < p + q | Frame | Double crank (crank–crank) |
| 2 | s + l < p + q | Side (input/output) | Crank–rocker |
| 3 | s + l < p + q | Coupler | Double rocker (rocker–rocker) |
| 4 | s + l = p + q | Any | Change point |
| 5 | s + l > p + q | Any | Triple rocker |

> 🎬 **Simulate:** The three Grashof types (crank–crank, crank–rocker, rocker–rocker) and the *change point* case only make sense when you see the coupler curves and the dead-centre positions moving. Animate them.

> 🌍 **أمثلة من الحياة:**
> - **Crank-Rocker:** مساحات زجاج السيارة. محرك صغير يدور دورة كاملة (Crank) والذراع يتأرجح ذهاباً وإياباً (Rocker).
> - **Double Rocker:** بعض أذرع الرافعات والأرجوحات، حيث تتأرجح الذراعان ولا تدور أي منهما دورة كاملة.

### Slider-crank mechanism
- 4 links, 4 joints (3 pins + 1 slider): **frame, crank, coupler, sliding link**.
- **In-line** (slider axis passes through the crank pivot) or **offset**.

> 🌍 **مثال من الحياة:** **Slider-Crank:** محرك السيارة. المكبس (Slider) يتحرك خطياً وعمود المرفق (Crank) يدور.

### Slide examples
- Toggle clamp: n = 4, j = 4 → **F = 1**.
- Package ram (problem 1-15): n = 6, j = 7 → **F = 1**.
- Water-spray four-bar (a = 12, b = 3, c = 12, d = 5 in): s = 3, l = 12 → 3 + 12 < 12 + 5 → shortest is a side → **crank–rocker**.

---

## Chapter 3 — Vectors

> 🇯🇴 **ملاحظة:** الفصل 3 في الكتاب (الفصل 2 غير مشروح في الشرائح). المتجهات هي لغة التحليل الرياضي لكل ما بعدها (إزاحة، سرعة، تسارع).

- A vector has **magnitude** and **direction** (sense).
- **Addition** (`R = A +> B`): place vectors **tip-to-tail**; the resultant goes from the first tail to the last tip.
- **Subtraction** (`J = A ⊖ B = A +> (−B)`): a negative vector has the same magnitude and opposite sense. Graphically, the subtracted vector is placed **tip-to-tip**.

> 🌍 **أمثلة من الحياة:**
> - **جمع المتجهات:** قارب يعبر نهراً. سرعة القارب + سرعة التيار = السرعة الفعلية (المحصلة). لذلك يصل القارب إلى الضفة الأخرى في نقطة أبعد من المقابلة.
> - **طريقة رأس-لذيل:** شخصان يسحبان صندوقاً بحبلين بزاويتين مختلفتين. المحصلة هي اتجاه حركة الصندوق.
> - **الطرح (A − B):** السرعة النسبية بين سيارتين. إذا كانت سيارتك 100 كم/س وسيارة أمامك 80 كم/س في نفس الاتجاه، فسرعتك النسبية 20 كم/س فقط.

### Graphical method
Draw the vectors **to scale** (a CAD system works well) and measure the resultant's length and angle.

### Analytical method
- **Two vectors → triangle + trigonometry**
  ```
  R = √(A² + B² − 2AB·cos θ)        (θ = interior angle between the tail-to-tip sides)
  β = sin⁻¹[ (B / R) · sin θ ]
  ```
  (Slide example: A = 46, B = 23 ft/s², θ = 20° + 75° = 95° → R = 53.19 ft/s².)
- **Three or more vectors → components**
  ```
  Rx = ΣAx          Ry = ΣAy
  R  = √(Rx² + Ry²)       direction = tan⁻¹(Ry / Rx)   (check the quadrant)
  Ax = A·cos θ,  Ay = A·sin θ
  ```

> 🌍 **مثال من الحياة:** **المركبات (x, y):** رمي كرة بزاوية. نفصل سرعتها إلى مركبة أفقية ومركبة رأسية ونحلّل كل واحدة وحدها.

### Vector equations
- Write an equation around a closed polygon, e.g. `A = C +> D +> B`.
- A 2D vector equation can solve **two unknowns**: either (a) magnitude + direction of **one** vector, or (b) the magnitudes of **two** vectors (directions known). Draw the polygon, close it, and solve with the triangle/component method.

> 🎬 **Simulate:** Dragging vectors tip-to-tail in GeoGebra shows why a polygon closes and why exactly two unknowns can be solved.

---

## Chapter 4 — Position and Displacement Analysis

> 🇯🇴 **ملاحظة:** الفكرة: حرّك الذراع المحرِّك (Driver) ثم اعرف أين أصبحت باقي النقاط. الإزاحة = الموضع النهائي − الموضع الابتدائي.

### Definitions
- **Position of a point:** a vector from an origin to the point, e.g. `R_B = 34 mm ∠45°`.
- **Angular position of a link:** angle of a line on the link measured from a reference axis (e.g. θ₂ = 134.3° ccw).
- **Linear displacement:** `ΔR_C = R_C′ ⊖ R_C` (final minus initial).
- **Rotational displacement:** `Δθ₄ = θ₄′ − θ₄` (give the sense cw/ccw).

> 🌍 **مثال من الحياة:** **الإزاحة الزاوية:** تحريك مقبض باب السيارة أو مرآة السيارة بزاوية 30°. الإزاحة = الوضع النهائي − الوضع الابتدائي.

### Graphical position analysis (steps)
1. Draw the mechanism to scale at the initial position.
2. Move the **driver** link to its new angle/position.
3. Respect the joints: a pin keeps the same point on both links; the other links must still connect (use arcs of the link lengths to find the new pin positions).
4. Measure the new angles/positions and compute displacements.

> 🌍 **مثال من الحياة:** **تحديد موضع النقاط (حركة الأذرع):** حفّارة (Excavator). عندما يمتد المكبس الهيدروليكي، نريد معرفة أين أصبحت الدلو (Bucket) بالضبط.

### Analytical position analysis
Same geometry as the graphical method, but solved with **triangles** (law of sines / cosines). The closed-form equations are:

**Slider-crank (offset L₁, crank L₂, coupler L₃, frame distance L₄)**
```
θ₃ = sin⁻¹[ (L₁ + L₂·sin θ₂) / L₃ ]
L₄ = L₂·cos θ₂ + L₃·cos θ₃
γ  = 180° − (θ₂ + θ₃)
```

**Four-bar (L₁ frame, L₂ input, L₃ coupler, L₄ follower)**
```
BD = √(L₁² + L₂² − 2·L₁·L₂·cos θ₂)
γ  = cos⁻¹[ (L₃² + L₄² − BD²) / (2·L₃·L₄) ]
θ₄ = 180° − cos⁻¹[ (L₁² − L₂² + BD²) / (2·L₁·BD) ] − cos⁻¹[ (L₄² − L₃² + BD²) / (2·L₄·BD) ]
θ₃ = θ₄ − γ
```

### Limiting positions
Configurations that put the follower link in an **extreme position** (e.g. crank and coupler lined up, either stretched out or folded back). They give the total stroke or throw.

> 🌍 **مثال من الحياة:** **الأوضاع الحدّية (Limiting positions):** مساحة زجاج السيارة. الوضع الأقصى يميناً والوضع الأقصى يساراً، والمسافة بينهما هي زاوية المسح.

### Point on a floating link (coupler point X)
1. Orient the primary linkage points (A, B, C, D) in the new position.
2. Transfer the known distances (`l_BX`, `l_CX`) from B and C (with compass arcs or triangle).
3. The intersection is X′. Draw the new link position.

> 🌍 **مثال من الحياة:** **نقطة على الذراع العائم (Coupler):** نقطة على ذراع الربط (Coupler) في مساحة الزجاج، فمسارها منحنى معقّد وليس خطاً مستقيماً.

### Complete cycle
Position the links in several phases (e.g. every 30° or 90° of the input) and plot the output against the input angle to make a **displacement diagram**.

> 🎬 **Simulate:** Use a spreadsheet or MATLAB to sweep θ₂ from 0° to 360° and plot the output. The displacement diagram and the "limiting positions" are much clearer from an animation or plot than from a single drawing.

> 🌍 **مثال من الحياة:** **مخطط الإزاحة (دورة كاملة):** حركة دواسة الدراجة. نرسم موضع الدواسة مقابل زاوية الدوران لدورة كاملة.

---

## Chapter 5 — Mechanism Design (Synthesis)

> 🇯🇴 **ملاحظة:** هنا نعكس المسألة: نعرف الحركة المطلوبة ونريد إيجاد أطوال الأذرع. الفكرة الأساسية: وقت الشوط الأمامي ≠ وقت الشوط الراجع (Quick Return).

**Mechanism synthesis:** determine the dimensions of a mechanism that gives the desired motion.

### In-line slider-crank (symmetric motion, Q = 1)
```
L₂ = Δ(R₄)max / 2          (stroke = 2·L₂)
Smooth acceleration:  L₃ ≫ L₂      Rule of thumb:  L₃ > 4·L₂
```
Design example (slide): stroke 1.25 in, 0.2 s out and 0.2 s back → L₂ = 0.625 in, L₃ > 2.5 in.
🧮 **Check:** cycle time = 0.4 s → crank speed = 1 rev / 0.4 s = **150 rpm**.

> 🌍 **أمثلة من الحياة:**
> - **Q = 1 (Slider-Crank عادي):** مضخة هواء الدراجة. زمن الدفع يساوي زمن الرجوع تقريباً.
> - **L₃ > 4L₂:** إذا كان ذراع الربط (L₃) قصيراً جداً مقارنة بالكرنك (L₂) تصبح الحركة مرتجّة وغير ناعمة. لذلك ذراع الربط الطويل يعطي حركة أنعم، مثل مكبس المحرك.

### Quick-return action
Offset slider-cranks and four-bars give quick return (the return stroke is faster).
```
Q = (time of advance stroke) / (time of return stroke) ≥ 1
Q = (180° + β) / (180° − β)          β = 180°·(Q − 1)/(Q + 1)
```
β is the **imbalance angle**. Crank speed (rpm) = 60 / (total cycle time in seconds).

> 🌍 **مثال من الحياة:** **Quick Return:** ماكينة التشغيل (Shaper) أو منشار الحديد الآلي. الشوط القاطع بطيء وقوي (لأن القطع يحتاج قوة)، والشوط الراجع سريع لأنه فارغ ولا يقطع شيئاً، فنوفّر وقتاً.

### Offset slider-crank design (steps)
1. From the required Q, compute β.
2. Draw the two limiting slider positions separated by Δ(R₄)max.
3. Construct the lines from the slider positions at angle β so they intersect at the crank pivot (use L₃−L₂ and L₃+L₂ as the two extreme distances).
4. Pick L₃ arbitrarily (L₃ > 4·L₂), measure L₁ (the offset) and L₂ = ½[(L₃+L₂) − (L₃−L₂)].
5. Calculate the crank speed from the cycle time.

Slide example (problem 5-14): Q = 1.25, stroke 2.75 in, cycle 0.6 s → β = 20°, ω = 100 rpm; the solution gives L₁ ≈ 1.761 in, L₂ ≈ 1.209 in, L₃ ≈ 3.959 in.

### Four-bar design
- **Throw angle** `(Δθ₄)max`: the angle between the two extreme positions of the rocker.
- **Transmission angle γ:** the angle between coupler and follower. **Rule of thumb: 40° < γ < 140°** to avoid poor force transmission.
- Steps: (1) compute Q and β; (2) draw the two rocker extremes separated by the throw angle; (3) construct the lines at angle β; (4) pick a convenient length and measure the other links; (5) **scale all links** if the frame length L₁ has a target value; (6) check γ and Grashof.
- Slide example (throw 55°, 1.15 s out, 1 s back, target frame L₁ = 6.7611 in): Q = 1.15 → **β = 12.55°**. The slide's hand solution uses L₄ = 4.0 in and gets **L₂ = 1.666 in, L₃ = 7.4606 in**.
  🧮 **Check:** the stated times give a cycle of 2.15 s → **ω ≈ 27.9 rpm**. (The handwritten solution on the slide shows 133.3 rpm, which matches a 0.45 s cycle and so looks like it belongs to a different problem — confirm with your instructor.)

🧮 **Check (slide problem 5-2):** out 0.35 s, in 0.2 s → **Q = 1.75**, **β = 180·(0.75/2.75) = 49.1°**, cycle time 0.55 s → **ω ≈ 109 rpm**.

> 🎬 **Simulate:** Quick-return and the imbalance angle β are very hard to picture statically. Animate the crank at constant speed and show how the crank sweeps (180° + β) on the advance stroke and (180° − β) on the return. Also animate the transmission angle γ for a four-bar.

> 🌍 **مثال من الحياة:** **زاوية النقل γ (40°–140°):** دفع باب ثقيل بزاوية حادة جداً يكون صعباً لأن معظم القوة تضيع في الجانب. وكذلك دواسة الدراجة عند النقطة العليا أو السفلى (النقطة الميتة) يصعب دفعها لأن زاوية النقل صغيرة جداً.

---
## Chapter 6 — Velocity Analysis

> 🇯🇴 **ملاحظة:** النقاط لها سرعة خطية (v)، والأذرع لها سرعة زاوية (ω). نقطتان على جسم صلب لا يوجد بينهما إلا سرعة نسبية عمودية على الخط الواصل بينهما. هذه هي الفكرة الأهم في الفصل.

### Linear and angular velocity
- **Linear velocity v:** instantaneous speed + direction of a **point**. Different points on the same link have different velocities.
- **Angular velocity ω:** instantaneous rotation rate of a **link** (cw or ccw). `ω = Δθ / Δt`.
- Relation: `v = r·ω` — **ω must be in rad/s**, and the direction of v is perpendicular to the radius and consistent with the direction of ω.
- Unit conversion: `ω (rad/s) = n (rpm) × 2π/60`.
- *Points have linear velocity; links have rotational velocity.*

> 🌍 **أمثلة من الحياة:**
> - **v = r·ω:** عجلة السيارة. نقطة قريبة من المحور تتحرك ببطء، ونقطة على الحافة تتحرك أسرع، رغم أن العجلة تدور بنفس السرعة الزاوية (ω).
> - **النقاط لها v، والأذرع لها ω:** عجلة دوّارة (Ferris wheel). كل المقاعد لها نفس ω، لكن السرعة الخطية للمقعد الأبعد أكبر.

### Relative velocity method
- Two points on the same rigid body can only have a relative velocity **perpendicular to the line joining them**.
- `v_B/A = v_B ⊖ v_A`, equivalently **`v_B = v_A +> v_B/A`**. Read it as "the motion of B as seen from A".
- Link angular velocity: `ω_AB = v_B/A / AB`.

> 🌍 **أمثلة من الحياة:**
> - **السرعة النسبية:** تتجاوز سيارة أخرى على الطريق. تراها تتحرك بالنسبة لك ببطء، رغم أن كلتا السيارتين سريعة بالنسبة للأرض. هذا هو v_B/A.
> - **عدم وجود سرعة نسبية إلا عمودية (على جسم صلب):** عصا ممسوكة من طرف وتدور. الطرف الآخر لا يتحرك أبداً نحو يدك أو بعيداً عنها (لأن العصا صلبة)، بل عمودياً على العصا فقط.

### Graphical velocity analysis (steps)
1. Draw the mechanism to scale (CAD) and find the known velocity (usually the driver: `v = r·ω`).
2. Write the relative velocity equation (e.g. `v_B = v_A +> v_B/A`) and mark what you know for each term (direction known? magnitude known?).
3. Draw the **velocity polygon (triangle)** to scale from a pole point; the two unknowns close the polygon.
4. Measure the unknown magnitudes; get ω of floating links from `v_rel / length`.
5. Check the direction (cw/ccw) of each ω from the direction of the relative velocity vector.

> 🎬 **Simulate:** The velocity polygon is built *from* a moving mechanism, so it is best seen next to the animation of that mechanism. A simple Python or MATLAB script that draws both the linkage and the polygon as the crank turns is ideal.

### Point on a floating link (e.g. point X on the coupler)
The direction of v_X is **not obvious**, so use two equations with two known points (G and H) on the same link:
```
v_X = v_G +> v_X/G
v_X = v_H +> v_X/H
```
Draw both triangles from the same pole. The intersection of the two relative-velocity directions fixes v_X.

### Points on separate links (sliding contact)
Take two coincident points, one on each link (e.g. `B₂` on link 2, `B₄` on link 4). Their relative velocity is **along the slot / cylinder direction** (e.g. `v_B2/B4` along a hydraulic cylinder).

### Analytical velocity analysis
Solve the velocity triangle with the law of sines/cosines, or use the closed forms:

**Slider-crank**
```
ω₃ = −ω₂ · (L₂ cos θ₂) / (L₃ cos θ₃)
v₄ = −ω₂·L₂·sin θ₂ + ω₃·L₃·sin θ₃
```
**Four-bar**
```
ω₃ = −ω₂ · L₂ sin(θ₄ − θ₂) / (L₃ sin γ)
ω₄ = −ω₂ · L₂ sin(θ₃ − θ₂) / (L₄ sin γ)
```
(The position angles θ₃, θ₄, γ come from Chapter 4.)

### Slide worked examples (summary)
- **Shaper (crank and slotted lever):** `ω_BO1 = 2π·40/60 = 4.2 rad/s`, `v_B = 4.2 × 0.3 = 1.26 m/s`; then the polygon gives the ram (cutting-tool) velocity and ω of the slotted lever.
- **Link F / lever DC (AB = DE = 150 mm, 120 rpm):** `v_B = 4π × 0.15 = 1.885 m/s`; results: `v_F = 0.7 m/s`, `ω_DC = 5 rad/s ccw`, and the **rubbing speed at pin C** = `(ω_CB − ω_CD) × r_pin = (5 − 5)(0.025) = 0`.
- **Slider-crank problem 6-41 (950 rpm):** `ω₂ = 99.48 rad/s`, `v_B = 198.97 in/s`, sine rule gives `v_C = 145.86 in/s`.
- **Pump problems (6-35, 6-49):** piston velocity × piston area `(π/4)(1.0 in)²` = volume flow rate (e.g. 182.66 in³/s and 205.81 in³/s on the slides).

> ⚠️ Remember: **rubbing speed** at a pin = (difference in the angular velocities of the two links) × pin radius. If both links turn the same way at the same rate, it is zero.

> 🌍 **مثال من الحياة:** **Rubbing speed (سرعة الاحتكاك في المفصل):** مفصل الباب. كلما زادت سرعة الاحتكاك بين الذراعين زاد التآكل. وإذا دار الذراعان معاً بنفس السرعة فلا يوجد احتكاك.

---

## Chapter 7 — Acceleration Analysis

> 🇯🇴 **ملاحظة:** التسارع له مركبتان: **مماسية (tangential)** بسبب تغيّر مقدار السرعة، و**عمودية/مركزية (normal)** بسبب تغيّر اتجاه السرعة. نفس طريقة السرعة النسبية لكن بمركبات أكثر.

### Components of acceleration of a point
- **Tangential** `aᵗ = r·α` — caused by a change in speed; **perpendicular to the radius**.
- **Normal** `aⁿ = ω²·r = v²/r` — caused by a change in direction; **directed toward the centre of rotation**.
- Total: `a = aⁿ +> aᵗ`.

> 🌍 **أمثلة من الحياة:**
> - **التسارع العمودي (aⁿ = ω²r):** أنت في سيارة تأخذ منعطفاً بسرعة ثابتة. تشعر بأن جسمك يندفع نحو الباب. هذه الدفعة سببها تغيّر **اتجاه** السرعة وليس مقدارها.
> - **التسارع المماسي (aᵗ = rα):** تضغط على دواسة البنزين وأنت في المنعطف نفسه. الشعور بالدفع للخلف في المقعد سببه تغيّر **مقدار** السرعة.
> - **ω² r:** مضاعفة السرعة الزاوية تعني **أربعة أضعاف** التسارع. لذلك الغسّالة عند العصر (دوران سريع جداً) تهتز بقوة وتحتاج وزناً ثقيلاً.

### Relative acceleration
- `a_i = a_j +> a_i/j`, written in components:
  ```
  a_iⁿ +> a_iᵗ = a_jⁿ +> a_jᵗ +> a_i/jⁿ +> a_i/jᵗ
  ```
- For two points on the same rigid link:
  - **relative tangential** acceleration is **perpendicular to the line joining them**,
  - **relative normal** acceleration is **along that line**, pointing from i toward j (towards the other point).
- Shortcuts: a point on a **translating** link has no normal acceleration; a point on a link rotating at **constant speed** has no tangential acceleration.

### Graphical acceleration analysis (steps)
1. First finish the **velocity analysis** (you need every ω and relative velocity).
2. Compute all known **normal** components: `aⁿ = v²/r` or `ω²r`, and the known tangential ones `aᵗ = α·r`.
3. Write the relative acceleration equation and draw the **acceleration polygon**: normal components first (known direction and magnitude), then tangential (known direction, unknown magnitude).
4. Close the polygon, measure the unknowns, get `α = aᵗ / r` for each link.

Slide example 7.7 (slider-crank) in numbers: `v_B = 72 in/s`, `r = 1.0 in` → `a_Bⁿ = 5184 in/s²`; `α₂ = 250 rad/s²` → `a_Bᵗ = 250 in/s²`; `a_A/Bⁿ = 338 in/s²`; result `a_A = 2138 in/s²` (vertical).

> 🎬 **Simulate:** Acceleration polygons have many small vectors and are easy to get wrong by hand. A simulation of the same mechanism that plots a_A against crank angle (and shows the polygon updating) makes the idea much clearer.

### Analytical acceleration analysis
**Slider-crank (as on the slides)**
```
α₃ = ( ω₂²·L₂·sin θ₂ + ω₃²·L₃·sin θ₃ − α₂·L₂·cos θ₂ ) / ( L₃·cos θ₃ )
a₄ = −α₂·L₂·sin θ₂ − α₃·L₃·sin θ₃ − ω₂²·L₂·cos θ₂ − ω₃²·L₃·cos θ₃
```
(The slide calls the slider term α₄, but it is the slider's **linear** acceleration a₄.)

📖 **Book only — four-bar (Book eq. 7.23 and 7.24):**
```
α₃ = [ α₂L₂ sin(θ₂−θ₄) + ω₂²L₂ cos(θ₂−θ₄) − ω₄²L₄ + ω₃²L₃ cos(θ₄−θ₃) ] / [ L₃ sin(θ₄−θ₃) ]
α₄ = [ α₂L₂ sin(θ₂−θ₃) + ω₂²L₂ cos(θ₂−θ₃) − ω₄²L₄ cos(θ₄−θ₃) + ω₃²L₃ ] / [ L₄ sin(θ₄−θ₃) ]
```
⚠️ **Slide 170 prints these two formulas differently** (for example it shows `ω₄²L₂` and `ω₃²L₂` in α₃, and leaves out the `ω₃²L₃` term in α₄). They look like typos on the slide. I used the book's version, which also agrees with the loop-closure derivation I checked. Confirm with your instructor before the exam.

> 🌍 **مثال من الحياة:** **مكبس المحرك:** عند النقاط الميتة (أعلى وأسفل الشوط) تكون سرعة المكبس صفراً لحظة، لكن تسارعه كبير، ولهذا تتولّد قوى قصور ذاتي واهتزازات. لذلك تُوازَن المحركات.

### Point on a floating link
Same trick as velocity: two relative acceleration equations through two known points (G, H) intersect to give a_X.
```
a_X = a_Gⁿ +> a_Gᵗ +> a_X/Gⁿ +> a_X/Gᵗ
a_X = a_Hⁿ +> a_Hᵗ +> a_X/Hⁿ +> a_X/Hᵗ
```
Slide example 7.10 ends with `a_X ≈ 33.8 m/s²`.

---

## Chapter 9 — Cams

> 🇯🇴 **ملاحظة:** الكام يحوّل الدوران إلى حركة تابع (follower) محددة مسبقاً. الخطوات: حدّد الحركة المطلوبة → ارسم مخطط الإزاحة → اختر نوع الحركة (ثابتة السرعة، ثابتة التسارع، توافقية، سيكلويدية).

### Types
- **Cams:** plate, drum, linear.
- **Followers:**
  - *Motion:* translating or pivoted.
  - *Position:* in-line or offset.
  - *Shape:* knife-edge, roller, flat-face, spherical.

> 🌍 **أمثلة من الحياة:**
> - **الكام (Cam):** عمود الكامات في محرك السيارة. يفتح صمام الهواء في اللحظة المحددة بدقة ثم يغلقه. شكل الكام يحدد حركة الصمام.
> - **التابع (Follower):** الصمام نفسه، أو الذراع الذي يلمس الكام. (روللر = يقلل الاحتكاك، وفلات = سطح مستوٍ.)

### Prescribed motion, cam speed, and displacement diagram
A **follower displacement diagram** plots follower displacement versus time or cam rotation angle. The prescribed motion consists of **rise, dwell, fall, dwell** intervals.
```
Total cycle time:     ΣTᵢ  (sum of all intervals)
Cam speed:            ω = 1 rev / ΣTᵢ   →  × 60 for rpm
Cam angle per interval:   βᵢ = ω · Tᵢ  (rev)  →  × 360° for degrees
```
Slide example 9.1 (rise 2 in/1.2 s, dwell 0.3 s, fall 1 in/0.9 s, dwell 0.6 s, fall 1 in/0.9 s): `ΣT = 3.9 s`, `ω = 15.38 rpm`, `β = 110.5°, 27.6°, 82.9°, 55.3°, 82.9°`.

> 🌍 **مثال من الحياة:** **Rise / Dwell / Fall:** الصمام: يفتح (Rise)، يبقى مفتوحاً مدة (Dwell)، ثم يغلق (Fall). وهي نفس مراحل المخطط في الشرائح.

### Motion schemes (H = rise/fall, T = interval time, β = interval cam angle, φ = cam angle within the interval, t = time within the interval)

**Constant velocity** (straight line): rise `ΔR = H·t/T`, fall `ΔR = H − H·t/T`, `v = ± H/T`. Acceleration is **infinite** at the start and end of the interval (impact).

**Constant acceleration** (parabolic): first half accelerates, second half decelerates.

| | Rise, 0 < t < 0.5T | Rise, 0.5T < t < T |
|---|---|---|
| ΔR | `2H(t/T)²` | `H − 2H(1 − t/T)²` |
| v | `4Ht/T²` | `(4H/T)(1 − t/T)` |
| a | `+4H/T²` | `−4H/T²` |

(For a **fall**, mirror it: `ΔR = H − 2H(t/T)²` then `ΔR = 2H(1 − t/T)²`, and the accelerations change sign. In terms of cam angle replace `t/T` with `φ/β` and `1/T` with `ω/β`.)

**Harmonic** (sinusoidal):
```
Rise:  ΔR = (H/2)[1 − cos(πt/T)]     v = (πH/2T)·sin(πt/T)     a = (π²H/2T²)·cos(πt/T)
Fall:  ΔR = (H/2)[1 + cos(πt/T)]     v = −(πH/2T)·sin(πt/T)    a = −(π²H/2T²)·cos(πt/T)
```
Peaks: `v_max = πH/2T`, `a_max = π²H/2T²`.

**Cycloidal** (slides show this only inside Example 9.2):
```
Fall:  ΔR = H [ 1 − t/T + (1/2π)·sin(2πt/T) ]
```
📖 **Book only:** the **rise** is the mirror form, and the velocity and acceleration come from Book Table 9.4:
```
Rise:  ΔR = H [ t/T − (1/2π)·sin(2πt/T) ]
       v  = (H/T)·[ 1 − cos(2πt/T) ]
       a  = (2πH/T²)·sin(2πt/T)
```

📖 **Book only — Table 9.5, peak values compared** (these numbers come from the book, not the slides):

| Scheme | Peak velocity | Peak acceleration | Peak jerk |
|---|---|---|---|
| Constant velocity | 1.000 H/T | ∞ | ∞ |
| Constant acceleration | 2.000 H/T | 4.000 H/T² | ∞ |
| Harmonic | 1.571 H/T | 4.945 H/T² | ∞ |
| Cycloidal | 2.000 H/T | 6.283 H/T² | 40 H/T³ |

(The book's table lists a few more schemes — trapezoidal, modified trapezoidal and 3-4-5 polynomial — which are not on the slides.)

> 🎬 **Simulate:** Plot displacement, velocity and acceleration of the four schemes on the same time axis (a spreadsheet or MATLAB works). The "infinite" acceleration spikes of constant velocity and the smoothness of cycloidal are far clearer on a plot, and a live cam–follower animation shows why dwell, rise and fall are timed by cam angle.

> 🌍 **أمثلة من الحياة:**
> - **سرعة ثابتة (Constant velocity):** تحريك صندوق ثقيل ثم إيقافه فجأة. التوقف المفاجئ يعني **تسارعاً لا نهائياً (صدمة)** نظرياً. لذلك لا نستعملها إلا في الحركات البطيئة.
> - **السيكلويدي (Cycloidal):** المصعد الحديث. يبدأ ببطء ويتسارع ثم يتباطأ بنعومة قبل الوقوف، فلا تشعر بالصدمة. لهذا يُفضَّل في الحركات السريعة.

### Slide examples
- **Example 9.2** (rise 50 mm in 1.5 s constant velocity; return in 2.0 s cycloidal; dwell 0.75 s): `ΣT = 4.25 s`, `ω = 14.12 rpm`, `β = 127.0°, 169.3°, 63.7°`; the slides tabulate ΔR every 0.25 s in a spreadsheet and plot the diagram.
- The three "assembly machine" slide problems (0.75 in constant velocity, 0.75 in constant acceleration, 13 mm harmonic; rise in 3 s, dwell 1.5 s, fall in 2 s, dwell 0.5 s) all have `ΣT = 7 s`, so `ω = 8.57 rpm`.
  🧮 **Check:** max acceleration with the formulas above — constant acceleration `a = 4H/T²`: rise 0.333 in/s², fall 0.75 in/s²; harmonic `a_max = π²H/2T²`: rise ≈ 7.13 mm/s², fall ≈ 16.0 mm/s²; constant velocity: theoretically infinite at the ends of each interval.

### Pressure angle
- Contact forces act **perpendicular** to the surfaces in contact. The **pressure angle δ** is the angle between the **line of follower motion** and the **contact force** (the normal to the cam profile).
- A large δ means a large side force on the follower and poor force transmission.
- δ can be **reduced** by: increasing the base circle size; decreasing the follower displacement; increasing the cam angle given to the rise or fall; decreasing the follower offset; or changing the motion scheme.

> 🌍 **مثال من الحياة:** **زاوية الضغط:** تدفع باباً ثقيلاً من نقطة قريبة جداً من المفصلة، فتحتاج قوة أكبر بكثير. الكام الذي يدفع التابع بزاوية كبيرة يضغط على جانبه ويُتلفه، ولذلك نكبّر **الدائرة الأساسية** لتصغير زاوية الضغط.

### Cam nomenclature
The slides show the diagram (base circle, prime circle, pitch curve, cam profile, trace point, roller radius Rf, offset e). 📖 **Book only — the definitions:**
- **Trace point:** a point on the follower contact surface.
- **Prime circle:** circle through the trace point with the cam at its home position (the 0° reference of the diagram).
- **Pitch curve:** the path of the follower's centre (for a roller follower).
- For profile construction, use **kinematic inversion**: keep the cam still and rotate the follower **opposite** to the cam's rotation.

> 🎬 **Simulate:** Kinematic inversion and cam-profile construction are very hard to follow in text; use a CAD sketch or script that rotates the follower around the stationary cam.

---

## Chapter 10 — Gears

> 🇯🇴 **ملاحظة:** الترس ينقل الحركة الدورانية وعزم الدوران. الأسنان المنحنية بشكل **إنفولوت (involute)** تعطي تعشيقاً سلساً. شرط تعشيق ترسين: نفس زاوية الضغط ونفس الـ Diametral Pitch.

### Why teeth, not friction rollers?
Teeth transmit rotary motion and torque **without slipping**. They must be specially shaped for smooth engagement; **involute curves** are ideal.

### Gear types
Spur, rack and pinion, internal, helical, bevel, herringbone, miter, worm.

> 🌍 **أمثلة من الحياة:**
> - **Rack and Pinion:** مقود السيارة. يدور الترس الصغير فيحرك الجريدة (Rack) خطياً يميناً ويساراً.
> - **Worm Gear:** مفاتيح شدّ أوتار العود أو الغيتار. تدور بسهولة لكن الوتر لا يستطيع إرجاع المفتاح.
> - **Bevel Gear:** المثقاب اليدوي (الدريل اليدوي) ونقل الحركة بزاوية 90°.

### Spur gear terminology and formulas
- **Number of teeth N** (integer). **Pitch diameter d**; **addendum a**; **dedendum b**; **face width F**; **circular pitch p**; **base circle**; **fillet, flank, face, tip**.
```
Circular pitch         p  = π·d / N
Diametral pitch        Pd = N / d        (teeth per inch of pitch diameter);   Pd · p = π
Base circle diameter   d_b = d · cos φ
Standard (full-depth): a = 1/Pd       b = 1.25/Pd       F = 12/Pd
Outside diameter       = d + 2a          Root diameter = d − 2b
```
- **Pressure angle φ:** angle between the pressure (contact) line and the line tangent to both pitch circles (pitch line). Standard values: **14½°, 20°, 25°**.
- **Mating gears must have the same pressure angle and the same diametral pitch.**
- **Center distance c:** external gears `c = r₁ + r₂`; internal gears `c = r₂ − r₁`.

> 🎬 **Simulate:** Involute tooth action, the line of action, the pressure angle and the base circle are all geometric ideas that are very hard to picture from a static figure. Use a gear-mesh animation (for example in SolidWorks Motion, Fusion 360 or a gear-generator web app).

🧮 **Check (slide example: 20° full-depth, 18 teeth, Pd = 12):** `d = 18/12 = 1.5 in`; outside diameter `= 1.5 + 2/12 = 1.667 in`; root diameter `= 1.5 − 2(1.25)/12 = 1.292 in`; face width `F = 12/12 = 1 in`; base circle `d_b = 1.5·cos 20° = 1.410 in`; circular pitch `p = π/12 = 0.262 in`.
🧮 **Check (two 4-pitch gears with 14 and 42 teeth):** `d₁ = 3.5 in`, `d₂ = 10.5 in` → `c = (3.5 + 10.5)/2 = 7.0 in`.

> 🌍 **مثال من الحياة:** **شرط التعشيق (نفس Pd ونفس φ):** مثل المسمار والصامولة، فلا يعمل إلا إذا تطابقت خطوتهما.

### Gear kinematics
```
Velocity ratio  VR = ω₁/ω₂ = d₂/d₁ = N₂/N₁      (1 = driver/pinion, 2 = driven)
```
- Sign: `+` same direction (internal mesh), `−` opposite direction (external mesh). "3:1" means VR = 3.
- **Pitch-line velocity:** `v_t = r₁ω₁ = r₂ω₂ = π·d·n / 12`, with d in inches, n in rpm → v_t in **fpm**. It determines the **lubrication needed** and the **quality required** (accuracy and surface finish).
- **Gear selection** requires deciding the pressure angle, a suitable diametral pitch, and the number of teeth on each gear.

> 🌍 **أمثلة من الحياة:**
> - **علبة سرعات السيارة (Gearbox):** السرعة الأولى = نسبة سرعة كبيرة. العزم عالٍ والسرعة منخفضة للانطلاق أو الصعود. وفي السرعة الخامسة نحصل على سرعة عالية بعزم أقل.
> - **الدراجة الهوائية متعددة السرعات:** ترس صغير في الخلف + ترس كبير في الأمام = سرعة عالية بجهد أكبر. وعكسه للصعود. هذا هو **VR = N₂/N₁**.

### Gear trains
Several gear pairs in series (to get large ratios in a compact space).
```
Train value  TV = (VR)₁ · (VR)₂ · (VR)₃ …        ω_out = ω_in / TV
```
Each external mesh reverses the direction.
🧮 **Check (slide train: N₁=24, N₂=48, N₃=24, N₄=48, N₅=15, N₆=35; input 1200 rpm cw):** `TV = (48/24)(48/24)(35/15) = 9.33`, so `ω_out ≈ 128.6 rpm`; three external meshes reverse the direction **three times**, so the output turns **ccw**. This assumes the compound arrangement in the slide figure (gears 2–3 and 4–5 on common shafts).
The centre distance of each pair is `c = (N₁ + N₂)/(2·Pd)`: 2.25 in, 3.0 in, and 2.5 in respectively for the three pairs.

> 🌍 **أمثلة من الحياة:**
> - **Gear Train (قطار التروس):** ساعة اليد. عدة أزواج من التروس لتخفيض سرعة المحرك الصغير إلى حركة العقارب البطيئة.
> - **كل تعشيق خارجي يعكس الاتجاه:** ترسان متلامسان يدوران في اتجاهين متعاكسين، مثل يدين تحركان عجلتين متلامستين.

---

## Chapter 11 — Belt and Chain Drives

> 🇯🇴 **ملاحظة:** الأحزمة والسلاسل تنقل الحركة بين محورين متباعدين. نسبة السرعة تعتمد على أقطار البكرات (أو عدد أسنان الجنزير). ابحث عن حدود السرعة المثالية لأنها تتكرر في الأسئلة.

### Belt drives
```
VR = ω₁/ω₂ = D₂/D₁
Belt speed   v_b = r·ω = π·D·n / 12     (D in inches, n in rpm → fpm)
Ideal belt speed range:   1000 fpm < v_b < 6500 fpm
```
- **V-belt selection:** section 3V, 5V or 8V, chosen from **horsepower and rpm** (selection charts).
- **Center distance** (avoid fatigue and vibration): `D₂ < C < 3(D₁ + D₂)`.
- Belts come in **standard lengths**:
```
L = 2C + (π/2)(D₂ + D₁) + (D₂ − D₁)² / (4C)
C = [ B + √( B² − 32(D₂ − D₁)² ) ] / 16        where  B = 4L − 2π(D₂ + D₁)
```
🧮 **Check (slide example: 1750 rpm motor, 4½ in sheave drives an 8 in sheave):** `n₂ = 1750 × 4.5/8 ≈ 984 rpm` (same direction); `v_b = π(4.5)(1750)/12 ≈ 2062 fpm` → inside the ideal range.

> 🌍 **أمثلة من الحياة:**
> - **السير (Belt):** سير المروحة (Fan belt / Serpentine belt) في السيارة. ينقل الحركة من المحرك إلى المولّد ومضخة التبريد ومكيف الهواء. وكذلك سير الغسالة القديمة.
> - **VR = D₂/D₁:** بكرة صغيرة تقود بكرة كبيرة = تخفيض السرعة وزيادة العزم، مثل مثقاب الورشة.
> - **السير يتآكل ويحتاج استبدالاً:** سير الساعة في المحرك (Timing belt) له طول قياسي ويُستبدل بعد عدد معين من الكيلومترات.

### Chain drives
```
VR = ω₁/ω₂ = D₂/D₁ = N₂/N₁
Chain speed  v_c = r·ω            Ideal:  v_c < 2500 fpm
```
- **Lubrication by chain speed:** manual (v_c < 650 fpm); bath (650 < v_c < 1500 fpm); stream (v_c > 1500 fpm).
- **Roller chain pitch p:** chain number = 80·p (p in inches): No. 40 → ½ in, No. 60 → ¾ in, No. 80 → 1 in. Selection is from **horsepower and rpm**.
- **Sprocket pitch diameter:** `D = p / sin(180°/N)`.
- **Center distance** (avoid sag and fatigue): `30p < C < 50p`.
- **Chain length in links** (must be rounded to an **integer**), then recompute the actual C:
```
L = 2C/p + (N₂ + N₁)/2 + (N₂ − N₁)² / (4π²C)
C = (p/4) { L − (N₂+N₁)/2 + √[ (L − (N₂+N₁)/2)² − 8(N₂ − N₁)²/(4π²) ] }
```
⚠️ In the first formula the slide prints the last term as `/(4π²C)`. That is only dimensionally correct if C is measured in **pitches** (C/p); to be safe use `C/p` wherever C appears.

> 🌍 **أمثلة من الحياة:**
> - **السلسلة (Chain):** سلسلة الدراجة الهوائية أو النارية. لا تنزلق مثل السير لأنها تعشق أسنان الترس (Sprocket)، لذلك نسبة السرعة ثابتة.
> - **السلسلة المرتخية (Sag):** سلسلة الدراجة المرتخية جداً تقفز من الترس. ولذلك نحدد مسافة المحورين (30p < C < 50p).
> - **تزييت السلسلة:** سلسلة الدراجة تُزيَّت يدوياً (سرعة بطيئة). أما سلسلة الآلات السريعة فتحتاج حمام زيت أو رذاذاً حسب سرعتها.

---

## Chapter 12 — Screw Mechanisms

> 🇯🇴 **ملاحظة:** البرغي يحوّل الدوران إلى حركة خطية. المهم: هل يدور البرغي أم الصامولة؟ وهل يتحرك البرغي أم الصامولة؟ (4 حالات).

- Converts **rotational motion to linear motion**.
- **Four cases** (depends on the constraints): screw rotates and the **nut moves**; screw rotates and **screw moves**; nut rotates and **screw moves**; nut rotates and **nut moves**.
- The slides also name **self-locking** (the screw cannot be driven backwards by the load).

> 🌍 **أمثلة من الحياة:**
> - **الملزمة (Vise) في الورشة:** تدير البرغي فيتحرك الفك المتحرك. (البرغي يدور والصامولة تتحرك.)
> - **غطاء البرطمان:** الغطاء (الصامولة) يدور ويتحرك على البرطمان (البرغي). (الصامولة تدور وتتحرك.)
> - **قفل ذاتي (Self-Locking):** رافعة السيارة تبقى مرفوعة دون أن تنزل وحدها، لأن الاحتكاك يمنع الحمل من تدوير البرغي للخلف.

### Geometry and designation
- **Major diameter, minor diameter, pitch, threads per inch, root, crest, body.**
- **Unified:** `½ − 13 UNC` → major diameter 1/2 in, **13 threads per inch**.
- **Metric:** `M8 − 1.25` → major diameter 8 mm, **pitch 1.25 mm**.
- Pitch (inch series): `p = 1 / (threads per inch)`.

> 🌍 **مثال من الحياة:** **الخطوة (Pitch):** برغي 1/2 – 13 UNC: كل دورة = 1/13 إنش. أي 13 دورة لتتحرك إنشاً واحداً.

### Screw kinematics (relative motion of nut and screw)
```
ΔR = p · Δθ        (Δθ in revolutions)
v  = p · ω         (ω in rev/min → v in in/min)
a  = p · α
```
🧮 **Check (slide examples):**
- 1-8 rod, 10 revolutions: `p = 1/8 in` → `ΔR = 1.25 in` of extra lift.
- ¾-10 UNC rod, 12 revolutions: `p = 0.1 in` → lowers `1.2 in`.
- ½-13 UNC at 1200 rpm: `v = 1200/13 ≈ 92.3 in/min` of table travel.
(The slide platform problems then convert this lift into motion of a linkage; you need the slide figures for those.)

> 🎬 **Simulate:** Which part moves (screw or nut) and in which direction is difficult to see from static drawings. A short animation of the four constraint cases helps.

> 🌍 **أمثلة من الحياة:**
> - **رافعة السيارة (Jack):** تدير المقبض بدورات كثيرة فترتفع السيارة قليلاً. خطوة برغي صغيرة = قوة كبيرة جداً لكن حركة بطيئة.
> - **ΔR = p·Δθ:** برغي بخطوة 2 مم: 10 دورات = 20 مم تحرك.
> - **ماكينة CNC / الطابعة ثلاثية الأبعاد:** تستعمل براغي (Lead Screws) لتحريك الرأس بدقة عالية.

---

## Chapters 13–14 — Static (and Dynamic) Machine Forces

> 🇯🇴 **ملاحظة:** القوى الساكنة تُستخدم عندما يكون التسارع صغيراً (أقل من 0.25g) أو السرعة ثابتة. الخطوة الأهم: ارسم مخطط الجسم الحر (FBD) لكل عضو.

### Basics
- **Static analysis:** forces in a machine while links are stationary or move at constant velocity; often used when accelerations are small (< 0.25 g).
- **Moment:** twisting action of a force about a point: `M_A = F · d` (d = **perpendicular** distance from A to the line of the force); it is a vector and needs a sense (cw/ccw). Example: `M_A = 250 in·lb cw`.

> 🌍 **مثال من الحياة:** **العزم (M = F·d):** مفتاح الربط (Wrench). إذا أطلنا الذراع (d) نفتح الصامولة العنيدة بجهد أقل. وبنفس المنطق: تدفع الباب بعيداً عن المفصلة فيفتح بسهولة.

### Free-body diagrams (FBD) — steps
1. **Isolate** the component(s) to study.
2. Draw it as if **floating freely**.
3. Replace every support/contact with the appropriate **forces and/or couples**.
4. **Reaction rule:** if the contact prevents motion in a direction, there is a reaction force in that direction.
5. Draw an FBD for each link (e.g. engine hoist: whole hoist, link DEF, base, cylinder CE).

> 🌍 **مثال من الحياة:** **مخطط الجسم الحر (FBD):** أنت تدفع خزانة ثقيلة. ارسم الخزانة وحدها، ثم ارسم عليها وزنها، وقوة دفعك، وقوة الاحتكاك مع الأرض، ورد فعل الأرض.

### Two-force members
A component acted on by only **two forces** is always in **tension or compression**, and the forces are **along the line joining the two force points** (e.g. a hydraulic cylinder CE).

> 🌍 **مثال من الحياة:** **عضو القوتين (Two-force member):** حبل مشدود أو كابل رافعة. يتعرض لشد فقط وبمحاذاة الحبل. والمكبس الهيدروليكي في الحفّارة يتعرض لشد أو ضغط على امتداد محوره.

### Static equilibrium
```
ΣFx = 0        ΣFy = 0        ΣM (about any point) = 0
```
Procedure for a machine: FBD of every member → mark two-force members → write the three equations per member → choose moment points that eliminate unknowns → solve.
🧮 **Check (slide problem 1-12, pliers, 10 lb on the handles, lever arms 3.75 in and 1.25 in):** taking moments about the pivot, `F_nut = 10 × 3.75 / 1.25 = 30 lb`. This assumes those two dimensions are the arms on either side of the pivot, as I read the slide; check the figure.

> 🌍 **أمثلة من الحياة:**
> - **الكماشة (Pliers):** 10 باوند عند المقبضين تتحول إلى قوة أكبر عند الفكين، لأن ذراع المقبض أطول من ذراع الفك. (مسألة 1-12.)
> - **الاتزان (ΣF = 0, ΣM = 0):** الميزان ذو الكفتين (أو الأرجوحة). يتوازن عندما تتساوى العزوم حول نقطة الارتكاز.

### Dynamic force (very short on the slides)
When acceleration is not negligible, use **ΣF = m·a** together with the acceleration found in Chapter 7.
🧮 **Check (slide problem: sliding link, m = 0.2 kg, a = 10.495 m/s²):** the net force on the slider is `F = ma = 0.2 × 10.495 ≈ 2.10 N`. The force in the 48 mm link is then found by resolving along that link's direction, which needs the slide figure.

> 🌍 **مثال من الحياة:** **القوة الديناميكية (F = ma):** ركوب سيارة تتسارع بسرعة فتشعر بدفع للخلف. كلما زادت الكتلة أو التسارع زادت القوة المطلوبة.

---

## Quick formula sheet

| Topic | Formula |
|---|---|
| Mobility | `F = 3(n−1) − 2jp − jh` |
| Grashof | `s + l < p + q` → at least one link can fully rotate |
| Vector sum (2 vectors) | `R = √(A²+B²−2AB cos θ)` |
| Vector sum (components) | `Rx = ΣAx, Ry = ΣAy` |
| Linear displacement | `ΔR = R′ ⊖ R` |
| Quick-return | `Q = (180°+β)/(180°−β)`, `β = 180°(Q−1)/(Q+1)` |
| In-line slider-crank | `L₂ = stroke/2`, `L₃ > 4L₂` |
| Four-bar transmission angle | `40° < γ < 140°` |
| v from ω | `v = rω`, `ω = n·2π/60` |
| Relative velocity | `v_B = v_A +> v_B/A`, `ω_AB = v_B/A / AB` |
| Acceleration components | `aᵗ = rα`, `aⁿ = ω²r = v²/r` |
| Relative acceleration | `a_B = a_A +> a_B/A` (normal + tangential) |
| Cam speed | `ω = 1 rev/ΣT`, `βᵢ = ω·Tᵢ` |
| Constant acceleration | `a = ±4H/T²` |
| Harmonic | `a_max = π²H/(2T²)` |
| Cycloidal (📖 book) | `a_max = 2πH/T²` |
| Gear geometry | `p = πd/N`, `Pd = N/d`, `d_b = d cos φ`, `a = 1/Pd`, `b = 1.25/Pd` |
| Gear ratio | `VR = ω₁/ω₂ = N₂/N₁`, `TV = ΠVR` |
| Center distance | external `r₁+r₂`, internal `r₂−r₁` |
| Pitch-line speed | `v_t = π d n / 12` (fpm) |
| Belt length | `L = 2C + π(D₂+D₁)/2 + (D₂−D₁)²/(4C)` |
| Chain sprocket | `D = p / sin(180°/N)`, `30p < C < 50p` |
| Screw | `ΔR = pΔθ`, `v = pω` |
| Moment | `M = F·d` |
| Equilibrium | `ΣFx = ΣFy = ΣM = 0` |

---

## Things to double-check with your instructor

1. **Slide 170 (four-bar α₃ and α₄):** the printed formulas differ from the book's eq. 7.23/7.24 (likely typos). This file uses the book's version.
2. **Slides 93–94 (four-bar design example):** the handwritten crank speed (133.3 rpm) does not match the times given on slide 93 (cycle 2.15 s → about 27.9 rpm).
3. **Slide 242 (chain length):** the last term is only dimensionally correct if C is in pitches.
4. **Slide 219:** the face width rule `F = 12/Pd` is given as a single value; the book may give it as a recommended range (I did not verify this).
5. **Image-only slides:** many slides contain only a figure or a worked solution (Chapters 4–7 especially). I summarized the **method and results** rather than reproducing every drawing.
