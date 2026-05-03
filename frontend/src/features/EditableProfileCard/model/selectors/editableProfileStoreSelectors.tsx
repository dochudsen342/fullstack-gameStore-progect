import { EditableProfileStore } from "../store/editableProfileStore";

export const getProfileData = (state: EditableProfileStore) => state?.data || undefined;
export const getProfileIsLoading = (state: EditableProfileStore) => state.isLoading || false;
export const getFetchUpdateProfile = (state: EditableProfileStore) => state.updateProfile;
export const getProfileError = (state: EditableProfileStore) => state.error;
export const getProfileReadonly = (state: EditableProfileStore) => state.readonly;
export const getFetchProfileData = (state: EditableProfileStore) => state.getProfile;
export const getProfileSetReadonly = (state: EditableProfileStore) => state.setReadonly;
export const getProfileCancelEdit = (state: EditableProfileStore) => state.cancelEdit;
