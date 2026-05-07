import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { User, UserSchema } from '../types/user'
import { STORAGE_KEYS, TOKEN_EXPIRY_MS } from '@/src/shared/lib/constants/localStorageKeys'
import { secureStorage } from '@/src/shared/lib/storage/secureStorage'

type UserStoreActions = {
    setAuthData: (authData: User) => void
    initAuthData: () => void
    logout: () => void
}

export type UserStore = UserSchema & UserStoreActions

export const useUserStore = create<UserStore>()(
    immer((set) => ({
        authData: undefined,
        _isMounted: false,

        setAuthData: (authData) =>
            set((state) => {
                state.authData = authData
                secureStorage.set(STORAGE_KEYS.USER_ID, authData, TOKEN_EXPIRY_MS)
            }),
        initAuthData: () =>
            set((state) => {
                try {
                    const authData = secureStorage.get<User>(STORAGE_KEYS.USER_ID)
                    if (authData) {
                        state.authData = authData
                        state._isMounted = true
                    } else {
                        state.authData = undefined
                        state._isMounted = true
                    }
                } catch (error) {
                    console.error('Auth init error:', error)
                    state._isMounted = true
                }
            }),
        logout: () =>
            set((state) => {
                state.authData = undefined
                secureStorage.clear(STORAGE_KEYS.USER_ID)
            }),
    }))
)
