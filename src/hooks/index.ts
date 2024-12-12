import { useState,useContext } from "react";
import { FAKE_EMAIL, FAKE_PASSWORD } from "../env";
import { useQueries } from "@tanstack/react-query";
import { fetchBooks, fetchChars, fetchHouses, fetchSpells } from "../api";
import { AuthContextType, AuthContext } from "../context/auth";

export type TFilter = {
  search?: string;
  page?: number;
  type: string;
};

export const useAllCollections = (filter?: TFilter) => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ["books", filter],
        queryFn: () => fetchBooks(filter),
        enabled:filter?.type === "books" || filter?.type === "",
        staleTime: Infinity,
      },
      {
        queryKey: ["chars", filter],
        queryFn: () => fetchChars(filter),
        enabled:filter?.type === "characters" || filter?.type === "",
        staleTime: Infinity,
      },
      {
        queryKey: ["spells", filter],
        queryFn: () => fetchSpells(filter),
        enabled:filter?.type === "spells" || filter?.type === "",
        staleTime: Infinity,
      },
      {
        queryKey: ["houses", filter],
        queryFn: () => fetchHouses(filter),
        enabled:filter?.type === "houses" || filter?.type === "",
        staleTime: Infinity,
      },
    ],
  });

  return queries;
};

type TSignInPayload = {
  email: string;
  password: string;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const signIn = (payload: TSignInPayload) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (
          payload.email === FAKE_EMAIL &&
          payload.password === FAKE_PASSWORD
        ) {
          localStorage.setItem("user", payload.email);
          setIsSuccess(true);
          setIsLoading(false);
          resolve();
        } else {
          setError("Email atau password salah");
          setIsLoading(false);
          reject(new Error("Invalid credentials"));
        }
      }, 1500);
    });
  };

  return { isLoading, error, isSuccess, signIn };
};
