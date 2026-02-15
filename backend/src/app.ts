import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import router from "./router/router";
const app: Application = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Parsers
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "BD-ICONIC Server Is Running",
  });
});

// API routes
app.use("/api/v1", router);

// 404 handler - CORRECT SYNTAX
app.use((req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Error handler
// app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
//   console.error(err);
//   res.status(500).send({
//     success: false,
//     message: "Internal server error",
//   });
// });

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

const server = createServer(app);

export default server;
