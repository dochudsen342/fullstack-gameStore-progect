'use client'
import React from 'react'
import { Navbar } from '@/src/widgets/Navbar'
import { getIsMounted, useUserStore } from '@/src/entities/User'
import Text from '@/src/shared/ui/Text/Text'
import GameSlider from '@/src/features/gameSlider/ui/GameSlider'
import { $api } from '@/src/shared/api/api'

interface HomePageProps {
    className?: string,
}

async function fetchGuarAuth() {
    const res = await $api.post('/users/JwtGuardTest').then(res => res.data)

    if (!res.message) {
        console.log(res.error)
        return false
    }
    console.log(res.message)

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
            <button onClick={fetchGuarAuth}>ТЕСТОВЫЙ ЗАПРОС НА ПРОВЕРКУ AuthGuard</button>
        </div>
    )
}

export default HomePage