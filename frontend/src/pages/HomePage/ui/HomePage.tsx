'use client'
import React from 'react'
import { Navbar } from '@/src/widgets/Navbar'
import { getIsMounted, useUserStore } from '@/src/entities/User'
import GameSlider from '@/src/features/gameSlider/ui/GameSlider'
import { $api } from '@/src/shared/api/api'

interface HomePageProps {
    className?: string,
}

async function testFetchForFeature() {
    const res = await $api.post('/checkFreeNickname', { nickname: 'Dqizi123' }).then(res => res.data)//смотреть на ендпоинт

}

const HomePage = ({ className }: HomePageProps) => {
    const _isMounted = useUserStore(getIsMounted)
    if (!_isMounted) {
        return null
    }

    return (
        <div>
            <GameSlider />
            <button onClick={testFetchForFeature}>ТЕСТОВЫЙ ЗАПРОС НА ПРОВЕРКУ</button>
        </div>
    )
}

export default HomePage