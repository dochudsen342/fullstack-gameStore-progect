'use client'
import { useEffect } from 'react'
import {
    getFetchProfileData,
    getFetchUpdateProfile,
    getProfileCancelEdit,
    getProfileCloseNotification,
    getProfileData,
    getProfileError,
    getProfileIsEdit,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileSetReadonly,
} from '../../../model/selectors/editableProfileStoreSelectors'
import { useEditableProfileStore } from '../../../model/store/editableProfileStore'
import NotificationCard from '@/src/shared/ui/NotificationCard/NotificationCard'
import { ProfileCard } from '@/src/entities/Profile'

interface pageProps {
    className?: string
    profileId?: string
}

const EditableProfileCard = ({ className, profileId }: pageProps) => {
    const profileData = useEditableProfileStore(getProfileData)
    const readonly = useEditableProfileStore(getProfileReadonly)
    const error = useEditableProfileStore(getProfileError)
    const isLoading = useEditableProfileStore(getProfileIsLoading)
    const isEdit = useEditableProfileStore(getProfileIsEdit)

    const fetchProfileData = useEditableProfileStore(getFetchProfileData)
    const setReadonly = useEditableProfileStore(getProfileSetReadonly)
    const cancelEdit = useEditableProfileStore(getProfileCancelEdit)
    const fetchUpdateProfile = useEditableProfileStore(getFetchUpdateProfile)
    const closeNotification = useEditableProfileStore(getProfileCloseNotification)

    const onRetryHandler = () => {
        if (profileId) {
            fetchProfileData(profileId)
        }
    }

    useEffect(() => {
        if (profileId) {
            fetchProfileData(profileId)
        }
    }, [profileId, fetchProfileData])

    return (
        <>
            <ProfileCard
                updateProfile={fetchUpdateProfile}
                cancelEdit={cancelEdit}
                setReadonly={setReadonly}
                onRetryHandler={onRetryHandler}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                profileData={profileData}
            />
            <NotificationCard isEdit={isEdit} onClose={closeNotification} />
        </>
    )
}

export default EditableProfileCard
