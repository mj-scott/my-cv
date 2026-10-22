# Melissa J. Scott – CV website

A single-page site built from my CV. Plain HTML, CSS, and JavaScript; no build step.

- `index.html` – page structure
- `styles.css` – design (light and dark mode follow the visitor's system setting)
- `script.js` – hero waveform, talks map, timeline, lists
- `data.js` – all CV content (talks, timeline, publications, teaching, etc.). **Edit this file to update the site.**

External requests: Google Fonts, plus `d3` and `world-atlas` (pinned versions) from jsDelivr for the map. If the map data fails to load, the page falls back to a plain list of talks.

## Preview locally

    python3 -m http.server 8000

then open http://localhost:8000.

## Publish with GitHub Pages

Repository Settings → Pages → deploy from branch, root folder.
