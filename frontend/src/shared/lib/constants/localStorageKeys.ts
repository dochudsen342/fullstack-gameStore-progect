export const STORAGE_KEYS = {
    USER_ID: 'user-id',
    AUTH_TOKEN: 'auth-token',
    REFRESH_TOKEN: 'refresh-token',
} as const

export const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000 // 24 часа
