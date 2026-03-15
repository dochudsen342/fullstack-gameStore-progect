
export type Profile = {
    Nickname: string,
    email: string,
    userName: string,
    birthDay: string,
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string
}