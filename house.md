# Unidade 05 · house model

Generated 2026-11-04 17:54 from the interactive 3D model. Source drawings: floor plans (térreo, superior) and sections Corte AA / Corte BB at 1:50. Two-floor attached townhouse.

## How to read this file

- Units are centimetres unless stated.
- Plan coordinates (x, y): x runs across the lot, 0 = outer face of the left party wall, 496 = outer face of the right party wall. y runs along the lot, 0 = back line of the house, 1695 = street front; negative y is the back yard.
- Standing in the street facing the house: +x is to your right, −y is away from you (toward the back).
- Elevation: `z` is height above that floor's finished level. Absolute elevation = floor base + z (ground floor base = 0).
- Walls are centrelines from start to end; thickness is split equally on both sides.
- Openings: `offset` = distance along the wall from its start to the opening centre. Sizes use the Brazilian plan notation width × height / sill.
- Wall faces: with u = unit vector start→end, Face A is on the side of normal (−u.y, u.x); Face B is opposite. Every box also states the compass-free direction it faces.
- Room bounds are bounding rectangles, not exact outlines; irregular rooms overlap (smallest match wins).
- `approx` means the value was scaled from the drawing or derived from a room area, not read from a dimension.

## Floors

| Floor | Base elevation | Wall height | Slab below |
|---|---|---|---|
| Térreo | 0 | 290 | ground |
| Superior | 302 | 280 | 12 |

Stair (approximate): 90 wide, 17 risers of 17.8 cm, 28 cm treads. First flight: x 386–476, rising toward −y from y 1253 to y 973. Landing: x 386–476, y 885–973. Second flight: y 885–975, rising toward −x from x 386 to x 246, arriving on Superior.

## Rooms

| ID | Floor | Name | Area | Bounds x | Bounds y | Label at |
|---|---|---|---|---|---|---|
| r1 | Térreo | Lavanderia | 3,53 m² | 20–159 | 0–266 | 89, 128 |
| r2 | Térreo | Lavabo | 1,93 m² | 20–145 | 276–431 | 85, 353 |
| r3 | Térreo | Churrasqueira | 19,44 m² | 169–476 | 0–565 | 300, 280 |
| r4 | Térreo | Cozinha | 6,18 m² | 270–476 | 575–875 | 372, 725 |
| r5 | Térreo | Estar/Jantar | 26,97 m² | 20–476 | 575–1195 | 140, 900 |
| r6 | Térreo | Garagem | 13,10 m² | 20–290 | 1205–1695 | 155, 1450 |
| r7 | Superior | Dormitório | 9,80 m² | 155–476 | 10–315 | 315, 165 |
| r8 | Superior | BWC | 3,12 m² | 20–145 | 170–418 | 85, 295 |
| r9 | Superior | BWC | 3,12 m² | 20–145 | 575–825 | 85, 700 |
| r10 | Superior | Circ. | 6,13 m² | 155–240 | 325–975 | 200, 720 |
| r11 | Superior | Dormitório | 6,60 m² | 255–476 | 575–875 | 365, 730 |
| r12 | Superior | Suíte Casal | 14,71 m² | 20–295 | 835–1565 | 90, 1300 |
| r13 | Superior | Sacada | 3,36 m² | 20–295 | 1575–1690 | 160, 1635 |
| r14 | Superior | Vazio | — | 245–476 | 325–565 | 358, 445 |
| r15 | Superior | Vazio | — | 20–145 | 428–565 | 85, 496 |
| r16 | Superior | Vazio | — | 170–476 | 885–1475 | 390, 1250 |

## Walls

### Térreo

| ID | Name | Start (x,y) | End (x,y) | Length | Thick | Height | Type | Exterior | Approx | Openings |
|---|---|---|---|---|---|---|---|---|---|---|
| g1 | Party wall (left) | 10, -83 | 10, 1695 | 1778 | 20 | 290 | masonry | yes | yes | — |
| g2 | Party wall (right) | 486, -150 | 486, 1695 | 1845 | 20 | 290 | masonry | yes | no | — |
| g3 | A.Serviço back | 20, 5 | 164, 5 | 144 | 10 | 290 | masonry | yes | yes | window 100×120/90 @61 |
| g4 | A.Serviço side | 164, 0 | 164, 276 | 276 | 10 | 290 | masonry | no | yes | door 80×210 @216 |
| g5 | A.Serviço / Lavabo | 20, 271 | 164, 271 | 144 | 10 | 290 | masonry | no | yes | — |
| g6 | Lavabo side | 150, 276 | 150, 436 | 160 | 10 | 290 | masonry | no | no | door 70×210 @115 (approx) |
| g7 | Lavabo back | 20, 436 | 155, 436 | 135 | 10 | 290 | masonry | no | no | window 100×50/170 @58 |
| g8 | Churrasqueira / Estar | 20, 570 | 476, 570 | 456 | 10 | 290 | masonry | no | no | door 90×210 @100 (approx); window 130×100/110 @315 |
| g9 | Churrasqueira (grill) | 416, 41 | 476, 41 | 60 | 82 | 220 | masonry | no | yes | — |
| g10 | Cozinha / Estar | 268, 880 | 476, 880 | 208 | 10 | 290 | masonry | no | no | — |
| g11 | Garagem / Estar | 20, 1200 | 242, 1200 | 222 | 10 | 290 | masonry | no | no | window 150×120/90 @105 |
| g12 | Garagem chamfer | 242, 1200 | 295, 1253 | 75 | 10 | 290 | masonry | no | no | — |
| g13 | Garagem side | 295, 1253 | 295, 1695 | 442 | 10 | 290 | masonry | no | no | door 142×210 @311 (approx) |
| g14 | Entrance | 300, 1488 | 476, 1488 | 176 | 10 | 290 | masonry | yes | no | door 130×250 @106 |

### Superior

