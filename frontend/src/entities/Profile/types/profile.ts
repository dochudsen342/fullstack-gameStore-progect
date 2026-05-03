import { User } from "../../User/model/types/user"

export type Profile = {
    nickname: string,
    avatar: string,
    birthday: string,
    user?: User
}

