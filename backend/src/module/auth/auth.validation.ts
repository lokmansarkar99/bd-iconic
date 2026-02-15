// src/module/auth/auth.validation.ts
import { z } from "zod";
import { Request, Response, NextFunction } from "express";

// Register schema
export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password cannot exceed 32 characters"),
  nid: z.string().min(1, "NID is required"),
  phone: z.string().min(10, "Phone number too short"),
  terms: z.boolean().refine((val) => val === true, "Must accept terms"),
  imageId: z.string().optional(),
  imageUrl: z.string().optional(),
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password required"),
});


export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

// Validation middleware
export const verifyRegister = (req: Request, res: Response, next: NextFunction) => {
  try {
    registerSchema.parse(req.body);
    next();
  } catch (error: any) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Validation failed",
      errors: error.errors,
    });
  }
};

export const verifyLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error: any) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Validation failed",
      errors: error.errors,
    });
  }
};
