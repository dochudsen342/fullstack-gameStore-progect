'use client'
import React from 'react'
import cl from './LoginByEmail.module.scss'
import classNames from 'classnames'
import Text from '@/src/shared/ui/Text/Text'
import { Input } from '@/src/shared/ui/Input/Input'
import Button from '@/src/shared/ui/Button/Button'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppLink } from '@/src/shared/ui/Link/AppLink'
import { useLoginStore } from '../../model/store/loginStore'
import { getLoginStoreIsLoading, getLoginStoreLoginFnc } from '../../model/selectors/loginStoreSelectors'
import { LoginUser } from '../../model/types/login'
import { Spiner } from '@/src/shared/ui/Spiner/Spiner'
import { getUserAuthData, useUserStore } from '@/src/entities/User'
import { redirect } from 'next/navigation'

interface RegisterFormProps {
    className?: string,
}

type RegisterFormShema = {
    nickname: string,
    email: string,
    password: string,
}



const LoginByEmail = ({ className }: RegisterFormProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormShema>()
    const loginFnc = useLoginStore(getLoginStoreLoginFnc)
    const isLoading = useLoginStore(getLoginStoreIsLoading)
    const userAuthData = useUserStore(getUserAuthData)

    const onLoginSubmit: SubmitHandler<LoginUser> = (data) => {
        loginFnc(data)
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
                <Text size='sizeM' title='Войти' />
                <form onSubmit={handleSubmit(onLoginSubmit)} className={cl['register-form']}>
                    <Input {...register('email')} onChange={() => { }} ErrorText={errors.email?.message} id='email' htmlFor='email' labelText='Email' type='email' />
                    <Input {...register('password')} onChange={() => { }} id='password' htmlFor='password' labelText='Пароль' type="password" />
                    <Button className={cl['submit-button']}>
                        Войти
                    </Button>
                </form>
                <div className={cl['login-link']}>
                    <AppLink className={cl.registerLink} href="/register">Нет аккаунта? Зарегистрируйся</AppLink>
                </div>
            </div>
        </div>
    )
}

export default LoginByEmail

