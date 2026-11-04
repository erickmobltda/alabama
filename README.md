# Unidade 05 · 3D House Model

Interactive 3D model of a two-floor attached townhouse ("Unidade 05"), rebuilt from its architectural drawings (floor plans for the ground and upper floors, sections Corte AA and Corte BB, scale 1:50). It runs entirely in the browser as a single HTML file, and lets you edit walls, doors, windows and rooms, and lay out electrical junction boxes connected by conduits.

## Features

**View**
- Orbit, zoom and pan the camera (mouse, trackpad or touch), with preset views: 3D, Top and Street.
- Show or hide each floor and the roof slab; toggle room labels.
- Wall-height sliders per floor (Térreo and Superior). Raising the ground floor lifts the whole upper floor.
- "Wall cut" slider to lower all walls and look inside the rooms.
- Approximate measurements are tinted amber, so you can see what was scaled from the drawing rather than read from a dimension.

**Walls and openings**
- Draw new walls on the selected floor, snapping to a 5 cm grid and to existing wall ends (Shift keeps them straight).
- Edit start/end coordinates, length, thickness, height and type (masonry or glass).
- Move and rotate walls with on-screen handles.
- Add, edit and remove doors and windows (width × height / sill, the Brazilian plan notation).
- Mark any wall or opening as approximate.

**Rooms**
- Rename rooms, edit their area label, label position, floor and bounding rectangle.
- Add and delete rooms.

**Electrical**
- Place junction boxes (12 × 12 cm squares) on any wall face; drag them to slide along a wall or move them to another wall.
- Connect boxes with conduits. A box can have zero or any number of conduits.
- Two routing modes: *orthogonal* (on the wall face; between different walls it rises to 20 cm below the ceiling, crosses through the ceiling or slab and drops to the other box) or *straight*.
- Length of every conduit and the total, in metres.
- Clicking a box or conduit in the Electrical list flies the camera to it.

**Data**
- Undo and redo for every change.
- Edits are saved automatically in the browser (`localStorage`, key `unidade05-model-v1`).
- Export and import the model as JSON (copy/paste or load a `.json` file).
- **Markdown brief for AI agents**: one click copies a `.md` describing the coordinate system, floors, stair, rooms, every wall and opening, where each box is (room, wall, face, height, plan position) and each conduit's route and length, plus the full JSON and its schema so an agent can return an edited model.
- Reset to the original plan.

## Keyboard shortcuts

| Key | Action |
|---|---|
| V | Select tool |
| W | Wall tool |
| B | Box tool |
| C | Conduit tool |
| G | Move selected wall |
| R | Rotate selected wall |
| Delete / Backspace | Delete selection |
| Esc | Stop drawing / clear selection |
| Ctrl/Cmd + Z | Undo |
| Ctrl/Cmd + Shift + Z, Ctrl/Cmd + Y | Redo |

## How it is built

- One file, `index.html`: HTML, CSS and vanilla JavaScript, no build step.
- [three.js](https://threejs.org/) **0.147.0** loaded from jsDelivr, with `OrbitControls` (camera) and `TransformControls` (move/rotate handles) from `examples/js`. 0.147 is the last line that ships these as non-module scripts; moving to a newer three.js means switching to ES modules.
- Fonts from Google Fonts (Saira Condensed, Public Sans, JetBrains Mono), with system fallbacks.
- The scene is rebuilt from a single state object on every change; undo/redo stores JSON snapshots of that state.
- Light and dark themes follow the system setting.
- Works offline only if the three.js and font files are cached; otherwise it needs internet access for the CDN.

## Data model

All dimensions are in centimetres.

- **Plan coordinates (x, y):** x runs across the lot, 0 = outer face of the left party wall, 496 = outer face of the right party wall. y runs along the lot, 0 = back line of the house, 1695 = street front; negative y is the back yard. Standing in the street facing the house, +x is to your right.
- **Elevation:** `z` is height above a floor's finished level. Ground floor base is 0; upper floor base = ground floor height + slab.
- **Walls** are centrelines from start to end; thickness is split equally on both sides. Wall Face A is on the side of the normal (−u.y, u.x), where u is the unit vector from start to end; Face B is opposite.

```text
floors[2]   {name, height}
slab        number
walls[]     {id, floor (0|1), name, x1, y1, x2, y2, t, h (null = floor height),
             type ("wall"|"glass"), approx, note,
             openings[] {id, kind ("door"|"window"), offset, width, height, sill, approx, note}}
rooms[]     {id, floor, name, area, x, y, bounds [x0, y0, x1, y1]}
boxes[]     {id, label, wallId, along, z, side (1 = Face A, -1 = Face B)}
conduits[]  {id, a, b, mode ("orthogonal"|"straight")}
```

`offset` on an opening is the distance from the wall start to the opening centre. `along` on a box is the distance from the wall start.

## How the drawings were read

- Lot 496 × 1695 cm; party walls 20 cm, interior walls 10 cm.
- Heights from Corte BB: ground floor 290 cm, slab 12 cm, upper floor 280 cm.
- Door and window sizes come from the plan labels. Their positions along each wall were scaled from the drawing (about ±10 cm).
- Marked approximate: the service area walls (placed from the 3,53 m² area), the barbecue grill block, the glass panels around the light wells, the suite's chamfered walls and door, the balcony railings, the stair and the room bounding rectangles.
- Stair: quarter-turn, 90 cm wide, 17 risers, 28 cm treads.
- Not modelled: floor level steps (−0,70 / −0,65 / +0,60 / +0,65 m), roof parapet, rufo, marquise, façade cladding, door leaves and swing direction.

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing on GitHub Pages

1. Push this repository to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your default branch and the `/ (root)` folder, and save.
4. The site is served at `https://<user>.github.io/<repo>/` after the first deployment finishes.

Saved edits live in each visitor's own browser, so they are not shared between devices or people. Use the JSON export/import to move a layout between them.
