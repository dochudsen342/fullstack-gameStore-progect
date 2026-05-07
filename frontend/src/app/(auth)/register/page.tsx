import React from 'react'
import { $api } from '@/src/shared/api/api'
import LazyRegisterPage from '@/src/pages/auth/registerPage/ui/RegisterPage.async'

async function testFetchForFeature() {
    const res = await $api.post('/checkFreeNickname', { nickname: 'Dqizi' }).then((res) => res.data) //смотреть на ендпоинт
}

const Page = () => {
    return <LazyRegisterPage />
}

export default Page
