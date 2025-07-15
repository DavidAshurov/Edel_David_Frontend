
// Типы
export type User = {
    email: string;
    name?: string
};
export type AuthContextType = {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
};
