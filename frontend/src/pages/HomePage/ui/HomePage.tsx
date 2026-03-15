'use client'
import React from 'react'
import { Navbar } from '@/src/widgets/Navbar'
import { getIsMounted, useUserStore } from '@/src/entities/User'
import Text from '@/src/shared/ui/Text/Text'
import GameSlider from '@/src/features/gameSlider/ui/GameSlider'

interface HomePageProps {
    className?: string,
}



const HomePage = ({ className }: HomePageProps) => {
    const _isMounted = useUserStore(getIsMounted)
    if (!_isMounted) {
        return null
    }

    return (
        <div>
            <Navbar />
            <GameSlider />
        </div>
    )
}

export default HomePage