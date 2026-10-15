import React, {useState} from 'react';
import MechStage from './MechStage';
import {grashofType} from './fourbar';

export default function GrashofExplorer() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(3);
  const [c, setC] = useState(12);
  const [d, setD] = useState(5);
  const s = Math.min(a, b, c, d);
  const l = Math.max(a, b, c, d);
  const mid = [a, b, c, d].sort((x, y) => x - y)[1] + [a, b, c, d].sort((x, y) => x - y)[2];
  const slider = (v, set, label) => (
    <label style={{display: 'block', margin: '6px 0'}}>
      {label} <span className="readout">{v}</span>{' '}
      <input type="range" min="1" max="15" step="0.5" value={v} onChange={(e) => set(+e.target.value)} aria-label={label} />
    </label>
  );
  return (
    <div>
      <div className="mech-stage">
        {slider(a, setA, 'Frame a')} {slider(b, setB, 'Crank b')} {slider(c, setC, 'Coupler c')} {slider(d, setD, 'Follower d')}
        <p>
          s + l = {(s + l).toFixed(1)}, p + q = {mid.toFixed(1)} → <strong>{grashofType(a, b, c, d)}</strong>
        </p>
        <p style={{fontSize: '0.9rem'}}>Preset 12 / 3 / 12 / 5 gives crank-rocker (slide water-spray).</p>
      </div>
      <MechStage L1={200} L2={55} L3={125} L4={85} />
    </div>
  );
}
