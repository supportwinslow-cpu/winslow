"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "@/app/lib/firebase";

import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async () => {
        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent successfully");
        } catch (error) {
            console.log(error);

            if (error.code === "auth/user-not-found") {
                alert("No account found with this email");
            } else if (error.code === "auth/invalid-email") {
                alert("Invalid email");
            } else {
                alert(error.message);
            }
        }
    };

    const handleLogin = async () => {
        if (!email || !password) {
            return alert("Please fill all fields");
        }

        try {
            setLoading(true);

            await signInWithEmailAndPassword(auth, email, password);
            router.push("/cart");
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setLoading(true);

            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider);

            alert("Google Login Successful");
            router.push("/cart");
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#2F2FE4]">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">Login to your account</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 border border-gray-300 text-black rounded-xl px-4 py-3 outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 border border-gray-300 text-black rounded-xl px-4 py-3 pr-12 outline-none focus:border-black"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="text-right">
                        <button
                            onClick={handleForgotPassword}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>

                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>

                    <span className="text-sm text-gray-400">OR CONTINUE WITH</span>

                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition"
                >
                    <FcGoogle size={24} />

                    <span className="font-medium text-[#2F2FE4]">
                        Continue with Google
                    </span>
                </button>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-black font-semibold">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
}