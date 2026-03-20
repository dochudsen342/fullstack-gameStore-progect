'use client'
import React from 'react'
import cl from './RegisterForm.module.scss'
import classNames from 'classnames'
import Text from '@/src/shared/ui/Text/Text'
import { Input } from '@/src/shared/ui/Input/ui/Input'
import Button from '@/src/shared/ui/Button/Button'
import { AppLink } from '@/src/shared/ui/Link/AppLink'
import { useRegisterStore } from '../../model/store/registerStore'
import { Spiner } from '@/src/shared/ui/Spiner/Spiner'
import { getRegisterErrorMessage, getRegisterFnc, getRegisterIsLoading } from '../../model/selectors/getRegiterSelectors'
import { getUserAuthData, useUserStore } from '@/src/entities/User'
import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterSchema, RegisterUser } from '../../model/types/registerSchema'
import { FormInput } from '@/src/shared/ui/Input/ui/FormInput'

interface RegisterFormProps {
    className?: string,
}



const RegisterForm = ({ className }: RegisterFormProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterUser>()
    const userAuthData = useUserStore(getUserAuthData)
    const isLoading = useRegisterStore(getRegisterIsLoading)
    const errorMessage = useRegisterStore(getRegisterErrorMessage) as string

    const registerFnc = useRegisterStore(getRegisterFnc)


    const onRegisterSubmit: SubmitHandler<RegisterUser> = (data) => {
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
                    <FormInput {...register('nickname', {
                        onChange: () => { console.log(1) }
                    })} id='nickname' htmlFor='nickname' placeholder='Ваш никнейм' labelText='Никнейм' />
                    <FormInput {...register('email', {
                        required: {
                            value: true,
                            message: 'Email обязателен для заполнения!'
                        }
                    })} ErrorText={errors.email?.message || errorMessage} id='email' htmlFor='email' placeholder='example@mail.com' labelText='Email' type='email' />
                    <FormInput {...register('password', {
                        required: {
                            value: true,
                            message: 'Password обязателен для заполнения!'
                        }
                    })} id='password' ErrorText={errors.password?.message} htmlFor='password' placeholder="Придумайте пароль" labelText='Пароль' type="password" />
                    <Button className={cl['submit-button']}>
                        Зарегистрироваться
                    </Button>
                </form>

                <div className={cl['login-link']}>
                    <AppLink className={cl.registerLink} href="/login">Уже есть аккаунт? Войти</AppLink>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm

