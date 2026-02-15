// src/router/router.ts
import { Router } from "express";

import authRouter from '../module/auth/auth.index'

const router = Router();
// Routes 
router.use("/auth", authRouter)

// Health endpoint
router.get("/health", (req, res) => {
  res.json({ success: true, timestamp: new Date().toISOString() });
});



export default router;
