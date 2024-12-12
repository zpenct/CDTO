import { createContext } from "react";

export type User = {
  email: string;
};

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
