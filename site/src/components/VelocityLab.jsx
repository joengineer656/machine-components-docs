import React, {useState} from 'react';

export default function VelocityLab() {
  const [rpm, setRpm] = useState(120);
  const [r, setR] = useState(0.15);
  const w = (rpm * 2 * Math.PI) / 60;
  const v = r * w;
  const area = (Math.PI / 4) * 1.0 * 1.0;
  const flow = v * 39.3701 * area; // demo scaling to in^3/s order
  const num = (v, set, label, min, max, step) => (
    <label style={{display: 'block', margin: '6px 0'}}>
      {label} <span className="readout">{v}</span>{' '}
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} aria-label={label} />
    </label>
  );
  return (
    <div className="mech-stage">
      {num(rpm, setRpm, 'Driver speed (rpm)', 10, 1000, 5)}
      {num(r, setR, 'Radius r (m)', 0.05, 0.5, 0.01)}
      <svg viewBox="0 0 340 150" role="img" aria-label="Velocity vector perpendicular to radius">
        <line x1={60} y1={120} x2={60} y2={120 - r * 200} stroke="#F2B705" strokeWidth="8" />
        <line x1={60} y1={120 - r * 200} x2={60 + Math.min(220, v * 90)} y2={120 - r * 200} stroke="#D42A1E" strokeWidth="6" />
        <circle cx={60} cy={120} r="7" fill="#2140D4" />
      </svg>
      <p>
        ω = <span className="readout">{w.toFixed(2)} rad/s</span>, v = rω = <span className="readout">{v.toFixed(3)} m/s</span>
      </p>
      <p style={{fontSize: '0.9rem'}}>Check: 150 mm at 120 rpm → v = 1.885 m/s. Pump flow scales as v × piston area.</p>
    </div>
  );
}
