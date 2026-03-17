export type User = {
    id: number,
    avatar?: string,
}

export type UserSchema = {
    authData?: User
    _isMounted: boolean
}