| ID | Name | Start (x,y) | End (x,y) | Length | Thick | Height | Type | Exterior | Approx | Openings |
|---|---|---|---|---|---|---|---|---|---|---|
| u1 | Party wall (left) | 10, 0 | 10, 1695 | 1695 | 20 | 280 | masonry | yes | no | — |
| u2 | Party wall (right) | 486, -150 | 486, 1695 | 1845 | 20 | 280 | masonry | yes | no | — |
| u3 | Dormitório back | 150, 5 | 476, 5 | 326 | 10 | 280 | masonry | yes | no | window 150×120/90 @165 |
| u4 | BWC / Dormitório | 150, 0 | 150, 428 | 428 | 10 | 280 | masonry | no | no | door 70×210 @383 (approx) |
| u5 | BWC window wall | 20, 165 | 150, 165 | 130 | 10 | 280 | masonry | no | yes | window 100×50/160 @63 |
| u6 | BWC / Vazio | 20, 423 | 150, 423 | 130 | 10 | 280 | masonry | no | yes | — |
| u7 | Dormitório front | 155, 320 | 476, 320 | 321 | 10 | 280 | masonry | no | no | door 80×210 @42 (approx) |
| u8 | Vazio glass (circulation) | 240, 325 | 240, 565 | 240 | 10 | 280 | glass | no | yes | — |
| u9 | Vazio glass (light well) | 150, 428 | 150, 565 | 137 | 10 | 280 | glass | no | yes | — |
| u10 | BWC 2 back | 20, 570 | 150, 570 | 130 | 10 | 280 | masonry | no | no | window 100×50/160 @63 |
| u11 | Dormitório 2 back | 240, 570 | 476, 570 | 236 | 10 | 280 | masonry | no | no | window 130×120/90 @155 |
| u12 | BWC 2 side | 150, 570 | 150, 830 | 260 | 10 | 280 | masonry | no | no | — |
| u13 | Dormitório 2 side | 250, 575 | 250, 831 | 256 | 10 | 280 | masonry | no | no | door 80×210 @45 (approx) |
| u14 | Dormitório 2 chamfer | 250, 831 | 294, 880 | 66 | 10 | 280 | masonry | no | no | — |
| u15 | Dormitório 2 front | 294, 880 | 476, 880 | 182 | 10 | 280 | masonry | no | no | — |
| u16 | BWC 2 / Suíte | 20, 830 | 150, 830 | 130 | 10 | 280 | masonry | no | no | door 70×210 @85 |
| u17 | Suíte chamfer (BWC) | 150, 830 | 165, 845 | 21 | 10 | 280 | masonry | no | yes | — |
| u18 | Suíte side (circulation) | 165, 845 | 165, 1195 | 350 | 10 | 280 | masonry | no | yes | door 80×210 @65 (approx) |
| u19 | Suíte step | 165, 1195 | 245, 1195 | 80 | 10 | 280 | masonry | no | yes | — |
| u20 | Suíte chamfer (vazio) | 245, 1195 | 295, 1245 | 71 | 10 | 280 | masonry | no | yes | — |
| u21 | Suíte side (vazio) | 295, 1245 | 295, 1570 | 325 | 10 | 280 | masonry | no | no | — |
| u22 | Suíte / Sacada | 20, 1570 | 300, 1570 | 280 | 10 | 280 | masonry | yes | yes | door 160×210 @129 |
| u23 | Sacada railing | 20, 1692 | 300, 1692 | 280 | 5 | 110 | glass | yes | yes | — |
| u24 | Sacada railing (side) | 297, 1575 | 297, 1692 | 117 | 5 | 110 | glass | yes | yes | — |
| u25 | Vidro fixo (façade) | 300, 1480 | 476, 1480 | 176 | 10 | 280 | glass | yes | no | — |
| u26 | Circulation guard | 170, 975 | 246, 975 | 76 | 5 | 110 | glass | no | yes | — |

## Junction boxes

96 boxes: 75 on walls, 21 on ceilings. Boxes are 12 × 12 cm squares (panels 30 × 45). Ceiling boxes sit on the underside of the slab or roof above their floor.

