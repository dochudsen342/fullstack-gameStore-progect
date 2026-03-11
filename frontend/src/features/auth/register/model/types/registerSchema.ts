
export interface RegisterUser {
    email: string,
    password: string,
    nickname: string,
}

export interface RegisterSchema {
    registerData: RegisterUser,
    isLoading: boolean,
    error: unknown
}