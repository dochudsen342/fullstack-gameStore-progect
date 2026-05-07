import { $api } from '@/src/shared/api/api'
import { Profile } from '@/src/entities/Profile/types/profile'

type EditableProfileResponse = {
    data: Profile
    message?: string
}

export const updateProfileApi = async (
    data: Profile,
    id: number
): Promise<EditableProfileResponse> => {
    const response = await $api.patch<EditableProfileResponse>(`/updateProfile/${id}`, data)
    return response.data
}

export const getProfileDataApi = async (id: string): Promise<Profile> => {
    const response = await $api.get<Profile>(`/getProfile/${id}`)
    return response.data
}
