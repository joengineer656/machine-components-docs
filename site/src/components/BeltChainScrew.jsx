import React, {useState} from 'react';

export default function BeltChainScrew() {
  const [D1, setD1] = useState(4.5);
  const [D2, setD2] = useState(8);
  const [C, setC] = useState(20);
  const [rpm, setRpm] = useState(1750);
  const [tpi, setTpi] = useState(13);
  const L = 2 * C + (Math.PI / 2) * (D2 + D1) + ((D2 - D1) * (D2 - D1)) / (4 * C);
  const n2 = (rpm * D1) / D2;
  const vb = (Math.PI * D1 * rpm) / 12;
  const vScrew = rpm / tpi;
  const num = (v, set, label, min, max, step) => (
    <label style={{display: 'block', margin: '6px 0'}}>
      {label} <span className="readout">{v}</span>{' '}
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} aria-label={label} />
    </label>
  );
  const band = vb >= 1000 && vb <= 6500 ? 'inside ideal band' : 'OUTSIDE ideal band';
  return (
    <div className="mech-stage">
      {num(D1, setD1, 'Driver sheave D₁ (in)', 2, 12, 0.5)}
      {num(D2, setD2, 'Driven sheave D₂ (in)', 2, 16, 0.5)}
      {num(C, setC, 'Centre C (in)', 8, 40, 0.5)}
      {num(rpm, setRpm, 'Motor (rpm)', 500, 3500, 10)}
      {num(tpi, setTpi, 'Screw threads/in', 8, 20, 1)}
      <svg viewBox="0 0 340 130" role="img" aria-label="Open belt drive">
        <circle cx={80} cy={65} r={20 + D1 * 2} fill="none" stroke="#F2B705" strokeWidth="6" />
        <circle cx={250} cy={65} r={20 + D2 * 2} fill="none" stroke="#D42A1E" strokeWidth="6" />
        <line x1={80} y1={65 - (20 + D1 * 2)} x2={250} y2={65 - (20 + D2 * 2)} stroke="#ffffff" strokeWidth="4" />
        <line x1={80} y1={65 + (20 + D1 * 2)} x2={250} y2={65 + (20 + D2 * 2)} stroke="#ffffff" strokeWidth="4" />
      </svg>
      <p>
        n₂ = <span className="readout">{n2.toFixed(0)} rpm</span>, L ≈ {L.toFixed(1)} in, v_b = <span className="readout">{vb.toFixed(0)} fpm</span> ({band}). Screw v = <span className="readout">{vScrew.toFixed(1)} in/min</span> (check ½-13 @1200 → 92.3).
      </p>
    </div>
  );
}
