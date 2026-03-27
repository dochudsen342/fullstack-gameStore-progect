import type { RegisterStore } from "../store/registerStore";


export const getRegisterFnc = (state: RegisterStore) => state.register
export const getValidateNickname = (state: RegisterStore) => state.validateNickname
export const getRegisterIsLoading = (state: RegisterStore) => state.isLoading
export const getFormFieldsServerErrors = (state: RegisterStore) => state.formError
