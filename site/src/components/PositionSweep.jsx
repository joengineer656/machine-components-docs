import React, {useState} from 'react';
import MechStage from './MechStage';

// Slider-crank position: offset L1, crank L2, coupler L3. Sweeps theta2, plots stroke + marks limits.
export default function PositionSweep() {
  const L1 = 10, L2 = 40, L3 = 130;
  const [th, setTh] = useState(40);
  const pts = [];
  for (let a = 0; a <= 360; a += 6) {
    const t = (a * Math.PI) / 180;
    const s = Math.asin(Math.max(-1, Math.min(1, (L1 + L2 * Math.sin(t)) / L3)));
    pts.push(L2 * Math.cos(t) + L3 * Math.cos(s));
  }
  const lo = Math.min(...pts), hi = Math.max(...pts);
  const t = (th * Math.PI) / 180;
  const s3 = Math.asin(Math.max(-1, Math.min(1, (L1 + L2 * Math.sin(t)) / L3)));
  const cur = L2 * Math.cos(t) + L3 * Math.cos(s3);
  const W = 360, H = 120;
  const px = (i) => (i / (pts.length - 1)) * W;
  const py = (v) => H - 10 - ((v - lo) / (hi - lo)) * (H - 20);
  const path = pts.map((v, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  return (
    <div>
      <MechStage L1={200} L2={55} L3={125} L4={85} initial={40} />
      <div className="mech-stage">
        <label>
          Crank θ₂ <span className="readout">{th}°</span>{' '}
          <input type="range" min="0" max="360" value={th} onChange={(e) => setTh(+e.target.value)} aria-label="Crank angle theta 2" />
        </label>
        <svg viewBox={`0 0 ${W} ${H}`} style={{height: 130}} role="img" aria-label="Displacement diagram">
          <path d={path} fill="none" stroke="#F2B705" strokeWidth="3" />
          <circle cx={px((th / 6) % pts.length)} cy={py(cur)} r="6" fill="#D42A1E" />
        </svg>
        <p>
          Slider at <span className="readout">{cur.toFixed(1)}</span> (stroke {(hi - lo).toFixed(1)} between limits). Limits park the follower — read stroke there, not mid-travel.
        </p>
      </div>
    </div>
  );
}
