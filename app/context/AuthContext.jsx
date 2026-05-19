"use client";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { auth } from "@/app/lib/firebase";

const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // AUTH SESSION
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

          setLoading(false);
        }
      );

    return () =>
      unsubscribe();

  }, []);

  // LOGOUT
  const logout =
    async () => {

      try {

        await signOut(auth);

        alert(
          "Logout Successful"
        );

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
      }}
    >

      {!loading &&
        children}

    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuth = () => {
  return useContext(
    AuthContext
  );
};