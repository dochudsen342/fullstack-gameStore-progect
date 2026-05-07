import React from 'react'
import { $api } from '@/src/shared/api/api'
import { RegisterPage } from '@/src/pages/auth'

async function testFetchForFeature() {
    const res = await $api.post('/checkFreeNickname', { nickname: 'Dqizi' }).then((res) => res.data) //смотреть на ендпоинт
}

const Page = () => {
    return <RegisterPage />
}

export default Page
