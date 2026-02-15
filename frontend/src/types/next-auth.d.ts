import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      imageUrl?: string | null; // add image
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    accessToken?: string;
    imageUrl?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    role: string;
    imageUrl?: string | null;
  }
}
