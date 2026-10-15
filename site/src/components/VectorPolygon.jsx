import React, {useState} from 'react';

export default function VectorPolygon() {
  const [A, setA] = useState(46);
  const [B, setB] = useState(23);
  const [th, setTh] = useState(95);
  const rad = (th * Math.PI) / 180;
  const R = Math.sqrt(A * A + B * B - 2 * A * B * Math.cos(rad));
  const beta = (Math.asin(Math.min(1, ((B / R) * Math.sin(rad)))) * 180) / Math.PI;
  const num = (v, set, label, min, max, step = 1) => (
    <label style={{display: 'block', margin: '6px 0'}}>
      {label} <span className="readout">{v}</span>{' '}
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} aria-label={label} />
    </label>
  );
  // Tip-to-tail sketch scaled to 300px width
  const k = 280 / (A + B);
  const ax = A * k, ay = 0;
  const bx = ax + B * k * Math.cos(Math.PI - rad);
  const by = ay - B * k * Math.sin(Math.PI - rad);
  return (
    <div className="mech-stage">
      {num(A, setA, 'Vector A magnitude', 5, 80)}
      {num(B, setB, 'Vector B magnitude', 5, 80)}
      {num(th, setTh, 'Interior angle θ°', 10, 170)}
      <svg viewBox="0 0 340 180" role="img" aria-label="Vector tip-to-tail polygon">
        <line x1={20} y1={140} x2={20 + ax} y2={140 + ay} stroke="#F2B705" strokeWidth="5" />
        <line x1={20 + ax} y1={140 + ay} x2={20 + bx} y2={140 + by} stroke="#ffffff" strokeWidth="5" />
        <line x1={20} y1={140} x2={20 + bx} y2={140 + by} stroke="#D42A1E" strokeWidth="5" strokeDasharray="7 5" />
      </svg>
      <p>
        R = <span className="readout">{R.toFixed(2)}</span> (check: 46 / 23 / 95° → 53.19), β = {beta.toFixed(1)}°
      </p>
    </div>
  );
}
