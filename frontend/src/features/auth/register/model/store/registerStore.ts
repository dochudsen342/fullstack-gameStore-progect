import { create, createStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import { RegisterSchema, RegisterUser, ValidateNicknameSchema } from "../types/registerSchema";
import axios, { AxiosError } from "axios";
import { useUserStore } from "@/src/entities/User/model/store/userStore";
import { User } from "@/src/entities/User/model/types/user";
import { AxiosErrorMessageTypes } from "@/src/shared/types/AxiosErrorTypes";
import { $api } from "@/src/shared/api/api";

type registerStoreActions = {
    register: (registerData: RegisterUser) => void
    validateNickname: (nickname: string) => void
}

export type RegisterStore = RegisterSchema & registerStoreActions
const initialState: RegisterSchema = {
    isLoading: false,
    formError: {
        emailError: '',
        nicknameError: '',
    }
}

export const useRegisterStore = create<RegisterStore>()(immer((set) => ({
    ...initialState,
    register: async (registerData) => {
        const userStore = useUserStore.getState()

        set((state) => { state.isLoading = true })
        try {

            const response = await axios.post<User>('http://localhost:8000/auth/registration', {
                ...registerData,
                profile: {
                    nickname: registerData.nickname
                }
            })
            if (response.status >= 200 && response.status < 300) {
                set((state) => {
                    state.isLoading = false
                    userStore.setAuthData(response.data)
                    state.formError.emailError = ''
                })
            }

        } catch (error) {
            const axiosError = error as AxiosError<AxiosErrorMessageTypes>

            set((state) => {
                state.isLoading = false
                if (axiosError.response?.data.message) {
                    state.formError.emailError = axiosError.response?.data.message
                } else {
                    state.formError.emailError = axiosError.response?.statusText
                }
            })
        } finally {
            set((state) => { state.isLoading = false })
        }
    },
    validateNickname: async (nickname) => {
        try {
            const response = await $api.post<ValidateNicknameSchema>('/checkFreeNickname', {
                nickname
            })
            set((state) => { state.formError.nicknameError = '' })
        } catch (error) {
            const axiosError = error as AxiosError<AxiosErrorMessageTypes>
            set((state) => { state.formError.nicknameError = axiosError.response?.data.message })
        }

    }
})))

