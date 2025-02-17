import { createContext, useEffect, useState } from "react";
import { loginApi } from "../services/api";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem("token");

        if (!token)
            return null;

        try {
            const decoded = jwtDecode(token);
            return token ? { token, userData:decoded} : null;
        } catch (error) {
            return null;
        }
        
    });

    const login = async (username, password) => {
        try {
            const response = await loginApi(username, password);

            if (response.status !== 200) 
                return response.status
        
            const { token } = response.data;

            localStorage.setItem("token", token);
            const decoded = jwtDecode(token);
            setUser({ token, userData: decoded });
            
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
