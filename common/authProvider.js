import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState();

  const router = useRouter();

  useEffect(() => {
 
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    } 
  }, [router]);

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
    console.log("setted")
    router.replace('/adminchoice');
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    router.replace('/_');
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
