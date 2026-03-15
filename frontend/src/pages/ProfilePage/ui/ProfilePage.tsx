'use client'
import React from 'react'
import './style.css'
import Text from '@/src/shared/ui/Text/Text'
import { Navbar } from '@/src/widgets/Navbar'
import ProfileCard from '@/src/entities/Profile/ui/ProfileCard/ProfileCard'

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {

    return (
        <ProfileCard />

    )
}

export default ProfilePage