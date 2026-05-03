'use client'
import React from 'react'
import cl from './ProfileAvatar.module.scss'

interface ProfileAvatarProps {
    className?: string
    avatar?: string
    initials?: string
    onUpload?: () => void
}

export const ProfileAvatar = ({ className, avatar, initials = 'Д', onUpload }: ProfileAvatarProps) => {
    return (
        <div className={cl['profile-header']}>
            <div className={cl['avatarSection']}>
                {
                    avatar ?
                        <img src={avatar} alt="" className={cl['avatar']} /> : //должно быть Icon,но
                        <div className={cl['avatar']}>
                            {initials}
                        </div>
                }
            </div>
            <button className={cl['upload-button']}>Загрузить фото</button>
        </div>
    )
}
