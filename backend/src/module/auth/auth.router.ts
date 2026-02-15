// src/module/auth/auth.router.ts
import { Router } from "express";
import {
  verifyRegister,
  verifyLogin,
} from "./auth.validation";
import {
  register,
  login,
  refreshToken,
  logout,
  getProfile
} from "./auth.controller";


import { verifyJwt } from './../../middleware/verifyJwt';

const router = Router();

router.post("/register", verifyRegister, register);
router.post("/login", verifyLogin, login);
router.post("/refresh-token", refreshToken);
router.post("/logout", verifyJwt, logout);

router.get("/profile", verifyJwt, getProfile)
export default router;
