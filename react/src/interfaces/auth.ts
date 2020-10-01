export interface IAuth {
    auth: () => void;
    login: (username: string, password: string) => void;
    logout: boolean;
    isAuthenticated: boolean;
}