'use client'
import React from 'react'
import './style.css'
import Text from '@/src/shared/ui/Text/Text'
import { Navbar } from '@/src/widgets/Navbar'
import ProfileCard from '@/src/entities/Profile/ui/ProfileCard/ProfileCard'
import EditableProfileCard from '@/src/features/EditableProfileCard/ui/EditableProfileCard'

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {

    return (
        <EditableProfileCard />
    )
}

export default ProfilePage