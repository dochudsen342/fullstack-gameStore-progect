'use client'
import React from 'react'
import cl from './ProfileCard.module.scss'
import { Navbar } from '@/src/widgets/Navbar'
import Text from '@/src/shared/ui/Text/Text'
import { Input } from '@/src/shared/ui/Input/Input'
import { Profile } from '../../types/profile'

interface ProfileCardProps {
    className?: string,
    onChangeFirstName?: (nickname: string) => void
    onChangeEmail?: (email: string) => void
    onChageNickname?: (name: string) => void
    onChangeBirthday?: (birthday: string) => void,
    profileData: Profile
}

const ProfileCard = ({ className, profileData }: ProfileCardProps) => {


    return (
        <>
            <Navbar />
            <div className={cl.profileWrapper}>
                <div className={cl['profile-card']}>
                    <Text className={cl.profileCardTitle} title='Настройки профиля' />
                    <form className={cl['form-section']}>
                        <Input type='text' labelText='Имя' value={profileData.userName} />
                        <Input labelText='Электронная почта' type='email' value={profileData.email} />
                        <Input labelText='Никнейм' type="text" value={profileData.Nickname} />
                        <Input labelText='Дата рождения' type="text" value={profileData.birthDay} />
                    </form>

                    <div className={cl['gender-section']}>
                        <h2 className={cl['section-title']}>Пол</h2>
                        <div className={cl['radio-group']}>
                            <label className={cl['radio-label']}>
                                <Input type="radio" name="gender" defaultChecked /> Мужской
                            </label>
                            <label className={cl['radio-label']}>
                                <Input type="radio" name="gender" /> Женский
                            </label>
                        </div>
                    </div>

                    <div className={cl.optionsButton}>
                        <button className={cl['delete-profile']}>Удалить профиль</button>
                        <button className={cl['save-button']}>Сохранить</button>
                    </div>


                </div>
                <div className={cl['profile-header']}>
                    <div className={cl['avatarSection']}>
                        <div className={cl['avatar']}>
                            Д
                        </div>
                    </div>
                    <button className={cl['save-button']}>Загрузить фото</button>
                </div>
            </div></>

    )
}

export default ProfileCard