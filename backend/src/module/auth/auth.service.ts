import prisma from "../../utils/prisma";
import { hashPassword, comparePassword } from "../../utils/password";
import {
  createAccessToken,
  createRefreshToken,
  TokenPayload,
} from "../../utils/token.utils";
import { RegisterInput, LoginInput } from "./auth.validation";

export const registerUser = async (input: RegisterInput) => {
  // Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPassword = await hashPassword(input.password);

  // Create user
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email,
      password: hashedPassword,
      nid: input.nid,
      phone: input.phone,
      imageId: input.imageId || null,
      imageUrl: input.imageUrl || null,
      terms: input.terms,
      role: "USER", // default role
    },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      role: true,
    },
  });

  // Create tokens
  const payload: TokenPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    imageUrl: user.imageUrl,
    role: user.role,
  };

  const accessToken = createAccessToken(payload);
  const refreshToken = createRefreshToken(payload);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
};

export const loginUser = async (input: LoginInput) => {
  // Find user
  const user = await prisma.user.findUnique({
    where: { email: input.email },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      role: true,
      password: true,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Check password
  const isValidPassword = await comparePassword(input.password, user.password);
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  // Create tokens
  const payload: TokenPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
    imageUrl: user.email,
    role: user.role,
  };

  const accessToken = createAccessToken(payload);
  const refreshToken = createRefreshToken(payload);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
};
