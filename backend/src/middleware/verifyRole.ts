// src/middleware/verifyRole.ts
import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { TokenPayload } from "../utils/token.utils";

export const verifyRole = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as TokenPayload;
    
    if (!user || !allowedRoles.includes(user.role)) {
      return next(
        createError.Forbidden(
          `Access denied. Required roles: ${allowedRoles.join(", ")}`
        )
      );
    }
    
    next();
  };
};
