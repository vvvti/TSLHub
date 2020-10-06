export interface IAuth {
    auth: () => void;
    login: (username: string, password: string) => void;
    logout: boolean;
    isAuthenticated: boolean;
}

export interface IRegister extends IAuth {
    createMessage: (passwordsNotMatch: {}) => void;
    register: (newUser: { username: string, password: string, email: string}) => void;
    validate: HTMLInputElement;
}