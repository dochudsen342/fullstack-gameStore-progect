import { $api } from '@/src/shared/api/api';
import { Profile } from '@/src/entities/Profile/types/profile';
import { USER_ID_LOCALSTORAGE_KEY } from '@/src/shared/lib/constants/localStorageKeys';
import { User } from '@/src/entities/User/model/types/user';

type EditableProfileResponse = {
    data: Profile,
    message?: string,
}

export const updateProfileApi = async (data: Profile, id: number): Promise<EditableProfileResponse> => {
    const response = await $api.patch<EditableProfileResponse>(`/updateProfile${id}`, data);
    return response.data;
};


export const getProfileDataApi = async (id: string): Promise<Profile> => {
    const response = await $api.get<Profile>(`/getProfile/${id}`);
    return response.data;
};
