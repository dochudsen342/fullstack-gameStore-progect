
export interface RegisterUser {
    email: string,
    password: string,
    nickname: string,
}

export interface RegisterSchema {
    isLoading: boolean,
    error: unknown
}