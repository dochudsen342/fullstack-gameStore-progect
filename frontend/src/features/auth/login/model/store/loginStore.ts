import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios, { AxiosError } from "axios";
import { useUserStore } from "@/src/entities/User/model/store/userStore";
import { User } from "@/src/entities/User/model/types/user";
import { AxiosErrorMessageTypes } from "@/src/shared/types/AxiosErrorTypes";
import { LoginUser, LoginUserSchema } from "../types/login";
import { $api } from "@/src/shared/api/api";

type loginStoreActions = {
    login: (loginData: LoginUser) => void
}

export type LoginStore = LoginUserSchema & loginStoreActions
const initialState: LoginUserSchema = {
    isLoading: false,
    error: undefined,
}
export const useLoginStore = create<LoginStore>()(immer((set, get) => ({
    ...initialState,
    login: async (loginData) => {
        const userStore = useUserStore.getState()

        set((state) => { state.isLoading = true })
        try {
            const response = await $api.post<User>('/auth/login', loginData)
            if (response.status >= 200 && response.status < 300) {
                set((state) => {
                    state.isLoading = false
                    state.error = undefined
                    userStore.setAuthData(response.data)
                })
            }

        } catch (error) {
            const axiosError = error as AxiosError<AxiosErrorMessageTypes>

            set((state) => {
                state.isLoading = false
                if (axiosError.response?.data.message) {
                    state.error = axiosError.response?.data.message
                } else {
                    state.error = axiosError.response?.statusText
                }
            })
        } finally {
            set((state) => { state.isLoading = false })
        }
    }
})))