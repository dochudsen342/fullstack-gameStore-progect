import React from 'react'
import classNames from 'classnames'
import LoginByEmail from '@/src/features/auth/login/ui/LoginByEmail/LoginByEmail'

interface LoginPageProps {
    className?: string,
}

const LoginPage = ({ className }: LoginPageProps) => {

    return (
        <>
            <LoginByEmail />
        </>
    )
}

export default LoginPage