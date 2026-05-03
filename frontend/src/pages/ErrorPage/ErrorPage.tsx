import React from 'react'
import cl from './ErrorPage.module.scss'
import classNames from 'classnames'
import Button from '../../shared/ui/Button/Button'

interface ErrorPageProps {
    className?: string
    title?: string
    message?: string
    onRetry?: () => void
    onErrorBack?: () => void
}

export const ErrorPage = ({
    className,
    title = 'Произошла ошибка',
    message = 'Попробуйте обновить страницу',
    onRetry,
}: ErrorPageProps) => {
    return (
        <div className={classNames(cl.errorPage, {}, [className])}>
            <div className={cl.errorContent}>
                <div className={cl.errorIcon}>!</div>
                <h1 className={cl.errorTitle}>{title}</h1>
                <p className={cl.errorMessage}>{message}</p>
                <div className={cl.buttonGroup}>
                    {(
                        <Button onClick={onRetry} className={cl.retryButton}>
                            Попробовать снова
                        </Button>
                    )}
                    {(
                        <Button

                            className={cl.backButton}
                        >
                            Назад
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
