import React from 'react'
import cl from './page.module.scss'
import { RequireAuthProvider } from '../../model'
import LazyProfilePage from '@/src/pages/ProfilePage'

interface pageProps {
    className?: string
}

const page = ({ className }: pageProps) => {
    return (
        <RequireAuthProvider>
            <LazyProfilePage />
        </RequireAuthProvider>
    )
}

export default page
