export type User = {
    id: number
    email: string // в зависимости от запроса на бэк email может быть,а может и не быть
}

export type UserSchema = {
    authData?: User
    _isMounted: boolean
}
