import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { getProfileDataApi, updateProfileApi } from '../service/editableProfileServices'
import { Profile } from '@/src/entities/Profile/types/profile'
import { EditableProfileSchema } from '../types/editableProfile'
import { useUserStore } from '@/src/entities/User'

interface EditableProfileActions {
    updateProfile: (data: Profile) => Promise<void>
    getProfile: (id: string) => Promise<void>
    setReadonly: (readonly: boolean) => void
    cancelEdit: () => void
    closeNotification: () => void
}

export type EditableProfileStore = EditableProfileSchema & EditableProfileActions

const initialState: EditableProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    isEdit: false,
}

export const useEditableProfileStore = create<EditableProfileStore>()(
    immer((set) => ({
        ...initialState,
        updateProfile: async (editData: Profile) => {
            const userId = useUserStore.getState().authData?.id

            if (!userId) {
                throw new Error('Не удалось получить id пользователя')
            }

            set({ isLoading: true, error: undefined })

            try {
                const responce = await updateProfileApi(editData, userId)
                console.log(responce)
                set({ isLoading: false, data: responce.data, readonly: true, isEdit: true })
            } catch (error: unknown) {
                set({
                    isLoading: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : 'Произошла ошибка при обновлении профиля',
                    readonly: true,
                })
            }
        },
        getProfile: async (id: string) => {
            set({ isLoading: true, error: undefined })

            try {
                if (!id) throw new Error('User id not found')
                const responce = await getProfileDataApi(id)
                set({ isLoading: false, data: responce })
            } catch (error: unknown) {
                set({
                    isLoading: false,
                    error:
                        error instanceof Error
                            ? error.message
                            : 'Произошла ошибка при получении профиля',
                })
            }
        },
        setReadonly: (readonly: boolean) => {
            set({ readonly })
        },
        cancelEdit: () => {
            set((state) => {
                state.readonly = true
            })
        },
        closeNotification: () => {
            set({ isEdit: false })
        },
    }))
)
