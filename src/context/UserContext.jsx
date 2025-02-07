import { useState, useEffect, createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
export const UserContext = createContext();

const { token } = useContext(AuthContext);
