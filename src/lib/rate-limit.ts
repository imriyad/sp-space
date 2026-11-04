type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

/** Simple in-memory rate limit (per server instance). */
export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000,
): { ok: boolean; remaining: number } {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0 };
  }

  existing.count += 1;
  store.set(key, existing);
  return { ok: true, remaining: limit - existing.count };
}
