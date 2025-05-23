import axios from "axios";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is already logged in on page load
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("https://react-tailwind-update-eid-server.vercel.app/api/auth/protected", { withCredentials: true });
                setUser(res.data.user);
            } catch (error) {
                setUser(null);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            const res = await axios.post("https://react-tailwind-update-eid-server.vercel.app/api/auth/login", { email, password }, { withCredentials: true });
            setUser(res.data.user);
            return res.data.message; // Return success message
        } catch (error) {
            throw new Error(error.response?.data?.message || "Login failed!");
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await axios.post("https://react-tailwind-update-eid-server.vercel.app/api/auth/logout", {}, { withCredentials: true });
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};