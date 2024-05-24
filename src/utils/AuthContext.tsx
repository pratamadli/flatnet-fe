import React, { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user: { role: string } | null;
  login: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ role: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user from localStorage or API
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (role: string) => {
    const user = { role };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};