import crypto from "node:crypto";

export function verifyLegacyPassword(password: string, hash: string, salt: string): boolean {
  // passport-local-mongoose's default PBKDF2 settings used by the original app.
  const derived = crypto.pbkdf2Sync(password, Buffer.from(salt, "base64"), 25000, 512, "sha256").toString("base64");
  return crypto.timingSafeEqual(Buffer.from(derived), Buffer.from(hash));
}

export function hashLegacyPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("base64");
  const hash = crypto.pbkdf2Sync(password, Buffer.from(salt, "base64"), 25000, 512, "sha256").toString("base64");
  return { hash, salt };
}
