import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

interface AuthContextProps {
  user: { roleName: string; token: string; nama: string } | null;
  login: (roleName: string, token: string, nama: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{
    roleName: string;
    token: string;
    nama: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (roleName: string, token: string, nama: string) => {
    const user = { roleName, token, nama };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    router.push(`/${roleName}/dashboard`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
