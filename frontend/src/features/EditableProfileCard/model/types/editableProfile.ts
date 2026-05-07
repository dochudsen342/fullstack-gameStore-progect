import { Profile } from '@/src/entities/Profile/types/profile'

export interface EditableProfileSchema {
    data?: Profile
    isLoading: boolean
    readonly: boolean
    isEdit: boolean
    error?: string
}
