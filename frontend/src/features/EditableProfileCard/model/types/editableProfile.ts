import { Profile } from "@/src/entities/Profile/types/profile";


export interface EditableProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    readonly: boolean,
    error?: string,
}
