import React, {useState} from 'react';

export default function QuickReturn() {
  const [Q, setQ] = useState(1.25);
  const beta = (180 * (Q - 1)) / (Q + 1);
  const adv = 180 + beta, ret = 180 - beta;
  const arc = (cx, cy, r, a0, a1, color) => {
    const p = (a) => `${cx + r * Math.cos((a * Math.PI) / 180)},${cy - r * Math.sin((a * Math.PI) / 180)}`;
    return <path d={`M${p(a0)} A${r},${r} 0 ${(a1 - a0) > 180 ? 1 : 0},1 ${p(a1)}`} fill="none" stroke={color} strokeWidth="10" />;
  };
  return (
    <div className="mech-stage">
      <label>
        Time ratio Q <span className="readout">{Q.toFixed(2)}</span>{' '}
        <input type="range" min="1" max="2" step="0.05" value={Q} onChange={(e) => setQ(+e.target.value)} aria-label="Quick return ratio" />
      </label>
      <svg viewBox="0 0 340 200" role="img" aria-label="Advance versus return crank arcs">
        {arc(170, 150, 100, 0, adv, '#F2B705')}
        {arc(170, 150, 70, 0, ret, '#D42A1E')}
        <circle cx={170} cy={150} r="7" fill="#2140D4" />
      </svg>
      <p>
        β = <span className="readout">{beta.toFixed(1)}°</span> — advance sweeps {adv.toFixed(1)}° (yellow), return {ret.toFixed(1)}° (red). Checks: Q 1.25 → 20.0°, Q 1.75 → 49.1°.
      </p>
    </div>
  );
}
