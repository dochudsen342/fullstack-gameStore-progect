import { UserStore } from "../store/userStore";
import { UserSchema } from "../types/user";

export const getIsMounted = (state: UserStore) => state._isMounted