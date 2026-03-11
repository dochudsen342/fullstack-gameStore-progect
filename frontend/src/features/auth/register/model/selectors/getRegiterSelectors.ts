import type { RegisterStore } from "../store/registerStore";


export const getRegisterData = (state: RegisterStore) => state.registerData
export const getRegisterFnc = (state: RegisterStore) => state.register
export const getRegisterIsLoading = (state: RegisterStore) => state.isLoading
export const getRegisterErrorMessage = (state: RegisterStore) => state.error