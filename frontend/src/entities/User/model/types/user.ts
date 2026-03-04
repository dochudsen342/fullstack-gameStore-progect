export type User = {
    id: number,
    email: string,
    nickName: string,
    avatar?: string,
}

export type UserSchema = {
    authData?: User
}