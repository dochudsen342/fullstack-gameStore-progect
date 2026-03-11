import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { RegisterSchema } from "../types/registerSchema";
import axios, { AxiosError } from "axios";
import { useUserStore } from "@/src/entities/User/model/store/userStore";
import { User } from "@/src/entities/User/model/types/user";
import { AxiosErrorMessageTypes } from "@/src/shared/types/AxiosErrorTypes";
import RegisterForm from "../../ui/RegisterForm/RegisterForm";

type registerStoreActions = {

    register: (registerData: RegisterForm) => void
}

export type RegisterStore = RegisterSchema & registerStoreActions
const initialState: RegisterSchema = {
    registerData: {
        email: '',
        password: '',
        nickname: ''
    },
    isLoading: false,
    error: ''
}
export const useRegisterStore = create<RegisterStore>()(immer((set, get) => ({
    ...initialState,
    register: async (registerData) => {
        const userStore = useUserStore.getState()

        set((state) => { state.isLoading = true })
        try {
            const response = await axios.post<User>('http://localhost:8000/auth/registration', registerData)
            if (response.status >= 200 && response.status < 300) {
                set((state) => {
                    state.isLoading = false
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