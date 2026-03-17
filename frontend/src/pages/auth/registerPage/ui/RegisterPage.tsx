import React from 'react'
import classNames from 'classnames'
import { RegisterForm } from '@/src/features/auth'

interface RegisterPageProps {
    className?: string,
}

const RegisterPage = ({ className }: RegisterPageProps) => {

    return (
        <>
            <RegisterForm />
        </>
    )
}

export default RegisterPage