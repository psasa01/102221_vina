import crypto from "node:crypto";

const COOKIE = "vina_session";
const secret = process.env.SESSION_SECRET || "change-this-session-secret";

function sign(value: string) {
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

export function createSession(userId: string) {
  const payload = `${userId}.${Date.now() + 1000 * 60 * 60 * 24 * 30}`;
  return `${Buffer.from(payload).toString("base64url")}.${sign(payload)}`;
}

export function readSession(value?: string | null) {
  if (!value) return null;
  const [encoded, signature] = value.split(".");
  if (!encoded || !signature) return null;
  try {
    const payload = Buffer.from(encoded, "base64url").toString("utf8");
    const expected = sign(payload);
    if (signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
    const [userId, expires] = payload.split(".");
    if (!userId || Number(expires) < Date.now()) return null;
    return userId;
  } catch { return null; }
}

export const sessionCookie = COOKIE;
