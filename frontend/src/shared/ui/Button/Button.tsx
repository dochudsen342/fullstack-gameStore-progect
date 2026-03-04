import React, { ButtonHTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react'
import cl from './Button.module.scss'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode
}

const Button = ({ className, children, ...otherProps }: ButtonProps) => {

    return (
        <button {...otherProps} className={classNames(cl.Button, [className])}>
            {children}
        </button>
    )
}

export default Button