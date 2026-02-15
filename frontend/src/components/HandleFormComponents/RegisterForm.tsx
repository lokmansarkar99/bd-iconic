"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { imageUpload } from "@/lib/imageUpload";
import { signIn } from "next-auth/react";

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    phone?: string;
    nid?: string;
    terms: boolean;
    imageUrl: string;
}

const RegisterForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [eye, setEye] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const photo = formData.get("image") as File | null;

        let uploadedImageUrl =
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

        try {
            if (photo && photo.size > 0) {
                const result = await imageUpload(photo);
                if (result) uploadedImageUrl = result;
            }

            const data: RegisterPayload = {
                name: (formData.get("name") as string) || "",
                email: (formData.get("email") as string) || "",
                password: (formData.get("password") as string) || "",
                phone: (formData.get("phone") as string) || undefined,
                nid: (formData.get("nid") as string) || undefined,
                terms: formData.get("terms") === "on",
                imageUrl: uploadedImageUrl,
            };

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Registration failed");

            // Auto Login
            const loginRes = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (loginRes?.error) {
                router.push("/login?message=Account created. Please log in manually.");
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm border border-red-100">
                    {error}
                </div>
            )}

            {/* Full Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" id="name" name="name" placeholder="Enter your full name" className=" w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500" />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input required type="email" id="email" name="email" placeholder="Enter your email" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500" />
            </div>

            {/* Password */}
            <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <span onClick={() => setEye(!eye)} className="absolute right-3 top-9 cursor-pointer">
                    {eye ? <FaRegEye className="text-gray-400" /> : <FaRegEyeSlash className="text-gray-400" />}
                </span>
                <input required type={eye ? "text" : "password"} id="password" name="password" placeholder="Create a strong password" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500" />
            </div>

            {/* Phone & NID */}

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="01XXXXXXXXX" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500" />
            </div>
            <div>
                <label htmlFor="nid" className="block text-sm font-medium text-gray-700 mb-1">NID Number</label>
                <input type="text" id="nid" name="nid" placeholder="NID/Birth Cert" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500" />
            </div>


            {/* Profile Picture */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture (optional)</label>
                <input type="file" name="image" accept="image/*" className="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-fuchsia-50 file:px-4 file:py-1.5 file:text-fuchsia-600 hover:file:bg-fuchsia-100" />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
                <input required type="checkbox" id="terms" name="terms" className="mt-1 h-4 w-4 rounded border-gray-300 text-fuchsia-500 focus:ring-fuchsia-500" />
                <label htmlFor="terms" className="text-gray-600">
                    I agree to the <Link href="/terms" className="text-fuchsia-500 font-medium">Terms & Conditions</Link>
                </label>
            </div>

            <button disabled={loading} type="submit" className="w-full rounded-lg bg-fuchsia-500 py-2.5 text-white font-semibold hover:bg-fuchsia-600 transition disabled:opacity-50">
                {loading ? "Registering..." : "Register"}
            </button>

            <p className="text-center text-sm text-gray-600">
                Already have an account? <Link href="/login" className="text-fuchsia-500 font-medium">Login</Link>
            </p>
        </form>
    );
};

export default RegisterForm;