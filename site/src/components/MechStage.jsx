import React, {useState, useEffect} from 'react';
import {solveFourBar} from './fourbar';

// Black stage, yellow crank, white coupler, red follower. Slider + play.
export default function MechStage({L1 = 200, L2 = 55, L3 = 125, L4 = 85, initial = 40, height = 260}) {
  const [theta, setTheta] = useState(initial);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setTheta((t) => (t + 2) % 360), 50);
    return () => clearInterval(id);
  }, [playing]);
  const W = 400;
  const scale = W / (L1 * 1.25);
  const ox = W * 0.12;
  const oy = height - 30;
  const X = (x) => ox + x * scale;
  const Y = (y) => oy - y * scale;
  const {bx, by, jx, jy} = solveFourBar(L1, L2, L3, L4, theta);
  return (
    <div className="mech-stage">
      <svg viewBox={`0 0 400 ${height}`} role="img" aria-label="Four-bar linkage animation">
        <line x1={X(-30)} y1={oy} x2={X(L1 + 30)} y2={oy} stroke="#2140D4" strokeWidth="2" strokeDasharray="8 6" />
        <line x1={X(0)} y1={Y(0)} x2={X(bx)} y2={Y(by)} stroke="#F2B705" strokeWidth="8" strokeLinecap="round" />
        <line x1={X(bx)} y1={Y(by)} x2={X(jx)} y2={Y(jy)} stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        <line x1={X(jx)} y1={Y(jy)} x2={X(L1)} y2={Y(0)} stroke="#D42A1E" strokeWidth="8" strokeLinecap="round" />
        <circle cx={X(0)} cy={Y(0)} r="8" fill="#2140D4" />
        <circle cx={X(L1)} cy={Y(0)} r="8" fill="#2140D4" />
        <circle cx={X(bx)} cy={Y(by)} r="9" fill="#F2B705" />
      </svg>
      <label>
        Crank <span className="readout">{Math.round(theta)}°</span>{' '}
        <input type="range" min="0" max="360" value={theta} onChange={(e) => setTheta(+e.target.value)} aria-label="Crank angle" />
      </label>
      <div style={{marginTop: 8}}>
        <button className="button button--sm button--secondary" onClick={() => setPlaying((p) => !p)}>
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
