import { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'
import cl from './AppLink.module.scss'
import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    target?: HTMLAttributeAnchorTarget
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({
    href,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    target,
    ...otherProps
}) => {
    return (
        <Link
            target={target}
            className={classNames(cl.AppLink, { [cl[theme]]: true }, [className])}
            href={href}
            {...otherProps}
        >
            {children}
        </Link>
    )
}