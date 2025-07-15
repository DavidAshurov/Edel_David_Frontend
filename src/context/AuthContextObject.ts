// тут только создание и экспорт контекста
//// Создаём контекст с пустой заглушкой
import { createContext } from "react";
import type { AuthContextType } from "./types"; // Импорт только типа!

// Только createContext
export const AuthContext = createContext<AuthContextType |
    undefined>(undefined);