| ID | Label | Type | Circuit | Floor | Room | Mount | Wall | Along | z | Face | Faces | Plan x, y | Abs. elevation | Approx | Conduits |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| gLb | Light b (A.Serviço) | Light point | 1 | Térreo | Lavanderia (r1) | ceiling | — | — | — | — | down (ceiling) | 90, 134 | 290 | no | 5 |
| gA1 | Outlet A.Serviço 1 | Outlet | 2 | Térreo | Lavanderia (r1) | wall | g1 Party wall (left) | 127 | 110 | B | +x (right) | 21, 44 | 110 | yes | 1 |
| gA2 | Outlet A.Serviço 2 | Outlet | 2 | Térreo | Lavanderia (r1) | wall | g1 Party wall (left) | 177 | 110 | B | +x (right) | 21, 94 | 110 | yes | 2 |
| gA3 | Outlet A.Serviço 3 | Outlet | 2 | Térreo | Lavanderia (r1) | wall | g4 A.Serviço side | 36 | 110 | A | −x (left) | 158, 36 | 110 | yes | 1 |
| gA4 | Switch b + outlet | Switch | 1/2 | Térreo | Lavanderia (r1) | wall | g4 A.Serviço side | 168 | 110 | A | −x (left) | 158, 168 | 110 | yes | 1 |
| gLc | Light c (Lavabo) | Light point | 1 | Térreo | Lavabo (r2) | ceiling | — | — | — | — | down (ceiling) | 84, 351 | 290 | no | 5 |
| gSc | Switch c | Switch | 1 | Térreo | Lavabo (r2) | wall | g6 Lavabo side | 69 | 110 | A | −x (left) | 144, 345 | 110 | yes | 1 |
| gShgi | Switch h/g/i | Switch | 1 | Térreo | — | wall | g6 Lavabo side | 15 | 110 | B | +x (right) | 156, 291 | 110 | yes | 1 |
| gLav | Outlet Lavabo | Outlet | 2 | Térreo | Lavabo (r2) | wall | g1 Party wall (left) | 489 | 110 | B | +x (right) | 21, 406 | 110 | yes | 2 |
| gLi | Wall light i (light well) | Light point | 1 | Térreo | — | wall | g1 Party wall (left) | 586 | 200 | B | +x (right) | 21, 503 | 200 | yes | 1 |
| gLg | Light g (Churrasqueira) | Light point | 1 | Térreo | Churrasqueira (r3) | ceiling | — | — | — | — | down (ceiling) | 323, 162 | 290 | no | 5 |
| gSf | Switch f | Switch | 1 | Térreo | Churrasqueira (r3) | wall | g9 Churrasqueira (grill) | 17 | 110 | A | +y (toward street) | 433, 83 | 110 | yes | 2 |
| gLf | Light f (grill hood) | Light point | 1 | Térreo | Churrasqueira (r3) | wall | g9 Churrasqueira (grill) | 39 | 160 | A | +y (toward street) | 455, 83 | 160 | yes | 1 |
| gC1 | Outlet Churrasqueira 1 | Outlet | 2 | Térreo | Churrasqueira (r3) | wall | g2 Party wall (right) | 248 | 110 | A | −x (left) | 475, 98 | 110 | yes | 1 |
| gC2 | Outlet Churrasqueira 2 | Outlet | 2 | Térreo | Churrasqueira (r3) | wall | g2 Party wall (right) | 338 | 110 | A | −x (left) | 475, 188 | 110 | yes | 2 |
| gC3 | Double outlet Churrasqueira | Outlet | 2 | Térreo | Churrasqueira (r3) | wall | g2 Party wall (right) | 441 | 110 | A | −x (left) | 475, 291 | 110 | yes | 3 |
| gLh | Wall light h | Light point | 1 | Térreo | Churrasqueira (r3) | wall | g2 Party wall (right) | 596 | 200 | A | −x (left) | 475, 446 | 200 | yes | 1 |
| gM | Spa motor (hidromassagem) | Other | 5 | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 437 | 30 | B | −y (toward back) | 457, 564 | 30 | yes | 1 |
| gLa | Light a (Estar) | Light point | 1 | Térreo | Estar/Jantar (r5) | ceiling | — | — | — | — | down (ceiling) | 146, 726 | 290 | no | 6 |
| gLj | Light j (Cozinha) | Light point | 1 | Térreo | Cozinha (r4) | ceiling | — | — | — | — | down (ceiling) | 373, 726 | 290 | no | 4 |
| gLk | Light k (Jantar) | Light point | 1 | Térreo | Estar/Jantar (r5) | ceiling | — | — | — | — | down (ceiling) | 94, 1037 | 290 | no | 3 |
| gK1 | Outlet Cozinha (under window) | Outlet | 3 | Térreo | Cozinha (r4) | wall | g8 Churrasqueira / Estar | 293 | 100 | A | +y (toward street) | 313, 576 | 100 | yes | 1 |
| gK2 | Outlet Cozinha 1 | Outlet | 3 | Térreo | Cozinha (r4) | wall | g2 Party wall (right) | 784 | 110 | A | −x (left) | 475, 634 | 110 | yes | 1 |
| gK3 | Outlet Cozinha 2 | Outlet | 3 | Térreo | Cozinha (r4) | wall | g2 Party wall (right) | 867 | 110 | A | −x (left) | 475, 717 | 110 | yes | 3 |
| gK4 | Outlet Cozinha 3 | Outlet | 3 | Térreo | Cozinha (r4) | wall | g2 Party wall (right) | 997 | 110 | A | −x (left) | 475, 847 | 110 | yes | 1 |
| gK5 | Outlet + switch j (Cozinha) | Switch | 1/3 | Térreo | Cozinha (r4) | wall | g10 Cozinha / Estar | 40 | 110 | B | −y (toward back) | 308, 874 | 110 | yes | 1 |
| gSak | Switch a + k | Switch | 1 | Térreo | Estar/Jantar (r5) | wall | g10 Cozinha / Estar | 12 | 110 | A | +y (toward street) | 280, 886 | 110 | yes | 2 |
| gQD1 | QD1 | Panel (QD) | QD1 | Térreo | Cozinha (r4) | wall | g10 Cozinha / Estar | 90 | 150 | B | −y (toward back) | 358, 874 | 150 | yes | 3 |
| gE1 | Outlet Estar 1 | Outlet | 4 | Térreo | Estar/Jantar (r5) | wall | g1 Party wall (left) | 699 | 30 | B | +x (right) | 21, 616 | 30 | yes | 2 |
| gE2 | Outlet Estar 2 | Outlet | 4 | Térreo | Estar/Jantar (r5) | wall | g1 Party wall (left) | 998 | 30 | B | +x (right) | 21, 915 | 30 | yes | 1 |
| gE3 | Outlet Jantar | Outlet | 4 | Térreo | Estar/Jantar (r5) | wall | g1 Party wall (left) | 1261 | 30 | B | +x (right) | 21, 1178 | 30 | yes | 1 |
| gLe1 | Stair light e 1 | Light point | 1 | Térreo | Estar/Jantar (r5) | wall | g2 Party wall (right) | 1080 | 200 | A | −x (left) | 475, 930 | 200 | yes | 1 |
| gS1 | Double outlet stair 1 | Outlet | 4 | Térreo | Estar/Jantar (r5) | wall | g2 Party wall (right) | 1216 | 30 | A | −x (left) | 475, 1066 | 30 | yes | 2 |
| gLe2 | Stair light e 2 | Light point | 1 | Térreo | Estar/Jantar (r5) | wall | g2 Party wall (right) | 1246 | 200 | A | −x (left) | 475, 1096 | 200 | yes | 2 |
| gS2 | Double outlet stair 2 | Outlet | 4 | Térreo | Estar/Jantar (r5) | wall | g2 Party wall (right) | 1289 | 30 | A | −x (left) | 475, 1139 | 30 | yes | 2 |
| gLe3 | Stair light e 3 | Light point | 1 | Térreo | — | wall | g2 Party wall (right) | 1431 | 200 | A | −x (left) | 475, 1281 | 200 | yes | 2 |
| gH1 | Outlet hall | Outlet | 4 | Térreo | — | wall | g2 Party wall (right) | 1525 | 30 | A | −x (left) | 475, 1375 | 30 | yes | 3 |
| gSuve | Switch u/v/e (riser up) | Switch | 1/8 | Térreo | — | wall | g2 Party wall (right) | 1591 | 110 | A | −x (left) | 475, 1441 | 110 | yes | 3 |
| gSd | Switch d | Switch | 1 | Térreo | — | wall | g2 Party wall (right) | 1631 | 110 | A | −x (left) | 475, 1481 | 110 | yes | 1 |
| gLd1 | Light d 1 (Garagem) | Light point | 1 | Térreo | Garagem (r6) | ceiling | — | — | — | — | down (ceiling) | 155, 1330 | 290 | no | 4 |
| gLd2 | Light d 2 (Garagem) | Light point | 1 | Térreo | Garagem (r6) | ceiling | — | — | — | — | down (ceiling) | 155, 1576 | 290 | no | 1 |
| gG1 | Outlet Garagem | Outlet | 4 | Térreo | Garagem (r6) | wall | g12 Garagem chamfer | 44 | 110 | A | +y (toward street) | 269, 1236 | 110 | yes | 1 |
| uLl | Light l (Dormitório) | Light point | 8 | Superior | Dormitório (r7) | ceiling | — | — | — | — | down (ceiling) | 315, 162 | 582 | no | 7 |
| uO1 | Outlet Dormitório 1 | Outlet | 10 | Superior | Dormitório (r7) | wall | u3 Dormitório back | 66 | 30 | A | +y (toward street) | 216, 11 | 332 | yes | 1 |
| uSl1 | Switch l (3-way) | Switch | 8 | Superior | Dormitório (r7) | wall | u3 Dormitório back | 263 | 110 | A | +y (toward street) | 413, 11 | 412 | yes | 2 |
| uO2 | Outlet Dormitório 2 | Outlet | 10 | Superior | Dormitório (r7) | wall | u3 Dormitório back | 285 | 30 | A | +y (toward street) | 435, 11 | 332 | yes | 1 |
| uSl2 | Switch l (3-way, door) | Switch | 8 | Superior | Dormitório (r7) | wall | u7 Dormitório front | 102 | 110 | B | −y (toward back) | 257, 314 | 412 | yes | 1 |
| uO3 | Outlet Dormitório 3 | Outlet | 10 | Superior | Dormitório (r7) | wall | u2 Party wall (right) | 432 | 30 | A | −x (left) | 475, 282 | 332 | yes | 1 |
| uLm | Light m (BWC) | Light point | 8 | Superior | BWC (r8) | ceiling | — | — | — | — | down (ceiling) | 82, 300 | 582 | no | 3 |
| uSmw | Switch m + w (3-way) | Switch | 8 | Superior | Circ. (r10) | wall | u4 BWC / Dormitório | 340 | 110 | B | +x (right) | 156, 340 | 412 | yes | 2 |
| uLmir1 | Wall light (BWC mirror) | Light point | 8 | Superior | BWC (r8) | wall | u1 Party wall (left) | 372 | 200 | B | +x (right) | 21, 372 | 502 | yes | 2 |
| uO4 | Outlet BWC | Outlet | 10 | Superior | BWC (r8) | wall | u1 Party wall (left) | 407 | 220 | B | +x (right) | 21, 407 | 522 | yes | 1 |
| uLw1 | Light w 1 (Circ.) | Light point | 8 | Superior | Circ. (r10) | ceiling | — | — | — | — | down (ceiling) | 204, 595 | 582 | no | 5 |
| uSw | Switch w (3-way) | Switch | 8 | Superior | Circ. (r10) | wall | u8 Vazio glass (circulation) | 232 | 110 | A | −x (left) | 234, 557 | 412 | yes | 1 |
| uLw2 | Light w 2 (stair top) | Light point | 8 | Superior | Circ. (r10) | ceiling | — | — | — | — | down (ceiling) | 226, 933 | 582 | no | 7 |
| uSeuv | Switch e/u/v | Switch | 1/8 | Superior | Dormitório (r11) | wall | u14 Dormitório 2 chamfer | 25 | 110 | A | −x (left) | 262, 854 | 412 | yes | 2 |
| uSw2 | Switch w (3-way, stair) | Switch | 8 | Superior | Dormitório (r11) | wall | u14 Dormitório 2 chamfer | 45 | 110 | A | −x (left) | 275, 869 | 412 | yes | 1 |
| uQD2 | QD2 | Panel (QD) | QD2 | Superior | Circ. (r10) | wall | u13 Dormitório 2 side | 242 | 150 | A | −x (left) | 244, 817 | 452 | yes | 4 |
| uLn | Light n (BWC suíte) | Light point | 8 | Superior | BWC (r9) | ceiling | — | — | — | — | down (ceiling) | 82, 696 | 582 | no | 5 |
| uSh | Shower | Shower | 11 | Superior | BWC (r9) | wall | u1 Party wall (left) | 600 | 220 | B | +x (right) | 21, 600 | 522 | yes | 1 |
| uLt | Wall light t (mirror) | Light point | 8 | Superior | BWC (r9) | wall | u1 Party wall (left) | 772 | 200 | B | +x (right) | 21, 772 | 502 | yes | 2 |
| uO5 | Outlet BWC suíte | Outlet | 9 | Superior | BWC (r9) | wall | u1 Party wall (left) | 808 | 220 | B | +x (right) | 21, 808 | 522 | yes | 1 |
| uStn | Switch t + n | Switch | 8 | Superior | BWC (r9) | wall | u16 BWC 2 / Suíte | 43 | 110 | B | −y (toward back) | 63, 824 | 412 | yes | 1 |
| uLr | Light r (Dormitório 2) | Light point | 8 | Superior | Dormitório (r11) | ceiling | — | — | — | — | down (ceiling) | 366, 724 | 582 | no | 6 |
| uSr1 | Switch r (3-way, door) | Switch | 8 | Superior | Dormitório (r11) | wall | u13 Dormitório 2 side | 98 | 110 | B | +x (right) | 256, 673 | 412 | yes | 2 |
| uO6 | Outlet Dormitório 2 (door) | Outlet | 10 | Superior | Dormitório (r11) | wall | u13 Dormitório 2 side | 125 | 30 | B | +x (right) | 256, 700 | 332 | yes | 2 |
| uO7 | Outlet Circ. | Outlet | 10 | Superior | Circ. (r10) | wall | u13 Dormitório 2 side | 125 | 30 | A | −x (left) | 244, 700 | 332 | yes | 1 |
| uO8 | Outlet Dormitório 2 right | Outlet | 10 | Superior | Dormitório (r11) | wall | u2 Party wall (right) | 774 | 30 | A | −x (left) | 475, 624 | 332 | yes | 1 |
| uO9 | Outlet Dormitório 2 front | Outlet | 10 | Superior | Dormitório (r11) | wall | u15 Dormitório 2 front | 121 | 30 | B | −y (toward back) | 415, 874 | 332 | yes | 2 |
| uSr2 | Switch r (3-way) | Switch | 8 | Superior | Dormitório (r11) | wall | u15 Dormitório 2 front | 158 | 110 | B | −y (toward back) | 452, 874 | 412 | yes | 1 |
| uLp | Light p (Suíte) | Light point | 8 | Superior | Suíte Casal (r12) | ceiling | — | — | — | — | down (ceiling) | 121, 1021 | 582 | no | 4 |
| uLo | Light o (Suíte) | Light point | 8 | Superior | Suíte Casal (r12) | ceiling | — | — | — | — | down (ceiling) | 155, 1386 | 582 | no | 6 |
| uSpo | Switch p + o (3-way) | Switch | 8 | Superior | Circ. (r10) | wall | u18 Suíte side (circulation) | 112 | 110 | A | −x (left) | 159, 957 | 412 | yes | 1 |
| uO10 | Outlet Suíte 1 | Outlet | 9 | Superior | Suíte Casal (r12) | wall | u1 Party wall (left) | 1013 | 30 | B | +x (right) | 21, 1013 | 332 | yes | 1 |
| uO11 | Outlet Suíte 2 | Outlet | 9 | Superior | Suíte Casal (r12) | wall | u18 Suíte side (circulation) | 270 | 30 | A | −x (left) | 159, 1115 | 332 | yes | 1 |
| uO12 | Outlet Suíte 3 | Outlet | 9 | Superior | Vazio (r16) | wall | u19 Suíte step | 32 | 30 | A | +y (toward street) | 197, 1201 | 332 | yes | 2 |
| uO13 | Outlet Suíte 4 | Outlet | 9 | Superior | Vazio (r16) | wall | u20 Suíte chamfer (vazio) | 42 | 30 | A | +y (toward street) | 270, 1229 | 332 | yes | 1 |
| uO14 | Outlet Suíte 5 | Outlet | 9 | Superior | Suíte Casal (r12) | wall | u1 Party wall (left) | 1298 | 30 | B | +x (right) | 21, 1298 | 332 | yes | 1 |
| uSo | Switch o (3-way) | Switch | 8 | Superior | Suíte Casal (r12) | wall | u1 Party wall (left) | 1385 | 110 | B | +x (right) | 21, 1385 | 412 | yes | 2 |
| uO15 | Outlet Suíte 6 | Outlet | 9 | Superior | Suíte Casal (r12) | wall | u1 Party wall (left) | 1529 | 30 | B | +x (right) | 21, 1529 | 332 | yes | 2 |
| uO16 | Outlet Suíte 7 | Outlet | 9 | Superior | Vazio (r16) | wall | u21 Suíte side (vazio) | 227 | 30 | A | −x (left) | 289, 1472 | 332 | yes | 1 |
| uLv1 | Light v 1 (void) | Light point | 8 | Superior | Vazio (r16) | ceiling | — | — | — | — | down (ceiling) | 247, 1053 | 582 | no | 2 |
| uLv2 | Light v 2 (void) | Light point | 8 | Superior | Vazio (r16) | ceiling | — | — | — | — | down (ceiling) | 307, 1141 | 582 | no | 2 |
| uLu | Light u (void) | Light point | 8 | Superior | Vazio (r16) | ceiling | — | — | — | — | down (ceiling) | 389, 1359 | 582 | no | 3 |
| uSq | Switch q | Switch | 8 | Superior | Suíte Casal (r12) | wall | u22 Suíte / Sacada | 40 | 110 | B | −y (toward back) | 60, 1564 | 412 | yes | 1 |
| uLq1 | Light q 1 (Sacada) | Light point | 8 | Superior | Sacada (r13) | ceiling | — | — | — | — | down (ceiling) | 81, 1636 | 582 | no | 2 |
| uLq2 | Light q 2 (Sacada) | Light point | 8 | Superior | Sacada (r13) | ceiling | — | — | — | — | down (ceiling) | 241, 1636 | 582 | no | 2 |
| b0yzsqn | Box 88 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| bak1g7n | Box 89 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| by4pa3s | Box 90 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| bug5pk0 | Box 91 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| bny7whz | Box 92 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| b9yyvga | Box 93 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| by3a9gz | Box 94 | Outlet | — | Térreo | Churrasqueira (r3) | wall | g8 Churrasqueira / Estar | 212 | 122 | B | −y (toward back) | 232, 564 | 122 | no | 0 |
| binmxjl | Box 95 | Outlet | — | Térreo | Cozinha (r4) | wall | g10 Cozinha / Estar | 113 | 75 | B | −y (toward back) | 381, 874 | 75 | no | 1 |
| bhl7tz3 | Box 96 | Outlet | — | Térreo | Cozinha (r4) | wall | g10 Cozinha / Estar | 113 | 75 | B | −y (toward back) | 381, 874 | 75 | no | 0 |

