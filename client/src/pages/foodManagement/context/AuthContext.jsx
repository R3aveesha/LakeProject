import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token); // Decode the token to get user data
      setAuthState({
        isAuthenticated: true,
        user: decodedUser,
      });
    }
  }, []);

  const login = (token) => {
    const decodedUser = jwtDecode(token); // Decode the token to get user data
    localStorage.setItem('token', token);
    setAuthState({
      isAuthenticated: true,
      user: decodedUser,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
