"use client";

import { useAuth } from "@/app/context/AuthContext";

import { useRouter } from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

export default function ProtectedRoute({
  children,
}) {
  const { user } = useAuth();

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Loading...
        </h1>
      </div>
    );
  }

  return children;
}