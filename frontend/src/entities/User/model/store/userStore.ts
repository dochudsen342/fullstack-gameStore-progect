import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { User, UserSchema } from "../types/user";

type UserStoreActions = {
    setAuthData: (authData: User) => void;
    logOut: () => void
}

type UserStore = UserSchema & UserStoreActions

const initialState: UserSchema = {}
export const useUserStore = create<UserStore>()(immer((set) => ({
    authData: undefined,
    setAuthData: (authData) => set((state) => {
        state.authData = authData;
        // state.authData.id = authData.id
    }),
    logOut: () => set((state) => {
        state.authData = undefined
    })
})))
