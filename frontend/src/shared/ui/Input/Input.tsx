
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import cl from './Input.module.scss'
import classNames from 'classnames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    type?: string
    placeholder?: string
    onChange?: (value: string) => void
    disabled?: boolean,
    htmlFor?: string,
    labelText?: string,
    ErrorText?: string
}



export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
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
        onChange?.(e.target.value)
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