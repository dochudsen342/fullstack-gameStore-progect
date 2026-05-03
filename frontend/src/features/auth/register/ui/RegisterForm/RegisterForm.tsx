'use client'

import React from 'react'
import classNames from 'classnames'
import Text from '@/src/shared/ui/Text/Text'
import Button from '@/src/shared/ui/Button/Button'
import { AppLink } from '@/src/shared/ui/Link/AppLink'
import { useRegisterStore } from '../../model/store/registerStore'
import { Spiner } from '@/src/shared/ui/Spiner/Spiner'
import { getFormFieldsServerErrors, getRegisterFnc, getRegisterIsLoading, getValidateNickname } from '../../model/selectors/getRegiterSelectors'
import { getUserAuthData, useUserStore } from '@/src/entities/User'
import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUser } from '../../model/types/registerSchema'
import { FormInput } from '@/src/shared/ui/Input/ui/FormInput'
import { useDebounce } from '@/src/shared/lib/hooks/useDebounce'

import cl from './RegisterForm.module.scss'


interface RegisterFormProps {
    className?: string,
}


const RegisterForm = ({ className }: RegisterFormProps) => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegisterUser>()
    const userAuthData = useUserStore(getUserAuthData)
    const isLoading = useRegisterStore(getRegisterIsLoading)
    const errorMessage = useRegisterStore(getFormFieldsServerErrors)

    const registerFnc = useRegisterStore(getRegisterFnc)
    const validateNickname = useDebounce(useRegisterStore(getValidateNickname), 800)

    const onValidateNickname = () => {
        const state = getValues()
        validateNickname(state.nickname)
    }

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
                        onChange: () => { onValidateNickname() },

                    })} ErrorText={errorMessage.nicknameError} id='nickname' htmlFor='nickname' placeholder='Ваш никнейм' labelText='Никнейм' />
                    <FormInput {...register('email', {
                        required: {
                            value: true,
                            message: 'Email обязателен для заполнения!'
                        },

                    })} ErrorText={errors.email?.message || errorMessage.emailError} id='email' htmlFor='email' placeholder='example@mail.com' labelText='Email' type='email' />
                    <FormInput {...register('password', {
                        required: {
                            value: true,
                            message: 'Password обязателен для заполнения!'
                        },
                        minLength: {
                            value: 5,
                            message: 'Пароль слишком короткий!'
                        },
                        maxLength: {
                            value: 16,
                            message: 'Пароль слишком длинный!'
                        },
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

