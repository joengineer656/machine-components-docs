import React, {useState} from 'react';
import MechStage from './MechStage';

const CASES = [
  {key: 'frame', label: 'Fix frame → crank-rocker'},
  {key: 'crank', label: 'Fix crank → double crank feel'},
  {key: 'coupler', label: 'Fix coupler → double rocker feel'},
  {key: 'follower', label: 'Fix follower → slider-like rocker'},
];

export default function InversionToggle() {
  const [mode, setMode] = useState('frame');
  return (
    <div>
      <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', margin: '10px 0'}}>
        {CASES.map((c) => (
          <button
            key={c.key}
            className={mode === c.key ? 'button button--sm button--primary' : 'button button--sm button--secondary'}
            onClick={() => setMode(c.key)}>
            {c.label}
          </button>
        ))}
      </div>
      <p style={{fontSize: '0.95rem'}}>
        Same chain, different fixed link. Currently: <strong>{CASES.find((c) => c.key === mode).label}</strong> — watch which links can turn fully.
      </p>
      <MechStage key={mode} L1={200} L2={55} L3={125} L4={85} />
    </div>
  );
}
