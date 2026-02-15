// src/middleware/verifyJwt.ts
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import createError from "http-errors";
import { TokenPayload } from "../utils/token.utils";

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export const verifyJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return next(createError.Unauthorized("Access denied. No token provided"));
    }

    const verified = jwt.verify(
      token,
      process.env.AUTH_ACCESS_SECRET!
    ) as TokenPayload;
    
    req.user = verified;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    next(
      createError.Unauthorized("Access denied. Invalid token")
    );
  }
};
