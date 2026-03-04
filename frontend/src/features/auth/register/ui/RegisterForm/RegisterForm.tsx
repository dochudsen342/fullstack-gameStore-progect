'use client'

import React from 'react'
import cl from './RegisterForm.module.scss'
import classNames from 'classnames'
import Text from '@/src/shared/ui/Text/Text'
import { Input } from '@/src/shared/ui/Input/Input'
import Button from '@/src/shared/ui/Button/Button'
import Link from 'next/link'
import { AppLink } from '@/src/shared/ui/Link/AppLink'
import { useQuery } from '@tanstack/react-query'
import { fethRegisterUser } from '../../model/service/register/fetchRegisterUser'

interface RegisterFormProps {
    className?: string,
}

const RegisterForm = ({ className }: RegisterFormProps) => {

    const { data: AuthData } = useQuery({
        queryKey: ['register'],
        queryFn: fethRegisterUser
    })


    return (
        <div className={classNames(cl['register-container'], className)}>
            <div className={cl['register-card']}>
                <Text size='sizeM' title='Регистрация' />
                <form className={cl['register-form']}>
                    <Input id='nickname' htmlFor='nickname' placeholder='Ваш никнейм' labelText='Никнейм' required />
                    <Input id='email' htmlFor='email' placeholder='example@mail.com' labelText='Email' type='email' required />
                    <Input id='password' htmlFor='password' placeholder="Придумайте пароль" labelText='Пароль' type="password" required />


                    <Button className={cl['submit-button']}>
                        Зарегистрироваться
                    </Button>
                </form>

                <div className={cl['login-link']}>
                    <AppLink className={cl.registerLink} href="/auth/login">Уже есть аккаунт? Войти</AppLink>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm