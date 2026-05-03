'use client'
import { useEffect } from 'react'
import ProfileCard from '@/src/entities/Profile/ui/ProfileCard/ProfileCard'
import { getFetchProfileData, getFetchUpdateProfile, getProfileCancelEdit, getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, getProfileSetReadonly } from '../../../model/selectors/editableProfileStoreSelectors'
import { useEditableProfileStore } from '../../../model/store/editableProfileStore'

interface pageProps {
    className?: string,
    profileId?: string
}



const EditableProfileCard = ({ className, profileId }: pageProps) => {

    const profileData = useEditableProfileStore(getProfileData)
    const readonly = useEditableProfileStore(getProfileReadonly)
    const error = useEditableProfileStore(getProfileError)
    const isLoading = useEditableProfileStore(getProfileIsLoading)
    
    const fetchProfileData = useEditableProfileStore(getFetchProfileData)
    const setReadonly = useEditableProfileStore(getProfileSetReadonly)
    const cancelEdit = useEditableProfileStore(getProfileCancelEdit)
    const fetchUpdateProfile = useEditableProfileStore(getFetchUpdateProfile)


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
        <ProfileCard updateProfile={fetchUpdateProfile} cancelEdit={cancelEdit} setReadonly={setReadonly} onRetryHandler={onRetryHandler} isLoading={isLoading} error={error} readonly={readonly} profileData={profileData} />
    )
}

export default EditableProfileCard