import React from 'react';

// Themed geometric figure per chapter. Real-lab photos slot in later via `photo` prop.
// Palette: paper bg, ink lines, red/blue/yellow solids. radius 0.
const CAPTIONS = {
  mechanisms: 'Four-bar sketch: yellow crank, white coupler, red follower. Photo slot: wiper linkage, scissors, door hinge.',
  vectors: 'Tip-to-tail triangle: yellow A, white B, red resultant R. Redrawn from slide method.',
  position: 'Limiting positions park the follower at stroke ends. Redrawn from slide method.',
  synthesis: 'Advance arc (yellow, 180+β) versus return arc (red, 180−β). Photo slot: shaper, power hacksaw.',
  velocity: 'Velocity polygon from a pole point. Redrawn from slide method.',
  acceleration: 'Normal (blue, to centre) stacked with tangential (yellow). Redrawn from slide method.',
  cams: 'Rise–dwell–fall timing blocks. Photo slot: camshaft, engine valve.',
  gears: 'Meshing pitch circles with base circle dashed. Photo slot: steering rack, guitar worm key, hand drill bevel.',
  beltdrive: 'Open belt on two sheaves. Photo slot: serpentine belt, bike chain.',
  screw: 'Thread pitch p per revolution. Photo slot: bench vise, car jack, CNC lead screw.',
  forces: 'Wrench moment M = F·d about the nut. Photo slot: pliers, door push point.',
  intro: 'Circles turn, bars push: the whole course in one sketch.',
};

export default function ChapterArt({variant = 'intro', photo = null}) {
  return (
    <figure style={{margin: '1.2rem 0', border: '3px solid #111', background: '#fff'}}>
      <svg viewBox="0 0 360 140" style={{width: '100%', height: 140, display: 'block'}} role="img" aria-label={CAPTIONS[variant] || variant}>
        <rect x="0" y="0" width="360" height="140" fill="#FAFAF6" />
        <circle cx="70" cy="70" r="34" fill="#D42A1E" />
        <rect x="120" y="36" width="120" height="24" fill="#2140D4" />
        <rect x="120" y="80" width="120" height="24" fill="#111111" />
        <circle cx="290" cy="70" r="34" fill="#F2B705" />
        <line x1="104" y1="70" x2="120" y2="70" stroke="#111" strokeWidth="5" />
        <line x1="240" y1="70" x2="256" y2="70" stroke="#111" strokeWidth="5" />
      </svg>
      <figcaption style={{fontSize: '0.85rem', padding: '8px 12px', borderTop: '3px solid #111', background: '#FAFAF6'}}>
        {CAPTIONS[variant] || variant}
        {photo ? ` Photo: ${photo}.` : ' Photo needed: self-shot lab hardware preferred.'}
      </figcaption>
    </figure>
  );
}
