// Generate deterministic color from string
function hashColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 55%, 45%)`;
}

function hashColor2(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 7) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 60%, 30%)`;
}

const costColors: Record<number, [string, string]> = {
  1: ['#6b7280', '#374151'],
  2: ['#10b981', '#065f46'],
  3: ['#3b82f6', '#1e3a5f'],
  4: ['#a855f7', '#581c87'],
  5: ['#f59e0b', '#78350f'],
};

export function heroAvatar(name: string, cost: number): string {
  const [fg, bg] = costColors[cost] ?? costColors[1];
  const ch = name.charAt(0);
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="8" fill="${bg}"/>` +
    `<circle cx="32" cy="24" r="12" fill="${fg}" opacity="0.4"/>` +
    `<rect x="16" y="38" width="32" height="20" rx="8" fill="${fg}" opacity="0.3"/>` +
    `<text x="32" y="38" text-anchor="middle" font-size="24" font-weight="bold" fill="white" font-family="sans-serif">${ch}</text>` +
    `</svg>`
  )}`;
}

export function equipAvatar(name: string): string {
  const c1 = hashColor(name);
  const c2 = hashColor2(name);
  const ch = name.charAt(0);
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">` +
    `<rect width="32" height="32" rx="4" fill="${c2}"/>` +
    `<rect x="4" y="4" width="24" height="24" rx="4" fill="${c1}" opacity="0.5"/>` +
    `<text x="16" y="21" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="sans-serif">${ch}</text>` +
    `</svg>`
  )}`;
}

export function synergyAvatar(name: string): string {
  const c = hashColor(name);
  const ch = name.charAt(0);
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">` +
    `<polygon points="16,2 30,12 26,28 6,28 2,12" fill="${c}" opacity="0.7"/>` +
    `<text x="16" y="21" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="sans-serif">${ch}</text>` +
    `</svg>`
  )}`;
}

export function authorAvatar(name: string): string {
  const c = hashColor(name);
  const ch = name.charAt(0);
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">` +
    `<circle cx="20" cy="20" r="20" fill="${c}"/>` +
    `<text x="20" y="26" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="sans-serif">${ch}</text>` +
    `</svg>`
  )}`;
}
