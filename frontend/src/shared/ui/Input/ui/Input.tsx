
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
        id,
        ...othersProps
    } = props


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={cl.InputWrapper}>
            <input
                id={id}
                type={type}
                onChange={onChangeHandler}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                className={classNames(cl.Input, {}, [className])}
                {...othersProps}
            />
        </div>
    )
})