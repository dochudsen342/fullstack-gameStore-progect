import React from 'react';
import RegisterPage from '@/src/pages/auth/registerPage/ui/RegisterPage';
import { $api } from '@/src/shared/api/api';

async function testFetchForFeature() {
    const res = await $api.post('/checkFreeNickname', { nickname: 'Dqizi' }).then(res => res.data)//смотреть на ендпоинт

}


const Page = () => {
    return (
        <RegisterPage />
    );
};

export default Page;