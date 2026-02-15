"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm border border-red-100">
          {error}
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email address
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <span 
          onClick={() => setEye(!eye)} 
          className="absolute right-3 top-10 cursor-pointer z-10"
        >
          {eye ? <FaRegEye className="text-gray-400" /> : <FaRegEyeSlash className="text-gray-400" />}
        </span>
        <input
          required
          type={eye ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Enter your password"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-fuchsia-500 focus:ring-fuchsia-500"
          />
          Remember me
        </label>

        <Link href="#" className="text-fuchsia-500 hover:text-fuchsia-600 font-medium">
          Forgot password?
        </Link>
      </div>

      {/* Button */}
      <button
        disabled={loading}
        type="submit"
        className="w-full rounded-lg bg-fuchsia-500 py-2.5 text-white font-semibold hover:bg-fuchsia-600 transition disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link href="/register" className="text-fuchsia-500 font-medium">
          Create one
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;