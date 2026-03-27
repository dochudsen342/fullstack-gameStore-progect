import React from 'react'
import cl from './Text.module.scss'
import classNames from 'classnames'
import { title } from 'process'

type HeaderTag = 'h1' | 'h2' | 'h3'
type TextSize = 'sizeL' | 'sizeM'

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
    sizeL: 'h1',
    sizeM: 'h2'
}

type TextProps = {
    className?: string,
    title?: string,
    text?: string,
    size?: TextSize,
}

const Text = ({ className, size = 'sizeM', title, text }: TextProps) => {


    const mods = {
        [cl[size]]: true,
    }
    const HeaderTag = mapSizeToHeaderTag[size]

    return (
        <div className={classNames(cl.Text, mods, className)}>
            {title && <HeaderTag>{title}</HeaderTag>}
            {text && <p>{text}</p>}
        </div>
    )
}

export default Text