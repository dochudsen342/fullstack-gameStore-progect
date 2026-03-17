import { LoginStore } from "../store/loginStore";

export const getLoginStoreLoginFnc = (state: LoginStore) => state.login
export const getLoginStoreIsLoading = (state: LoginStore) => state.isLoading