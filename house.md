# Unidade 05 · house model

Generated 2026-11-04 16:44 from the interactive 3D model. Source drawings: floor plans (térreo, superior) and sections Corte AA / Corte BB at 1:50. Two-floor attached townhouse.

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

| ID | Name | Start (x,y) | End (x,y) | Length | Thick | Height | Type | Approx | Openings |
|---|---|---|---|---|---|---|---|---|---|
| g1 | Party wall (left) | 10, -83 | 10, 1695 | 1778 | 20 | 290 | masonry | yes | — |
| g2 | Party wall (right) | 486, -150 | 486, 1695 | 1845 | 20 | 290 | masonry | no | — |
| g3 | A.Serviço back | 20, 5 | 164, 5 | 144 | 10 | 290 | masonry | yes | window 100×120/90 @61 |
| g4 | A.Serviço side | 164, 0 | 164, 276 | 276 | 10 | 290 | masonry | yes | door 80×210 @216 |
| g5 | A.Serviço / Lavabo | 20, 271 | 164, 271 | 144 | 10 | 290 | masonry | yes | — |
| g6 | Lavabo side | 150, 276 | 150, 436 | 160 | 10 | 290 | masonry | no | door 70×210 @115 (approx) |
| g7 | Lavabo back | 20, 436 | 155, 436 | 135 | 10 | 290 | masonry | no | window 100×50/170 @58 |
| g8 | Churrasqueira / Estar | 20, 570 | 476, 570 | 456 | 10 | 290 | masonry | no | door 90×210 @100 (approx); window 130×100/110 @315 |
| g9 | Churrasqueira (grill) | 416, 41 | 476, 41 | 60 | 82 | 220 | masonry | yes | — |
| g10 | Cozinha / Estar | 268, 880 | 476, 880 | 208 | 10 | 290 | masonry | no | — |
| g11 | Garagem / Estar | 20, 1200 | 242, 1200 | 222 | 10 | 290 | masonry | no | window 150×120/90 @105 |
| g12 | Garagem chamfer | 242, 1200 | 295, 1253 | 75 | 10 | 290 | masonry | no | — |
| g13 | Garagem side | 295, 1253 | 295, 1695 | 442 | 10 | 290 | masonry | no | door 142×210 @311 (approx) |
| g14 | Entrance | 300, 1488 | 476, 1488 | 176 | 10 | 290 | masonry | no | door 130×250 @106 |

### Superior

| ID | Name | Start (x,y) | End (x,y) | Length | Thick | Height | Type | Approx | Openings |
|---|---|---|---|---|---|---|---|---|---|
| u1 | Party wall (left) | 10, 0 | 10, 1695 | 1695 | 20 | 280 | masonry | no | — |
| u2 | Party wall (right) | 486, -150 | 486, 1695 | 1845 | 20 | 280 | masonry | no | — |
| u3 | Dormitório back | 150, 5 | 476, 5 | 326 | 10 | 280 | masonry | no | window 150×120/90 @165 |
| u4 | BWC / Dormitório | 150, 0 | 150, 428 | 428 | 10 | 280 | masonry | no | door 70×210 @383 (approx) |
| u5 | BWC window wall | 20, 165 | 150, 165 | 130 | 10 | 280 | masonry | yes | window 100×50/160 @63 |
| u6 | BWC / Vazio | 20, 423 | 150, 423 | 130 | 10 | 280 | masonry | yes | — |
| u7 | Dormitório front | 155, 320 | 476, 320 | 321 | 10 | 280 | masonry | no | door 80×210 @42 (approx) |
| u8 | Vazio glass (circulation) | 240, 325 | 240, 565 | 240 | 10 | 280 | glass | yes | — |
| u9 | Vazio glass (light well) | 150, 428 | 150, 565 | 137 | 10 | 280 | glass | yes | — |
| u10 | BWC 2 back | 20, 570 | 150, 570 | 130 | 10 | 280 | masonry | no | window 100×50/160 @63 |
| u11 | Dormitório 2 back | 240, 570 | 476, 570 | 236 | 10 | 280 | masonry | no | window 130×120/90 @155 |
| u12 | BWC 2 side | 150, 570 | 150, 830 | 260 | 10 | 280 | masonry | no | — |
| u13 | Dormitório 2 side | 250, 575 | 250, 831 | 256 | 10 | 280 | masonry | no | door 80×210 @45 (approx) |
| u14 | Dormitório 2 chamfer | 250, 831 | 294, 880 | 66 | 10 | 280 | masonry | no | — |
| u15 | Dormitório 2 front | 294, 880 | 476, 880 | 182 | 10 | 280 | masonry | no | — |
| u16 | BWC 2 / Suíte | 20, 830 | 150, 830 | 130 | 10 | 280 | masonry | no | door 70×210 @85 |
| u17 | Suíte chamfer (BWC) | 150, 830 | 165, 845 | 21 | 10 | 280 | masonry | yes | — |
| u18 | Suíte side (circulation) | 165, 845 | 165, 1195 | 350 | 10 | 280 | masonry | yes | door 80×210 @65 (approx) |
| u19 | Suíte step | 165, 1195 | 245, 1195 | 80 | 10 | 280 | masonry | yes | — |
| u20 | Suíte chamfer (vazio) | 245, 1195 | 295, 1245 | 71 | 10 | 280 | masonry | yes | — |
| u21 | Suíte side (vazio) | 295, 1245 | 295, 1570 | 325 | 10 | 280 | masonry | no | — |
| u22 | Suíte / Sacada | 20, 1570 | 300, 1570 | 280 | 10 | 280 | masonry | yes | door 160×210 @129 |
| u23 | Sacada railing | 20, 1692 | 300, 1692 | 280 | 5 | 110 | glass | yes | — |
| u24 | Sacada railing (side) | 297, 1575 | 297, 1692 | 117 | 5 | 110 | glass | yes | — |
| u25 | Vidro fixo (façade) | 300, 1480 | 476, 1480 | 176 | 10 | 280 | glass | no | — |
| u26 | Circulation guard | 170, 975 | 246, 975 | 76 | 5 | 110 | glass | yes | — |

