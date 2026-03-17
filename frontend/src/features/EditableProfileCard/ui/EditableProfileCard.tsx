import React from 'react'
import cl from './EditableProfileCard.module.scss'
import classNames from 'classnames'
import ProfileCard from '@/src/entities/Profile/ui/ProfileCard/ProfileCard'

interface EditableProfileCardProps {
    className?: string,
}

const EditableProfileCard = ({ className }: EditableProfileCardProps) => {

    return (
        <div className={classNames(cl.EditableProfileCard, {}, [className])}>
            <ProfileCard profileData={{ birthDay: '24.03.2017', email: '123@list.ru', Nickname: 'Dqizi', userName: 'Дмитрий' }} />
        </div>
    )
}

export default EditableProfileCard