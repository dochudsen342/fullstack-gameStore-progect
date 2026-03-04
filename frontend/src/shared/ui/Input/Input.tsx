import { ChangeEvent, InputHTMLAttributes, memo } from 'react'
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
    labelText?: string
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
        id,
        ...outherProps
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }


    return (
        <div className={cl.InputWrapper}>
            {labelText && <label className={classNames(cl.Label)} htmlFor={htmlFor}>{labelText}</label>}
            <input
                id={id}
                type={type}
                onChange={onChangeHandler}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                className={classNames(cl.Input, [className])}
                {...outherProps}
            />
        </div>
    )
})