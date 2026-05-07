'use client'
import React from 'react'
import { getIsMounted, useUserStore } from '@/src/entities/User'
import { $api } from '@/src/shared/api/api'
import { GameSlider } from '@/src/features/gameSlider'

interface HomePageProps {
    className?: string
}

const HomePage = ({ className }: HomePageProps) => {
    const _isMounted = useUserStore(getIsMounted)
    if (!_isMounted) {
        return null
    }

    return (
        <div>
            <GameSlider />
        </div>
    )
}

export default HomePage
