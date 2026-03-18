'use client'
import React from 'react'
import './style.css'
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