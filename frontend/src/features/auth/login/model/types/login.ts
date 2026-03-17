export type LoginUser = {
    email: string,
    password: string,
}

export interface LoginUserSchema {
    isLoading: boolean,
    error?: string,
}