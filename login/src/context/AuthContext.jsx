import { createContext, useEffect, useState } from "react";
import { loginApi } from "../services/api";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);

        return token ? { token, userData:decoded} : null;
    });

    const login = async (username, password) => {
        try {
            const response = await loginApi(username, password);
            const { token } = response;
            localStorage.setItem("token", token);

            const decoded = jwtDecode(token);

            setUser({ token, userData:decoded });
            
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = () => {
        localStorage.clear(user)
    }

    useEffect(() => {
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};
