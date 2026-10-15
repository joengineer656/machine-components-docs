import React, {useState} from 'react';

export default function GearStudio() {
  const [N1, setN1] = useState(18);
  const [N2, setN2] = useState(42);
  const [Pd, setPd] = useState(12);
  const [phi, setPhi] = useState(20);
  const d1 = N1 / Pd, d2 = N2 / Pd;
  const num = (v, set, label, min, max, step = 1) => (
    <label style={{display: 'block', margin: '6px 0'}}>
      {label} <span className="readout">{v}</span>{' '}
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} aria-label={label} />
    </label>
  );
  const r1 = 60, r2 = (60 * N2) / Math.max(1, N1);
  return (
    <div className="mech-stage">
      {num(N1, setN1, 'Pinion teeth N₁', 10, 60)}
      {num(N2, setN2, 'Gear teeth N₂', 10, 80)}
      {num(Pd, setPd, 'Diametral pitch Pd', 4, 16)}
      {num(phi, setPhi, 'Pressure angle φ°', 14.5, 25, 0.5)}
      <svg viewBox="0 0 340 170" role="img" aria-label="Meshing gear pair">
        <circle cx={100} cy={85} r={r1} fill="none" stroke="#F2B705" strokeWidth="6" />
        <circle cx={100 + r1 + r2} cy={85} r={r2} fill="none" stroke="#D42A1E" strokeWidth="6" />
        <circle cx={100} cy={85} r={r1 * Math.cos((phi * Math.PI) / 180)} fill="none" stroke="#2140D4" strokeWidth="2" strokeDasharray="5 4" />
      </svg>
      <p>
        d₁ = <span className="readout">{d1.toFixed(3)} in</span>, d₂ = {d2.toFixed(3)} in, c = {((d1 + d2) / 2).toFixed(3)} in, VR = {(N2 / N1).toFixed(2)}, d_b1 = {(d1 * Math.cos((phi * Math.PI) / 180)).toFixed(3)} in
      </p>
      <p style={{fontSize: '0.9rem'}}>Check: 14/42T at Pd 4 → c = 7.0 in. Train preset 24/48/24/48/15/35 → TV = 9.33, 1200 rpm cw → 128.6 ccw.</p>
    </div>
  );
}