## Conduits

94 conduits, 253.54 m in total. Orthogonal routing runs on the wall face; otherwise it rises to 6 cm below the ceiling, runs straight through the ceiling/slab to the other box (ceiling boxes connect directly at that level) and drops to it. Straight routing is a direct line.

| ID | From | To | Routing | Length (m) | Path points (x, y, abs. elevation) |
|---|---|---|---|---|---|
| c1 | gLb Light b (A.Serviço) | gA2 Outlet A.Serviço 2 | orthogonal | 2.53 | (90, 134, 284) → (21, 94, 284) → (21, 94, 110) |
| c2 | gA2 Outlet A.Serviço 2 | gA1 Outlet A.Serviço 1 | orthogonal | 0.50 | (21, 94, 110) → (21, 44, 110) |
| c3 | gLb Light b (A.Serviço) | gA3 Outlet A.Serviço 3 | orthogonal | 2.93 | (90, 134, 284) → (158, 36, 284) → (158, 36, 110) |
| c4 | gLb Light b (A.Serviço) | gA4 Switch b + outlet | orthogonal | 2.50 | (90, 134, 284) → (158, 168, 284) → (158, 168, 110) |
| c5 | gLb Light b (A.Serviço) | gLg Light g (Churrasqueira) | orthogonal | 2.35 | (90, 134, 284) → (323, 162, 284) |
| c6 | gLb Light b (A.Serviço) | gLc Light c (Lavabo) | orthogonal | 2.17 | (90, 134, 284) → (84, 351, 284) |
| c7 | gLg Light g (Churrasqueira) | gSf Switch f | orthogonal | 2.56 | (323, 162, 284) → (433, 83, 214) → (433, 83, 110) |
| c8 | gSf Switch f | gLf Light f (grill hood) | orthogonal | 0.72 | (433, 83, 110) → (433, 83, 160) → (455, 83, 160) |
| c9 | gLg Light g (Churrasqueira) | gC3 Double outlet Churrasqueira | orthogonal | 3.73 | (323, 162, 284) → (475, 291, 284) → (475, 291, 110) |
| c10 | gC1 Outlet Churrasqueira 1 | gC2 Outlet Churrasqueira 2 | orthogonal | 0.90 | (475, 98, 110) → (475, 188, 110) |
| c11 | gC2 Outlet Churrasqueira 2 | gC3 Double outlet Churrasqueira | orthogonal | 1.03 | (475, 188, 110) → (475, 291, 110) |
| c12 | gC3 Double outlet Churrasqueira | gLh Wall light h | orthogonal | 2.45 | (475, 291, 110) → (475, 291, 200) → (475, 446, 200) |
| c13 | gLg Light g (Churrasqueira) | gShgi Switch h/g/i | orthogonal | 3.85 | (323, 162, 284) → (156, 291, 284) → (156, 291, 110) |
| c14 | gLg Light g (Churrasqueira) | gLc Light c (Lavabo) | orthogonal | 3.05 | (323, 162, 284) → (84, 351, 284) |
| c15 | gLc Light c (Lavabo) | gSc Switch c | orthogonal | 2.34 | (84, 351, 284) → (144, 345, 284) → (144, 345, 110) |
| c16 | gLc Light c (Lavabo) | gLav Outlet Lavabo | orthogonal | 2.57 | (84, 351, 284) → (21, 406, 284) → (21, 406, 110) |
| c17 | gLav Outlet Lavabo | gLi Wall light i (light well) | orthogonal | 1.87 | (21, 406, 110) → (21, 406, 200) → (21, 503, 200) |
| c18 | gLc Light c (Lavabo) | gLa Light a (Estar) | orthogonal | 3.80 | (84, 351, 284) → (146, 726, 284) |
| c19 | gLa Light a (Estar) | gK1 Outlet Cozinha (under window) | orthogonal | 4.08 | (146, 726, 284) → (313, 576, 284) → (313, 576, 100) |
| c20 | gLa Light a (Estar) | gE1 Outlet Estar 1 | orthogonal | 4.20 | (146, 726, 284) → (21, 616, 284) → (21, 616, 30) |
| c21 | gE1 Outlet Estar 1 | gE2 Outlet Estar 2 | orthogonal | 2.99 | (21, 616, 30) → (21, 915, 30) |
| c22 | gLa Light a (Estar) | gLj Light j (Cozinha) | orthogonal | 2.27 | (146, 726, 284) → (373, 726, 284) |
| c23 | gLa Light a (Estar) | gSak Switch a + k | orthogonal | 3.83 | (146, 726, 284) → (280, 886, 284) → (280, 886, 110) |
| c24 | gSak Switch a + k | gK5 Outlet + switch j (Cozinha) | orthogonal | 3.79 | (280, 886, 110) → (280, 886, 284) → (308, 874, 284) → (308, 874, 110) |
| c25 | gLa Light a (Estar) | gLk Light k (Jantar) | orthogonal | 3.15 | (146, 726, 284) → (94, 1037, 284) |
| c26 | gLj Light j (Cozinha) | gM Spa motor (hidromassagem) | orthogonal | 4.37 | (373, 726, 284) → (457, 564, 284) → (457, 564, 30) |
| c27 | gLj Light j (Cozinha) | gK3 Outlet Cozinha 2 | orthogonal | 2.76 | (373, 726, 284) → (475, 717, 284) → (475, 717, 110) |
| c28 | gK2 Outlet Cozinha 1 | gK3 Outlet Cozinha 2 | orthogonal | 0.83 | (475, 634, 110) → (475, 717, 110) |
| c29 | gK3 Outlet Cozinha 2 | gK4 Outlet Cozinha 3 | orthogonal | 1.30 | (475, 717, 110) → (475, 847, 110) |
| c30 | gLj Light j (Cozinha) | gQD1 QD1 | orthogonal | 2.82 | (373, 726, 284) → (358, 874, 284) → (358, 874, 150) |
| c31 | gLk Light k (Jantar) | gE3 Outlet Jantar | orthogonal | 4.13 | (94, 1037, 284) → (21, 1178, 284) → (21, 1178, 30) |
| c32 | gLk Light k (Jantar) | gLd1 Light d 1 (Garagem) | orthogonal | 2.99 | (94, 1037, 284) → (155, 1330, 284) |
| c33 | gLd1 Light d 1 (Garagem) | gLd2 Light d 2 (Garagem) | orthogonal | 2.46 | (155, 1330, 284) → (155, 1576, 284) |
| c34 | gLd1 Light d 1 (Garagem) | gG1 Outlet Garagem | orthogonal | 3.22 | (155, 1330, 284) → (269, 1236, 284) → (269, 1236, 110) |
| c35 | gLd1 Light d 1 (Garagem) | gH1 Outlet hall | orthogonal | 5.77 | (155, 1330, 284) → (475, 1375, 284) → (475, 1375, 30) |
| c36 | gLe1 Stair light e 1 | gS1 Double outlet stair 1 | orthogonal | 3.06 | (475, 930, 200) → (475, 930, 30) → (475, 1066, 30) |
| c37 | gS1 Double outlet stair 1 | gLe2 Stair light e 2 | orthogonal | 2.00 | (475, 1066, 30) → (475, 1066, 200) → (475, 1096, 200) |
| c38 | gLe2 Stair light e 2 | gS2 Double outlet stair 2 | orthogonal | 2.13 | (475, 1096, 200) → (475, 1096, 30) → (475, 1139, 30) |
| c39 | gS2 Double outlet stair 2 | gLe3 Stair light e 3 | orthogonal | 3.12 | (475, 1139, 30) → (475, 1139, 200) → (475, 1281, 200) |
| c40 | gLe3 Stair light e 3 | gH1 Outlet hall | orthogonal | 2.64 | (475, 1281, 200) → (475, 1281, 30) → (475, 1375, 30) |
| c41 | gH1 Outlet hall | gSuve Switch u/v/e (riser up) | orthogonal | 1.46 | (475, 1375, 30) → (475, 1375, 110) → (475, 1441, 110) |
| c42 | gSuve Switch u/v/e (riser up) | gSd Switch d | orthogonal | 0.40 | (475, 1441, 110) → (475, 1481, 110) |
| c43 | uLl Light l (Dormitório) | uO1 Outlet Dormitório 1 | orthogonal | 4.24 | (315, 162, 576) → (216, 11, 576) → (216, 11, 332) |
| c44 | uLl Light l (Dormitório) | uSl1 Switch l (3-way) | orthogonal | 3.44 | (315, 162, 576) → (413, 11, 576) → (413, 11, 412) |
| c45 | uSl1 Switch l (3-way) | uO2 Outlet Dormitório 2 | orthogonal | 1.02 | (413, 11, 412) → (413, 11, 332) → (435, 11, 332) |
| c46 | uLl Light l (Dormitório) | uO3 Outlet Dormitório 3 | orthogonal | 4.44 | (315, 162, 576) → (475, 282, 576) → (475, 282, 332) |
| c47 | uLl Light l (Dormitório) | uLm Light m (BWC) | orthogonal | 2.71 | (315, 162, 576) → (82, 300, 576) |
| c48 | uLl Light l (Dormitório) | uSmw Switch m + w (3-way) | orthogonal | 4.02 | (315, 162, 576) → (156, 340, 576) → (156, 340, 412) |
| c49 | uLl Light l (Dormitório) | uSl2 Switch l (3-way, door) | orthogonal | 3.26 | (315, 162, 576) → (257, 314, 576) → (257, 314, 412) |
| c50 | uLl Light l (Dormitório) | uLw1 Light w 1 (Circ.) | orthogonal | 4.47 | (315, 162, 576) → (204, 595, 576) |
| c51 | uLm Light m (BWC) | uSmw Switch m + w (3-way) | orthogonal | 2.48 | (82, 300, 576) → (156, 340, 576) → (156, 340, 412) |
| c52 | uLm Light m (BWC) | uLmir1 Wall light (BWC mirror) | orthogonal | 1.68 | (82, 300, 576) → (21, 372, 576) → (21, 372, 502) |
| c53 | uLmir1 Wall light (BWC mirror) | uO4 Outlet BWC | orthogonal | 0.55 | (21, 372, 502) → (21, 372, 522) → (21, 407, 522) |
| c54 | uLw1 Light w 1 (Circ.) | uSw Switch w (3-way) | orthogonal | 2.12 | (204, 595, 576) → (234, 557, 576) → (234, 557, 412) |
| c55 | uLw1 Light w 1 (Circ.) | uLn Light n (BWC suíte) | orthogonal | 1.58 | (204, 595, 576) → (82, 696, 576) |
| c56 | uLw1 Light w 1 (Circ.) | uLr Light r (Dormitório 2) | orthogonal | 2.07 | (204, 595, 576) → (366, 724, 576) |
| c57 | uLw1 Light w 1 (Circ.) | uLw2 Light w 2 (stair top) | orthogonal | 3.39 | (204, 595, 576) → (226, 933, 576) |
| c58 | uLn Light n (BWC suíte) | uSh Shower | orthogonal | 1.68 | (82, 696, 576) → (21, 600, 576) → (21, 600, 522) |
| c59 | uLn Light n (BWC suíte) | uLt Wall light t (mirror) | orthogonal | 1.71 | (82, 696, 576) → (21, 772, 576) → (21, 772, 502) |
| c60 | uLt Wall light t (mirror) | uO5 Outlet BWC suíte | orthogonal | 0.56 | (21, 772, 502) → (21, 772, 522) → (21, 808, 522) |
| c61 | uLn Light n (BWC suíte) | uStn Switch t + n | orthogonal | 2.93 | (82, 696, 576) → (63, 824, 576) → (63, 824, 412) |
| c62 | uLn Light n (BWC suíte) | uQD2 QD2 | orthogonal | 3.26 | (82, 696, 576) → (244, 817, 576) → (244, 817, 452) |
| c63 | uQD2 QD2 | uLw2 Light w 2 (stair top) | orthogonal | 2.41 | (244, 817, 452) → (244, 817, 576) → (226, 933, 576) |
| c64 | uQD2 QD2 | uLr Light r (Dormitório 2) | orthogonal | 2.78 | (244, 817, 452) → (244, 817, 576) → (366, 724, 576) |
| c65 | uLr Light r (Dormitório 2) | uSr1 Switch r (3-way, door) | orthogonal | 2.85 | (366, 724, 576) → (256, 673, 576) → (256, 673, 412) |
| c66 | uSr1 Switch r (3-way, door) | uO6 Outlet Dormitório 2 (door) | orthogonal | 1.07 | (256, 673, 412) → (256, 673, 332) → (256, 700, 332) |
| c67 | uO6 Outlet Dormitório 2 (door) | uO7 Outlet Circ. | orthogonal | 5.01 | (256, 700, 332) → (256, 700, 576) → (244, 700, 576) → (244, 700, 332) |
| c68 | uLr Light r (Dormitório 2) | uO8 Outlet Dormitório 2 right | orthogonal | 3.92 | (366, 724, 576) → (475, 624, 576) → (475, 624, 332) |
| c69 | uLr Light r (Dormitório 2) | uO9 Outlet Dormitório 2 front | orthogonal | 4.01 | (366, 724, 576) → (415, 874, 576) → (415, 874, 332) |
| c70 | uO9 Outlet Dormitório 2 front | uSr2 Switch r (3-way) | orthogonal | 1.17 | (415, 874, 332) → (415, 874, 412) → (452, 874, 412) |
| c71 | uLr Light r (Dormitório 2) | uLw2 Light w 2 (stair top) | orthogonal | 2.52 | (366, 724, 576) → (226, 933, 576) |
| c72 | uLw2 Light w 2 (stair top) | uSeuv Switch e/u/v | orthogonal | 2.51 | (226, 933, 576) → (262, 854, 576) → (262, 854, 412) |
| c73 | uSeuv Switch e/u/v | uSw2 Switch w (3-way, stair) | orthogonal | 0.20 | (262, 854, 412) → (275, 869, 412) |
| c74 | uLw2 Light w 2 (stair top) | uSpo Switch p + o (3-way) | orthogonal | 2.36 | (226, 933, 576) → (159, 957, 576) → (159, 957, 412) |
| c75 | uLw2 Light w 2 (stair top) | uLp Light p (Suíte) | orthogonal | 1.37 | (226, 933, 576) → (121, 1021, 576) |
| c76 | uLw2 Light w 2 (stair top) | uLv1 Light v 1 (void) | orthogonal | 1.22 | (226, 933, 576) → (247, 1053, 576) |
| c77 | uLv1 Light v 1 (void) | uLv2 Light v 2 (void) | orthogonal | 1.07 | (247, 1053, 576) → (307, 1141, 576) |
| c78 | uLv2 Light v 2 (void) | uLu Light u (void) | orthogonal | 2.33 | (307, 1141, 576) → (389, 1359, 576) |
| c79 | uLp Light p (Suíte) | uO10 Outlet Suíte 1 | orthogonal | 3.44 | (121, 1021, 576) → (21, 1013, 576) → (21, 1013, 332) |
| c80 | uLp Light p (Suíte) | uO11 Outlet Suíte 2 | orthogonal | 3.45 | (121, 1021, 576) → (159, 1115, 576) → (159, 1115, 332) |
| c81 | uLp Light p (Suíte) | uLo Light o (Suíte) | orthogonal | 3.67 | (121, 1021, 576) → (155, 1386, 576) |
| c82 | uLo Light o (Suíte) | uO12 Outlet Suíte 3 | orthogonal | 4.33 | (155, 1386, 576) → (197, 1201, 576) → (197, 1201, 332) |
| c83 | uO12 Outlet Suíte 3 | uO13 Outlet Suíte 4 | orthogonal | 5.66 | (197, 1201, 332) → (197, 1201, 576) → (270, 1229, 576) → (270, 1229, 332) |
| c84 | uLo Light o (Suíte) | uLu Light u (void) | orthogonal | 2.36 | (155, 1386, 576) → (389, 1359, 576) |
| c85 | uLo Light o (Suíte) | uO16 Outlet Suíte 7 | orthogonal | 4.03 | (155, 1386, 576) → (289, 1472, 576) → (289, 1472, 332) |
| c86 | uLo Light o (Suíte) | uO15 Outlet Suíte 6 | orthogonal | 4.40 | (155, 1386, 576) → (21, 1529, 576) → (21, 1529, 332) |
| c87 | uO15 Outlet Suíte 6 | uSo Switch o (3-way) | orthogonal | 2.24 | (21, 1529, 332) → (21, 1529, 412) → (21, 1385, 412) |
| c88 | uSo Switch o (3-way) | uO14 Outlet Suíte 5 | orthogonal | 1.67 | (21, 1385, 412) → (21, 1385, 332) → (21, 1298, 332) |
| c89 | uLo Light o (Suíte) | uLq2 Light q 2 (Sacada) | orthogonal | 2.64 | (155, 1386, 576) → (241, 1636, 576) |
| c90 | uLq2 Light q 2 (Sacada) | uLq1 Light q 1 (Sacada) | orthogonal | 1.60 | (241, 1636, 576) → (81, 1636, 576) |
| c91 | uLq1 Light q 1 (Sacada) | uSq Switch q | orthogonal | 2.39 | (81, 1636, 576) → (60, 1564, 576) → (60, 1564, 412) |
| c92 | gQD1 QD1 | uQD2 QD2 | orthogonal | 5.77 | (358, 874, 150) → (358, 874, 284) → (244, 817, 576) → (244, 817, 452) |
| c93 | gSuve Switch u/v/e (riser up) | uLu Light u (void) | orthogonal | 4.89 | (475, 1441, 110) → (475, 1441, 284) → (389, 1359, 576) |
| co8uyqu | binmxjl Box 95 | gQD1 QD1 | orthogonal | 0.99 | (381, 874, 75) → (381, 874, 150) → (358, 874, 150) |

## Not modelled

- Floor level steps (−0,70 / −0,65 / +0,60 / +0,65 m); every floor plate is flat.
- Roof parapet, rufo, marquise and façade cladding.
- Door leaves and swing direction.

## Editing the model

The full model lives in `house.json` next to this file; edit it directly (then use Data → Reload in the page) or through the page. This file is regenerated on every save. Schema: `floors[2]{name,height}`, `slab`, `walls[]{id,floor(0|1),name,x1,y1,x2,y2,t,h(null = floor height),type("wall"|"glass"),exterior,approx,openings[]{id,kind("door"|"window"),offset,width,height,sill}}`, `rooms[]{id,floor,name,area,x,y,bounds[x0,y0,x1,y1]}`, `boxes[]{id,label,kind,circuit,approx,mount("wall"|"ceiling"); wall: wallId,along,z,side(1 = Face A, -1 = Face B); ceiling: floor,x,y}`, `conduits[]{id,a,b,mode("orthogonal"|"straight")}`, plus `slabs{ground,upper,roof}{outer[[x,y]],holes[[[x,y]]]}` and `stair`.
