import { createContext, useEffect, useState } from "react";
import { loginApi } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem("token");
        return token ? { token } : null;
    });

    const login = async (username, password) => {
        try {
            const response = await loginApi(username, password);
            const { token } = response;
            localStorage.setItem("token", token);
            setUser({ token });

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};
