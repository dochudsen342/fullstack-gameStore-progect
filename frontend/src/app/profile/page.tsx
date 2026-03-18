import React from 'react'
import cl from './page.module.scss'
import ProfilePage from '@/src/pages/ProfilePage/ui/ProfilePage'
import { RequireAuthProvider } from '../model/providers/RequireAuthProvider/RequireAuthProvider'

interface pageProps {
    className?: string,
}

const page = ({ className }: pageProps) => {

    return (
        <RequireAuthProvider>
            <ProfilePage />
        </RequireAuthProvider>
    )
}

export default page