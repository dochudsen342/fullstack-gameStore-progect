import React from 'react'
import cl from './page.module.scss'
import { ProfilePage } from '@/src/pages/ProfilePage'
import { RequireAuthProvider } from '../../model'

interface pageProps {
    className?: string
}

const page = ({ className }: pageProps) => {
    return (
        <RequireAuthProvider>
            <ProfilePage />
        </RequireAuthProvider>
    )
}

export default page
