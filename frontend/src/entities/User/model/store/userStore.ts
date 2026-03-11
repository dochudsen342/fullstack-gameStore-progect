import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { User, UserSchema } from "../types/user";
import { createJSONStorage, persist } from "zustand/middleware";
import { use } from "react";
import { USER_ID_LOCALSTORAGE_KEY } from "@/src/shared/lib/constants/localStorageKeys";

type UserStoreActions = {
    setAuthData: (authData: User) => void;
    initAuthData: () => void,
    logout: () => void,
}

export type UserStore = UserSchema & UserStoreActions

export const useUserStore = create<UserStore>()(immer((set) => ({
    authData: undefined,
    _isMounted: false,
    setAuthData: (authData) => set((state) => {
        state.authData = authData;
        localStorage.setItem(USER_ID_LOCALSTORAGE_KEY, JSON.stringify(state.authData?.id))
    }),
    initAuthData: () => set((state) => {
        const user = localStorage.getItem(USER_ID_LOCALSTORAGE_KEY)
        state.authData = user ? JSON.parse(user) : undefined
        state._isMounted = true

    }),
    logout: () => set((state) => {
        state.authData = undefined
        localStorage.removeItem(USER_ID_LOCALSTORAGE_KEY)
    })
})))
