/**
 * A tasteful, low-density starfield for the hero. Stars are painted with a
 * single element's `box-shadow` (no canvas). Coordinates come from a seeded
 * generator so the server and client render identical markup — no randomness at
 * runtime, no hydration mismatch. Density is kept sparse near the avatar zone.
 */

const FIELD_WIDTH = 1600;
const FIELD_HEIGHT = 600;

function seededRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };
}

function buildStars(count: number, seed: number, alphaMin: number): string {
  const random = seededRandom(seed);
  const shadows: string[] = [];

  while (shadows.length < count) {
    const x = Math.round(random() * FIELD_WIDTH);
    const y = Math.round(random() * FIELD_HEIGHT);
    const alpha = random();

    // Keep the region behind the centered avatar (bottom-center) clear.
    const dx = (x - FIELD_WIDTH / 2) * 0.7;
    const dy = y - FIELD_HEIGHT * 0.95;
    if (Math.sqrt(dx * dx + dy * dy) < 180) continue;

    const opacity = (alphaMin + alpha * (0.55 - alphaMin)).toFixed(2);
    shadows.push(`${x}px ${y}px 0 0 rgba(255,255,255,${opacity})`);
  }

  return shadows.join(", ");
}

const SMALL_STARS = buildStars(110, 20260726, 0.18);
const BRIGHT_STARS = buildStars(6, 424242, 0.45);

export default function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-0 top-0 h-px w-px star-twinkle"
        style={{ boxShadow: SMALL_STARS }}
      />
      <div
        className="absolute left-0 top-0 h-[2px] w-[2px] rounded-full"
        style={{ boxShadow: BRIGHT_STARS }}
      />

      {/* A single faint orbital arc, the modern nod to "Launch Station". */}
      <div className="absolute -bottom-[920px] left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border border-white/[0.07]" />

      {/* One soft, low-opacity orange glow — the only warm accent in the hero. */}
      <div className="absolute -top-24 right-[12%] h-72 w-72 rounded-full bg-[rgba(255,72,0,0.08)] blur-3xl" />
    </div>
  );
}
