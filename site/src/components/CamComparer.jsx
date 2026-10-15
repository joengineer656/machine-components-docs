import React, {useState} from 'react';

const SCHEMES = {
  constV: {label: 'Constant velocity', kv: 1.0, ka: '∞'},
  constA: {label: 'Constant acceleration', kv: 2.0, ka: 4.0},
  harmonic: {label: 'Harmonic', kv: 1.571, ka: 4.945},
  cycloidal: {label: 'Cycloidal', kv: 2.0, ka: 6.283},
};

function disp(scheme, H, T, t) {
  const u = Math.max(0, Math.min(1, t / T));
  if (scheme === 'constV') return H * u;
  if (scheme === 'constA') return u < 0.5 ? 2 * H * u * u : H - 2 * H * (1 - u) * (1 - u);
  if (scheme === 'harmonic') return (H / 2) * (1 - Math.cos(Math.PI * u));
  return H * (u - (1 / (2 * Math.PI)) * Math.sin(2 * Math.PI * u));
}

export default function CamComparer() {
  const [scheme, setScheme] = useState('harmonic');
  const [H, setH] = useState(13);
  const [T, setT] = useState(3);
  const N = 60;
  const pts = Array.from({length: N + 1}, (_, i) => disp(scheme, H, T, (i / N) * T));
  const W = 340, Hg = 110;
  const path = pts.map((v, i) => `${i ? 'L' : 'M'}${((i / N) * W).toFixed(1)},${(Hg - 8 - (v / H) * (Hg - 16)).toFixed(1)}`).join(' ');
  const s = SCHEMES[scheme];
  return (
    <div className="mech-stage">
      <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8}}>
        {Object.entries(SCHEMES).map(([k, v]) => (
          <button key={k} className={scheme === k ? 'button button--sm button--primary' : 'button button--sm button--secondary'} onClick={() => setScheme(k)}>
            {v.label}
          </button>
        ))}
      </div>
      <label style={{display: 'block', margin: '6px 0'}}>
        Rise H <span className="readout">{H}</span> <input type="range" min="2" max="50" value={H} onChange={(e) => setH(+e.target.value)} aria-label="Rise height" />
      </label>
      <label style={{display: 'block', margin: '6px 0'}}>
        Interval T (s) <span className="readout">{T}</span> <input type="range" min="0.5" max="5" step="0.1" value={T} onChange={(e) => setT(+e.target.value)} aria-label="Interval time" />
      </label>
      <svg viewBox={`0 0 ${W} ${Hg}`} role="img" aria-label="Follower displacement curve">
        <path d={path} fill="none" stroke="#F2B705" strokeWidth="3" />
      </svg>
      <p>
        Peak v ≈ <span className="readout">{((s.kv * H) / T).toFixed(2)}/s</span>, peak a ≈ {s.ka === '∞' ? '∞ (impact)' : <span className="readout">{((s.ka * H) / (T * T)).toFixed(2)}/s²</span>}
      </p>
    </div>
  );
}
