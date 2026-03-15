import React from 'react'
import cl from './page.module.scss'
import ProfilePage from '@/src/pages/ProfilePage/ui/ProfilePage'

interface pageProps {
    className?: string,
}

const page = ({ className }: pageProps) => {

    return (
        <ProfilePage />
    )
}

export default page