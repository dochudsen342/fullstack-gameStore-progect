export type User = {
    id: number,
    email?: string,
}

export type UserSchema = {
    authData?: User
    _isMounted: boolean
}