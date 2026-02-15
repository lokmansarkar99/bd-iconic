// import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "./auth.service";
import { RegisterInput, LoginInput } from "./auth.validation";
import tokenUtils = require("../../utils/token.utils");
import createAccessToken = require("../../utils/token.utils");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 24 * 60 * 60 * 1000, // 1 day
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input: RegisterInput = req.body;
    const { user, accessToken, refreshToken } = await registerUser(input);

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User registered successfully",
      data: user,
      accessToken,
    });
  } catch (error: any) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input: LoginInput = req.body;
    const { user, accessToken, refreshToken } = await loginUser(input);

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Login successful",
      data: user,
      accessToken,
    });
  } catch (error: any) {
    next(error);
  }
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) throw createError.Unauthorized("Refresh token missing");

    const payload = tokenUtils.verifyRefreshToken(token);

    // Create new access token
    const accessToken = createAccessToken({
      id: payload.id,
      name: payload.name,
      email: payload.email,
      imageUrl: payload.imageUrl,
      role: payload.role,
    });

    res.status(200).json({
      success: true,
      accessToken,
    });
  } catch (error) {
    next(createError.Unauthorized("Invalid refresh token"));
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.clearCookie("refreshToken");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user!;
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl,
        role: user.role,
      },
    });
  } catch (error: any) {
    next(error);
  }
};
