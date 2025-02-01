import crypto from "crypto";

export const generateHash = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};
