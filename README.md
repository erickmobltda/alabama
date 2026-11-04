# Unidade 05 · 3D House Model

Interactive 3D model of a two-floor attached townhouse ("Unidade 05"), rebuilt from its architectural drawings (floor plans for the ground and upper floors, sections Corte AA and Corte BB, scale 1:50). Edit walls, doors, windows and rooms, and lay out electrical junction boxes connected by conduits. All model data lives in `house.json`, so every change can be committed and reviewed in git.

## Quick start

Requires [Node.js](https://nodejs.org/) 18 or newer. No packages to install.

```bash
node server.js        # or: npm start
```

Open http://127.0.0.1:8000. Every edit is written to `house.json` (and the AI brief `house.md`) within about half a second. Then:

```bash
git add house.json house.md && git commit -m "Update electrical layout"
```

Use another port with `PORT=9000 node server.js`.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: HTML, CSS and JavaScript. Contains no house data. |
| `house.json` | The model: floors, slabs, stair, rooms, walls with openings, junction boxes, conduits. Source of truth. |
| `house.md` | Generated brief for AI agents, rewritten on every save. Created on the first edit. |
| `server.js` | Zero-dependency local server: serves the folder and saves `house.json` / `house.md`. |
| `package.json` | Only provides `npm start`. |

## Where the page saves

The page detects how it was opened and shows the result under the title:

| Opened via | Loads from | Saves to |
|---|---|---|
| `node server.js` | `house.json` | `house.json` + `house.md` (green dot) |
| GitHub Pages or any static host | `house.json` | This browser only (blue dot). Use **Data → Download house.json** and commit it to keep changes. |
| Double-clicking `index.html` (`file://`) | Nothing: browsers block reading local files from a page | This browser only. Use the server instead. |

If you edit `house.json` by hand or switch branches while the page is open, use **Data → Reload from house.json**.

The JSON is formatted with one property per line and coordinate pairs on one line, so diffs show exactly which wall, box or conduit changed.

## Features

**View**
- Orbit, zoom and pan the camera (mouse, trackpad or touch), with preset views: 3D, Top and Street.
- Show or hide each floor and the roof slab; toggle labels.
- Wall-height sliders per floor. Raising the ground floor lifts the whole upper floor.
- "Wall cut" slider to lower all walls and look inside.
- Approximate measurements are tinted amber.

**Walls and openings**
- Draw walls on the selected floor, snapping to a 5 cm grid and to wall ends (Shift keeps them straight).
- Edit coordinates, length, thickness, height and type (masonry or glass).
- Move and rotate walls with on-screen handles.
- Add, edit and remove doors and windows (width × height / sill, the Brazilian plan notation).

**Rooms**
- Rename rooms and edit their area label, label position, floor and bounding rectangle; add and delete rooms.
- Picking a room in the Rooms tab flies the camera to it.

**Electrical**
- Junction boxes (12 × 12 cm squares) on any wall face; drag them along a wall or onto another wall.
- Conduits between boxes; a box can have zero or many. Routing is *orthogonal* (on the wall face, and through the ceiling between different walls) or *straight*.
- Length per conduit and in total.
- Picking a box or conduit in the Electrical tab flies the camera to it.

**Data**
- Undo and redo for every change.
- Markdown brief for AI agents (copy from the Data tab, or `house.md` when using the server).
- JSON import and export.

## Keyboard shortcuts

| Key | Action |
|---|---|
| V / W / B / C | Select / Wall / Box / Conduit tool |
| G / R | Move / rotate selected wall |
| Delete, Backspace | Delete selection |
| Esc | Stop drawing, clear selection |
| Ctrl/Cmd + Z | Undo |
| Ctrl/Cmd + Shift + Z, Ctrl/Cmd + Y | Redo |

## Working with AI agents

Point the agent at `house.md` to understand the house: coordinate system, floors, stair, rooms with bounds, every wall and opening, each box's room, wall, face and position, and each conduit's route and length. To make changes, the agent edits `house.json` following the schema below; reload the page to see them.

## Data model

All dimensions are in centimetres.

- **Plan coordinates (x, y):** x runs across the lot, 0 = outer face of the left party wall, 496 = outer face of the right one. y runs along the lot, 0 = back line of the house, 1695 = street front; negative y is the back yard. Standing in the street facing the house, +x is to your right.
- **Elevation:** `z` is height above a floor's finished level. Ground floor base is 0; upper floor base = ground floor height + slab.
- **Walls** are centrelines from start to end; thickness is split equally on both sides. Face A is on the side of the normal (−u.y, u.x), where u is the unit vector from start to end; Face B is opposite.

```text
version     2
floors[2]   {name, height}
slab        upper-floor slab thickness
slabs       {ground: {outer, holes, top, thickness}, upper: {outer, holes}, roof: {outer, holes}}
            outer = [[x, y], ...]   holes = [[[x, y], ...], ...]
stair       {width, tread, risers, approx,
             flight1: {x0, x1, yStart, treads}, landing: {x0, x1, y0, y1}, flight2: {y0, y1, xStart, treads}}
rooms[]     {id, floor (0|1), name, area, x, y, bounds [x0, y0, x1, y1]}
walls[]     {id, floor (0|1), name, x1, y1, x2, y2, t, h (null = floor height),
             type ("wall"|"glass"), approx, note,
             openings[] {id, kind ("door"|"window"), offset, width, height, sill, approx, note}}
boxes[]     {id, label, wallId, along, z, side (1 = Face A, -1 = Face B)}
conduits[]  {id, a, b, mode ("orthogonal"|"straight")}
```

`offset` on an opening is the distance from the wall start to the opening centre; `along` on a box is the distance from the wall start. Slabs and the stair are only editable in `house.json`.

## How the drawings were read

- Lot 496 × 1695 cm; party walls 20 cm, interior walls 10 cm.
- Heights from Corte BB: ground floor 290 cm, slab 12 cm, upper floor 280 cm.
- Door and window sizes come from the plan labels; their positions along each wall were scaled from the drawing (about ±10 cm).
- Marked approximate: the service area walls (placed from the 3,53 m² area), the barbecue grill block, the glass panels around the light wells, the suite's chamfered walls and door, the balcony railings, the stair and the room bounding rectangles.
- Not modelled: floor level steps (−0,70 / −0,65 / +0,60 / +0,65 m), roof parapet, rufo, marquise, façade cladding, door leaves and swing direction.
- The three junction boxes labelled "(example)" are samples; remove them from the Electrical tab.

## How it is built

- One HTML file with vanilla JavaScript, no build step.
- [three.js](https://threejs.org/) 0.147.0 from jsDelivr, with `OrbitControls` and `TransformControls` from `examples/js`. 0.147 is the last line that ships these as non-module scripts; moving to a newer three.js means switching to ES modules.
- Fonts from Google Fonts with system fallbacks. Needs internet access for the CDN files.
- The scene is rebuilt from the state object on every change; undo and redo store JSON snapshots.
- `server.js` listens on 127.0.0.1 only, refuses cross-origin saves, validates the JSON before writing, and writes atomically (temp file, then rename).

## Publishing on GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your default branch and the `/ (root)` folder, and save.
4. The site is served at `https://<user>.github.io/<repo>/` once the deployment finishes.

The published site reads the committed `house.json` and is read-only: edits made there stay in the visitor's browser.
