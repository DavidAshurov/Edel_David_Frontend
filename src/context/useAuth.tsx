//Провайдер (AuthProvider) и хук
import { useContext, useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContextObject";
import type { User } from "./types";

// Компонент-провайдер
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (userData: User) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Кастомный хук
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
//test
//test2