## Junction boxes

5 boxes. Boxes are 12 × 12 cm squares mounted on a wall face.

| ID | Label | Floor | Room | Wall | Along | z | Face | Faces | Plan x, y | Abs. elevation | Conduits |
|---|---|---|---|---|---|---|---|---|---|---|---|
| b1 | Outlet (example) | Térreo | Estar/Jantar (r5) | g11 Garagem / Estar | 20 | 30 | B | −y (toward back) | 40, 1194 | 30 | 1 |
| b2 | Switch (example) | Térreo | Estar/Jantar (r5) | g11 Garagem / Estar | 200 | 110 | B | −y (toward back) | 220, 1194 | 110 | 2 |
| b3 | Outlet (example) | Térreo | Estar/Jantar (r5) | g8 Churrasqueira / Estar | 215 | 30 | A | +y (toward street) | 235, 576 | 30 | 1 |
| b0r2oth | Box 4 | Superior | Vazio (r16) | u19 Suíte step | 36 | 153 | A | +y (toward street) | 201, 1201 | 455 | 1 |
| bplj8ak | Box 5 | Superior | Vazio (r16) | u19 Suíte step | 40 | 38 | A | +y (toward street) | 205, 1201 | 340 | 1 |

## Conduits

3 conduits, 13.96 m in total. Orthogonal routing runs on the wall face; between different walls it rises to 20 cm below the ceiling, crosses through the ceiling/slab, and drops to the other box. Straight routing is a direct line.

| ID | From | To | Routing | Length (m) | Path points (x, y, abs. elevation) |
|---|---|---|---|---|---|
| c1 | b1 Outlet (example) | b2 Switch (example) | orthogonal | 2.60 | (40, 1194, 30) → (40, 1194, 110) → (220, 1194, 110) |
| c2 | b2 Switch (example) | b3 Outlet (example) | orthogonal | 10.17 | (220, 1194, 110) → (220, 1194, 270) → (235, 576, 270) → (235, 576, 30) |
| c9h7hyg | bplj8ak Box 5 | b0r2oth Box 4 | orthogonal | 1.19 | (205, 1201, 340) → (205, 1201, 455) → (201, 1201, 455) |

## Not modelled

- Floor level steps (−0,70 / −0,65 / +0,60 / +0,65 m); every floor plate is flat.
- Roof parapet, rufo, marquise and façade cladding.
- Door leaves and swing direction.

## Editing the model

The full model lives in `house.json` next to this file; edit it directly (then use Data → Reload in the page) or through the page. This file is regenerated on every save. Schema: `floors[2]{name,height}`, `slab`, `walls[]{id,floor(0|1),name,x1,y1,x2,y2,t,h(null = floor height),type("wall"|"glass"),approx,openings[]{id,kind("door"|"window"),offset,width,height,sill}}`, `rooms[]{id,floor,name,area,x,y,bounds[x0,y0,x1,y1]}`, `boxes[]{id,label,wallId,along,z,side(1 = Face A, -1 = Face B)}`, `conduits[]{id,a,b,mode("orthogonal"|"straight")}`, plus `slabs{ground,upper,roof}{outer[[x,y]],holes[[[x,y]]]}` and `stair`.
