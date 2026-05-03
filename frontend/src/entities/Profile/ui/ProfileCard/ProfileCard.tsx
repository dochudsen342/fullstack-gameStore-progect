'use client'
import React, { useEffect } from 'react'
import cl from './ProfileCard.module.scss'
import Text from '@/src/shared/ui/Text/Text'
import { Profile } from '../../types/profile'
import { FormInput } from '@/src/shared/ui/Input'
import { Spiner } from '@/src/shared/ui/Spiner/Spiner'
import { ErrorPage } from '@/src/pages/ErrorPage'
import { errorMessages } from '@/src/shared/lib/constants/errorMessages'
import { useForm } from 'react-hook-form'
import { ProfileFooter } from '../ProfileFooter/ProfileFooter'
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar'


interface ProfileCardProps {
    className?: string,
    isLoading?: boolean,
    readonly: boolean,
    updatedMessage?: string
    error?: string | null
    profileData?: Profile,
    onRetryHandler?: () => void,
    updateProfile: (data: Profile) => void,
    cancelEdit: () => void,
    setReadonly: (state: boolean) => void
}

const ProfileCard = ({ className, profileData, isLoading, error, readonly, onRetryHandler, setReadonly, updateProfile, cancelEdit }: ProfileCardProps) => {
    const { register, watch, reset } = useForm<Profile>({
        values: {
            avatar: profileData?.avatar || '',
            nickname: profileData?.nickname || '',
            birthday: profileData?.birthday || '',
        }
    })

    const allFields = watch()

    const cancelEditHandler = () => {
        reset({
            avatar: profileData?.avatar || '',
            nickname: profileData?.nickname || '',
            birthday: profileData?.birthday || '',
        })
        cancelEdit()
    }

    if (isLoading) {
        return (<div className={cl.loaderWrapper}><Spiner /></div>)
    }

    if (error) {
        return <ErrorPage onRetry={onRetryHandler} title={errorMessages[error]} />
    }


    return (
        <div className={cl.profileWrapper}>
            <div className={cl['profile-card']}>
                <Text className={cl.profileCardTitle} title='Настройки профиля' />
                <form className={cl['form-section']}>
                    <FormInput disabled={true} labelText='Электронная почта' type='email' value={profileData?.user?.email} />
                    <FormInput {...register?.('nickname')} disabled={readonly} labelText='Никнейм' type="text" />
                    <FormInput {...register?.('birthday')} disabled={readonly} labelText='Дата рождения' type="text" />
                </form>
                <ProfileFooter formState={allFields} profileData={profileData} updateProfile={updateProfile} cancelEdit={cancelEditHandler} setReadonly={setReadonly} readonly={readonly} />
            </div>
            <ProfileAvatar avatar={profileData?.avatar} />
        </div>
    )
}

export default ProfileCard