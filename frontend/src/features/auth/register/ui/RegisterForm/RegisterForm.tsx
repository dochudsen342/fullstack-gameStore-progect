'use client'
import React from 'react'
import cl from './RegisterForm.module.scss'
import classNames from 'classnames'
import Text from '@/src/shared/ui/Text/Text'
import { Input } from '@/src/shared/ui/Input/Input'
import Button from '@/src/shared/ui/Button/Button'
import { AppLink } from '@/src/shared/ui/Link/AppLink'
import { useRegisterStore } from '../../model/store/registerStore'
import { Spiner } from '@/src/shared/ui/Spiner/Spiner'
import { getRegisterErrorMessage, getRegisterFnc, getRegisterIsLoading } from '../../model/selectors/getRegiterSelectors'
import { getUserAuthData, useUserStore } from '@/src/entities/User'
import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form';

interface RegisterFormProps {
    className?: string,
}

type RegisterForm = {
    nickname: string,
    email: string,
    password: string,
}

const RegisterForm = ({ className }: RegisterFormProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>()
    const userAuthData = useUserStore(getUserAuthData)
    const isLoading = useRegisterStore(getRegisterIsLoading)
    const errorMessage = useRegisterStore(getRegisterErrorMessage) as string

    const registerFnc = useRegisterStore(getRegisterFnc)


    const onRegisterSubmit: SubmitHandler<RegisterForm> = (data) => {
        registerFnc(data)
    }


    if (isLoading) {
        return <div className={classNames(cl['register-container'], className)}>
            <Spiner />
        </div>
    }

    if (!isLoading && userAuthData) {
        redirect('/')
    }


    return (
        <div className={classNames(cl['register-container'], className)}>
            <div className={cl['register-card']}>
                <Text size='sizeM' title='Регистрация' />
                <form onSubmit={handleSubmit(onRegisterSubmit)} className={cl['register-form']}>
                    <Input {...register('nickname')} onChange={() => { }} id='nickname' htmlFor='nickname' placeholder='Ваш никнейм' labelText='Никнейм' />
                    <Input {...register('email', {
                        required: {
                            value: true,
                            message: 'Email обязателен для заполнения!'
                        }
                    })} onChange={() => { }} ErrorText={errors.email?.message || errorMessage} id='email' htmlFor='email' placeholder='example@mail.com' labelText='Email' type='email' />
                    <Input {...register('password', {
                        required: {
                            value: true,
                            message: 'Password обязателен для заполнения!'
                        }
                    })} onChange={() => { }} id='password' ErrorText={errors.password?.message} htmlFor='password' placeholder="Придумайте пароль" labelText='Пароль' type="password" />
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