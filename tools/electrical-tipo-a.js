#!/usr/bin/env node
// Builds electrical-tipo-a.json: junction boxes and conduits read from the
// "016-13 Elétrico" sheet (TIPO A, Pavimento Térreo and Pavimento Superior, 1:50).
//
// Positions were measured on a 200 dpi render of the PDF and converted to model
// centimetres with x = 20 + (px - left inner wall) * 0.6378, y = 10 + (px - back inner wall) * 0.6378.
// Mounting heights are not on the sheet; the agreed defaults are used and every
// wall box is flagged approximate.
//
// Symbols (NBR 5444 conventions as drawn on the sheet):
//   double circle with letter|number  = ceiling light point (letter = switch, number = circuit)
//   triangle outline / half / filled  = outlet low 30 / mid 110 / high 220 cm
//   open circle = one-way switch, filled circle = three-way switch, half circle = wall light
// Usage: node tools/electrical-tipo-a.js > electrical-tipo-a.json

const H = { low: 30, mid: 110, high: 220, sw: 110, panel: 150, wallLight: 200 };
const boxes = [];
const conduits = [];

// Wall helpers. Along-distances are measured from each wall's start point in house.json.
const L0 = (y) => ({ wallId: 'g1', along: Math.round(y + 83), side: -1 });   // left party wall, Térreo (starts y=-83)
const R0 = (y) => ({ wallId: 'g2', along: Math.round(y + 150), side: 1 });   // right party wall, Térreo (starts y=-150)
const L1 = (y) => ({ wallId: 'u1', along: Math.round(y), side: -1 });        // left party wall, Superior (starts y=0)
const R1 = (y) => ({ wallId: 'u2', along: Math.round(y + 150), side: 1 });   // right party wall, Superior
const W = (wallId, along, side) => ({ wallId, along, side });

function wall(id, label, kind, circuit, z, at) {
  boxes.push({ id, label, mount: 'wall', kind, circuit, approx: true, ...at, z });
}
function ceil(id, label, floor, x, y, circuit) {
  boxes.push({ id, label, mount: 'ceiling', kind: 'light', circuit, approx: false, floor, x: Math.round(x), y: Math.round(y) });
}
function link(...ids) {
  for (let i = 1; i < ids.length; i++) conduits.push({ id: `c${conduits.length + 1}`, a: ids[i - 1], b: ids[i], mode: 'orthogonal' });
}

/* ---------------- Térreo (QD1) ---------------- */
// A.Serviço
ceil('gLb', 'Light b (A.Serviço)', 0, 90, 134, '1');
wall('gA1', 'Outlet A.Serviço 1', 'outlet', '2', H.mid, L0(44));
wall('gA2', 'Outlet A.Serviço 2', 'outlet', '2', H.mid, L0(94));
wall('gA3', 'Outlet A.Serviço 3', 'outlet', '2', H.mid, W('g4', 36, 1));
wall('gA4', 'Switch b + outlet', 'switch', '1/2', H.sw, W('g4', 168, 1));
// Lavabo
ceil('gLc', 'Light c (Lavabo)', 0, 84, 351, '1');
wall('gSc', 'Switch c', 'switch', '1', H.sw, W('g6', 69, 1));
wall('gShgi', 'Switch h/g/i', 'switch', '1', H.sw, W('g6', 15, -1));
wall('gLav', 'Outlet Lavabo', 'outlet', '2', H.mid, L0(406));
wall('gLi', 'Wall light i (light well)', 'light', '1', H.wallLight, L0(503));
// Churrasqueira
ceil('gLg', 'Light g (Churrasqueira)', 0, 323, 162, '1');
wall('gSf', 'Switch f', 'switch', '1', H.sw, W('g9', 17, 1));
wall('gLf', 'Light f (grill hood)', 'light', '1', 160, W('g9', 39, 1));
wall('gC1', 'Outlet Churrasqueira 1', 'outlet', '2', H.mid, R0(98));
wall('gC2', 'Outlet Churrasqueira 2', 'outlet', '2', H.mid, R0(188));
wall('gC3', 'Double outlet Churrasqueira', 'outlet', '2', H.mid, R0(291));
wall('gLh', 'Wall light h', 'light', '1', H.wallLight, R0(446));
wall('gM', 'Spa motor (hidromassagem)', 'other', '5', 30, W('g8', 437, -1));
// Estar / Cozinha
ceil('gLa', 'Light a (Estar)', 0, 146, 726, '1');
ceil('gLj', 'Light j (Cozinha)', 0, 373, 726, '1');
ceil('gLk', 'Light k (Jantar)', 0, 94, 1037, '1');
wall('gK1', 'Outlet Cozinha (under window)', 'outlet', '3', 100, W('g8', 293, 1));
wall('gK2', 'Outlet Cozinha 1', 'outlet', '3', H.mid, R0(634));
wall('gK3', 'Outlet Cozinha 2', 'outlet', '3', H.mid, R0(717));
wall('gK4', 'Outlet Cozinha 3', 'outlet', '3', H.mid, R0(847));
wall('gK5', 'Outlet + switch j (Cozinha)', 'switch', '1/3', H.sw, W('g10', 40, -1));
wall('gSak', 'Switch a + k', 'switch', '1', H.sw, W('g10', 12, 1));
wall('gQD1', 'QD1', 'panel', 'QD1', H.panel, W('g10', 90, 1));
wall('gE1', 'Outlet Estar 1', 'outlet', '4', H.low, L0(616));
wall('gE2', 'Outlet Estar 2', 'outlet', '4', H.low, L0(915));
wall('gE3', 'Outlet Jantar', 'outlet', '4', H.low, L0(1178));
// Stair wall and hall (right party wall)
wall('gLe1', 'Stair light e 1', 'light', '1', H.wallLight, R0(930));
wall('gS1', 'Double outlet stair 1', 'outlet', '4', H.low, R0(1066));
wall('gLe2', 'Stair light e 2', 'light', '1', H.wallLight, R0(1096));
wall('gS2', 'Double outlet stair 2', 'outlet', '4', H.low, R0(1139));
wall('gLe3', 'Stair light e 3', 'light', '1', H.wallLight, R0(1281));
wall('gH1', 'Outlet hall', 'outlet', '4', H.low, R0(1375));
wall('gSuve', 'Switch u/v/e (riser up)', 'switch', '1/8', H.sw, R0(1441));
wall('gSd', 'Switch d', 'switch', '1', H.sw, R0(1481));
// Garagem
ceil('gLd1', 'Light d 1 (Garagem)', 0, 155, 1330, '1');
ceil('gLd2', 'Light d 2 (Garagem)', 0, 155, 1576, '1');
wall('gG1', 'Outlet Garagem', 'outlet', '4', H.mid, W('g12', 44, 1));

link('gLb', 'gA2', 'gA1');
link('gLb', 'gA3');
link('gLb', 'gA4');
link('gLb', 'gLg');
link('gLb', 'gLc');
link('gLg', 'gSf', 'gLf');
link('gLg', 'gC3');
link('gC1', 'gC2', 'gC3', 'gLh');
link('gLg', 'gShgi');
link('gLg', 'gLc');
link('gLc', 'gSc');
link('gLc', 'gLav', 'gLi');
link('gLc', 'gLa');
link('gLa', 'gK1');
link('gLa', 'gE1', 'gE2');
link('gLa', 'gLj');
link('gLa', 'gSak', 'gK5');
link('gLa', 'gLk');
link('gLj', 'gM');
link('gLj', 'gK3');
link('gK2', 'gK3', 'gK4');
link('gLj', 'gQD1');
link('gLk', 'gE3');
link('gLk', 'gLd1', 'gLd2');
link('gLd1', 'gG1');
link('gLd1', 'gH1');
link('gLe1', 'gS1', 'gLe2', 'gS2', 'gLe3', 'gH1', 'gSuve', 'gSd');

/* ---------------- Superior (QD2) ---------------- */
// Dormitório 9,80
ceil('uLl', 'Light l (Dormitório)', 1, 315, 162, '8');
wall('uO1', 'Outlet Dormitório 1', 'outlet', '10', H.low, W('u3', 66, 1));
wall('uSl1', 'Switch l (3-way)', 'switch', '8', H.sw, W('u3', 263, 1));
wall('uO2', 'Outlet Dormitório 2', 'outlet', '10', H.low, W('u3', 285, 1));
wall('uSl2', 'Switch l (3-way, door)', 'switch', '8', H.sw, W('u7', 102, -1));
wall('uO3', 'Outlet Dormitório 3', 'outlet', '10', H.low, R1(282));
// BWC 1
ceil('uLm', 'Light m (BWC)', 1, 82, 300, '8');
wall('uSmw', 'Switch m + w (3-way)', 'switch', '8', H.sw, W('u4', 340, -1));
wall('uLmir1', 'Wall light (BWC mirror)', 'light', '8', H.wallLight, L1(372));
wall('uO4', 'Outlet BWC', 'outlet', '10', H.high, L1(407));
// Circulação
ceil('uLw1', 'Light w 1 (Circ.)', 1, 204, 595, '8');
wall('uSw', 'Switch w (3-way)', 'switch', '8', H.sw, W('u8', 232, 1));
ceil('uLw2', 'Light w 2 (stair top)', 1, 226, 933, '8');
wall('uSeuv', 'Switch e/u/v', 'switch', '1/8', H.sw, W('u14', 25, 1));
wall('uSw2', 'Switch w (3-way, stair)', 'switch', '8', H.sw, W('u14', 45, 1));
wall('uQD2', 'QD2', 'panel', 'QD2', H.panel, W('u13', 242, 1));
// BWC 2 (suite)
ceil('uLn', 'Light n (BWC suíte)', 1, 82, 696, '8');
wall('uSh', 'Shower', 'shower', '11', H.high, L1(600));
wall('uLt', 'Wall light t (mirror)', 'light', '8', H.wallLight, L1(772));
wall('uO5', 'Outlet BWC suíte', 'outlet', '9', H.high, L1(808));
wall('uStn', 'Switch t + n', 'switch', '8', H.sw, W('u16', 43, -1));
// Dormitório 6,60
ceil('uLr', 'Light r (Dormitório 2)', 1, 366, 724, '8');
wall('uSr1', 'Switch r (3-way, door)', 'switch', '8', H.sw, W('u13', 98, -1));
wall('uO6', 'Outlet Dormitório 2 (door)', 'outlet', '10', H.low, W('u13', 125, -1));
wall('uO7', 'Outlet Circ.', 'outlet', '10', H.low, W('u13', 125, 1));
wall('uO8', 'Outlet Dormitório 2 right', 'outlet', '10', H.low, R1(624));
wall('uO9', 'Outlet Dormitório 2 front', 'outlet', '10', H.low, W('u15', 121, -1));
wall('uSr2', 'Switch r (3-way)', 'switch', '8', H.sw, W('u15', 158, -1));
// Suíte
ceil('uLp', 'Light p (Suíte)', 1, 121, 1021, '8');
ceil('uLo', 'Light o (Suíte)', 1, 155, 1386, '8');
wall('uSpo', 'Switch p + o (3-way)', 'switch', '8', H.sw, W('u18', 112, 1));
wall('uO10', 'Outlet Suíte 1', 'outlet', '9', H.low, L1(1013));
wall('uO11', 'Outlet Suíte 2', 'outlet', '9', H.low, W('u18', 270, 1));
wall('uO12', 'Outlet Suíte 3', 'outlet', '9', H.low, W('u19', 32, 1));
wall('uO13', 'Outlet Suíte 4', 'outlet', '9', H.low, W('u20', 42, 1));
wall('uO14', 'Outlet Suíte 5', 'outlet', '9', H.low, L1(1298));
wall('uSo', 'Switch o (3-way)', 'switch', '8', H.sw, L1(1385));
wall('uO15', 'Outlet Suíte 6', 'outlet', '9', H.low, L1(1529));
wall('uO16', 'Outlet Suíte 7', 'outlet', '9', H.low, W('u21', 227, 1));
// Void over Estar
ceil('uLv1', 'Light v 1 (void)', 1, 247, 1053, '8');
ceil('uLv2', 'Light v 2 (void)', 1, 307, 1141, '8');
ceil('uLu', 'Light u (void)', 1, 389, 1359, '8');
// Sacada
wall('uSq', 'Switch q', 'switch', '8', H.sw, W('u22', 40, -1));
ceil('uLq1', 'Light q 1 (Sacada)', 1, 81, 1636, '8');
ceil('uLq2', 'Light q 2 (Sacada)', 1, 241, 1636, '8');

