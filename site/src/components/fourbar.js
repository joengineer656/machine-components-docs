// Shared four-bar kinematics: O2 at (0,0), O4 at (L1,0). Open configuration.
export function solveFourBar(L1, L2, L3, L4, thetaDeg) {
  const t = (thetaDeg * Math.PI) / 180;
  const bx = L2 * Math.cos(t);
  const by = L2 * Math.sin(t);
  const dx = L1 - bx;
  const dy = 0 - by;
  let dd = Math.hypot(dx, dy);
  const maxReach = L3 + L4 - 1e-6;
  const minReach = Math.abs(L3 - L4) + 1e-6;
  dd = Math.max(minReach, Math.min(maxReach, dd));
  const ang = Math.atan2(dy, dx);
  const cosG = Math.max(-1, Math.min(1, (L3 * L3 + dd * dd - L4 * L4) / (2 * L3 * dd)));
  const g = Math.acos(cosG);
  const jx = bx + L3 * Math.cos(ang - g);
  const jy = by + L3 * Math.sin(ang - g);
  return {bx, by, jx, jy};
}

export function grashofType(a, b, c, d) {
  const s = Math.min(a, b, c, d);
  const l = Math.max(a, b, c, d);
  const rest = [a, b, c, d].sort((x, y) => x - y);
  const mid = rest[1] + rest[2];
  if (s + l < mid) {
    if (s === a) return 'Double crank (shortest is frame)';
    if (s === b || s === d) return 'Crank-rocker (shortest is a side)';
    return 'Double rocker (shortest is coupler)';
  }
  if (Math.abs(s + l - mid) < 1e-9) return 'Change point';
  return 'Triple rocker';
}
