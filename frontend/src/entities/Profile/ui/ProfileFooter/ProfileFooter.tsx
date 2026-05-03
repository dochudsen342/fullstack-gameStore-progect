'use client'
import React from 'react'
import cl from './ProfileFooter.module.scss'
import Button from '@/src/shared/ui/Button/Button'
import { Profile } from '../../types/profile'

interface ProfileFooterProps {
    className?: string,
    profileData?: Profile,
    formState: Profile,
    readonly?: boolean,
    setReadonly?: (state: boolean) => void,
    updateProfile?: (profile: Profile) => void,
    cancelEdit?: () => void
}

export const ProfileFooter = ({ className, profileData, readonly = true, setReadonly, updateProfile, cancelEdit, formState }: ProfileFooterProps) => {

    return (
        <div className={cl.optionsButtons}>
            {profileData && <>
                {readonly ? <Button onClick={() => { setReadonly?.(false) }} className={cl['editBtn']}>
                    Редактировать
                </Button> : <>
                    <Button onClick={() => { updateProfile?.(formState) }} className={cl['applyButton']}>
                        Сохранить
                    </Button>
                    <Button onClick={() => { cancelEdit?.() }} className={cl['cancelEditButton']}>Отмена</Button>
                </>
                }
            </>}
        </div>
    )
}
