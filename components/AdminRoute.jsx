"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAuth,
} from "@/app/context/AuthContext";

import {
  getUserRole,
} from "@/app/lib/firestore";

export default function AdminRoute({
  children,
}) {

  const { user } =
    useAuth();

  const router =
    useRouter();

  const [loading, setLoading] =
    useState(true);

  const [isAdmin, setIsAdmin] =
    useState(false);

  useEffect(() => {

    const checkAdmin =
      async () => {

        if (!user) {
          router.push("/login");
          return;
        }

        const role =
          await getUserRole(
            user.uid
          );

        if (role === "admin") {

          setIsAdmin(true);

        } else {

          router.push("/");
        }

        setLoading(false);
      };

    checkAdmin();

  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking Access...
      </div>
    );
  }

  return isAdmin
    ? children
    : null;
}