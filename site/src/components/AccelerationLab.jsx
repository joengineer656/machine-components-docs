import React, {useState} from 'react';

export default function AccelerationLab() {
  const [v, setV] = useState(72);
  const [r, setR] = useState(1.0);
  const [alpha, setAlpha] = useState(250);
  const an = (v * v) / r;
  const at = r * alpha;
  const num = (v, set, label, min, max, step) => (
    <label style={{display: 'block', margin: '6px 0'}}>
      {label} <span className="readout">{v}</span>{' '}
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} aria-label={label} />
    </label>
  );
  const k = 220 / Math.max(an, at, 1);
  return (
    <div className="mech-stage">
      {num(v, setV, 'Speed v (in/s)', 10, 120, 1)}
      {num(r, setR, 'Radius r (in)', 0.5, 3, 0.1)}
      {num(alpha, setAlpha, 'Angular accel α (rad/s²)', 0, 500, 5)}
      <svg viewBox="0 0 340 150" role="img" aria-label="Normal versus tangential acceleration">
        <line x1={60} y1={130} x2={60} y2={130 - Math.max(8, an * k)} stroke="#2140D4" strokeWidth="8" />
        <line x1={60} y1={130 - Math.max(8, an * k)} x2={60 + Math.max(8, at * k)} y2={130 - Math.max(8, an * k)} stroke="#F2B705" strokeWidth="8" />
        <circle cx={60} cy={130} r="7" fill="#D42A1E" />
      </svg>
      <p>
        aⁿ = v²/r = <span className="readout">{an.toFixed(0)} in/s²</span> (check: 72, r 1.0 → 5184), aᵗ = rα = <span className="readout">{at.toFixed(0)} in/s²</span>
      </p>
    </div>
  );
}
