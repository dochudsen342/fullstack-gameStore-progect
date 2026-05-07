import React from 'react'
import { LoginByEmail } from '@/src/features/auth'

interface LoginPageProps {
    className?: string
}

const LoginPage = ({ className }: LoginPageProps) => {
    return <LoginByEmail />
}

export default LoginPage
