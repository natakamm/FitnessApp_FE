import { useState, useEffect, createContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  //login
  //logout
  //token validation
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