link('uLl', 'uO1');
link('uLl', 'uSl1', 'uO2');
link('uLl', 'uO3');
link('uLl', 'uLm');
link('uLl', 'uSmw');
link('uLl', 'uSl2');
link('uLl', 'uLw1');
link('uLm', 'uSmw');
link('uLm', 'uLmir1', 'uO4');
link('uLw1', 'uSw');
link('uLw1', 'uLn');
link('uLw1', 'uLr');
link('uLw1', 'uLw2');
link('uLn', 'uSh');
link('uLn', 'uLt', 'uO5');
link('uLn', 'uStn');
link('uLn', 'uQD2');
link('uQD2', 'uLw2');
link('uQD2', 'uLr');
link('uLr', 'uSr1', 'uO6', 'uO7');
link('uLr', 'uO8');
link('uLr', 'uO9', 'uSr2');
link('uLr', 'uLw2');
link('uLw2', 'uSeuv', 'uSw2');
link('uLw2', 'uSpo');
link('uLw2', 'uLp');
link('uLw2', 'uLv1', 'uLv2', 'uLu');
link('uLp', 'uO10');
link('uLp', 'uO11');
link('uLp', 'uLo');
link('uLo', 'uO12', 'uO13');
link('uLo', 'uLu');
link('uLo', 'uO16');
link('uLo', 'uO15', 'uSo', 'uO14');
link('uLo', 'uLq2', 'uLq1', 'uSq');

/* ---------------- Between floors ---------------- */
link('gQD1', 'uQD2');   // "Vem alimentação do QD1" / "Sobe até última laje"
link('gSuve', 'uLu');   // riser from the hall switch to the void lights

const out = {
  source: '016-13 Elétrico, TIPO A (Pavimento Térreo + Pavimento Superior), 1:50',
  note: 'Wall box heights are defaults (outlets 30/110/220, switches 110, panels 150, wall lights 200) and flagged approximate. Circuits 12-14 (air conditioning) run over the roof slab and have no points on the plans, so they are not modelled.',
  boxes,
  conduits,
};
process.stdout.write(JSON.stringify(out, null, 2).replace(/\[\s+([-\d.,\s]+?)\s+\]/g, (m, i) => '[' + i.split(/,\s*/).map((x) => x.trim()).join(', ') + ']') + '\n');
