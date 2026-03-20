
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useState } from 'react'
import cl from './Input.module.scss'
import classNames from 'classnames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface FormInputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    type?: string
    placeholder?: string
    disabled?: boolean,
    htmlFor?: string,
    labelText?: string,
    ErrorText?: string
}



export const FormInput = memo((props: FormInputProps) => {
    const {
        className,
        type = 'text',
        value,
        placeholder,
        autoFocus,
        disabled,
        htmlFor = '',
        labelText = '',
        ErrorText,
        id,
        ...othersProps
    } = props



    const [inputErrorMessage, setInputErrorMessage] = useState(ErrorText)

    useEffect(() => {
        setInputErrorMessage(ErrorText)
    }, [ErrorText])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputErrorMessage('')
    }

    return (
        <div className={cl.InputWrapper}>
            {labelText && <label className={classNames(cl.Label)} htmlFor={htmlFor}>{labelText}</label>}
            {inputErrorMessage && <span className={cl.ErrorMessage}>{inputErrorMessage}</span>}
            <input
                id={id}
                type={type}
                onChange={onChangeHandler}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                className={classNames(cl.Input, { [cl.InputError]: Boolean(inputErrorMessage) }, [className])}
                {...othersProps}
            />
        </div>
    )
})