import { useEffect, useMemo, useState } from "react";
import { AuthContext, User } from "../context/auth";
import { useSignIn } from "../hooks";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [userAuth, setUserAuth] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const { signIn } = useSignIn();
  
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUserAuth(parsedUser);
        } catch (err) {
          localStorage.removeItem("user");
        }
      }
    }, []);
  
    const login = async (email: string, password: string) => {
      setIsLoading(true);
      setError(null);
  
      try {
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
  
        await signIn({ email, password });
        
        const userData = { email };
        
        setUserAuth(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || "Login failed");
        setUserAuth(null);
        setIsLoading(false);
        throw err;
      }
    };
  
    const logout = () => {
      localStorage.removeItem("user");
      setUserAuth(null);
      setError(null);
    };
  
    const contextValue = useMemo(() => ({
      user: userAuth,
      login,
      logout,
      isLoading,
      error,
    }), [userAuth, isLoading, error]);
  
    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  };