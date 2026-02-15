// src/utils/token.utils.ts
import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.AUTH_ACCESS_SECRET!;
const REFRESH_SECRET = process.env.AUTH_REFRESH_SECRET!;

export interface TokenPayload {
  id: number;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
}

export const createAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "30m" });
};

export const createRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "1d" });
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, ACCESS_SECRET) as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  try {
    return jwt.verify(token, REFRESH_SECRET) as TokenPayload;
  } catch (error) {
    console.error(" REFRESH TOKEN VERIFY FAILED:", error);
    throw new Error("Invalid refresh token");
  }
};
