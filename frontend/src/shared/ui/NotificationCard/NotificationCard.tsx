'use client'
import React from 'react'
import cl from './NotificationCard.module.scss'
import classNames from 'classnames'
import { Button } from '@headlessui/react'

interface NotificationCardProps {
    className?: string
    message?: string
    onClose?: () => void
    isEdit: boolean
}

const NotificationCard = ({
    className,
    message = 'Сохранено',
    onClose,
    isEdit,
}: NotificationCardProps) => {
    const mods = {
        [cl.NotificationShow]: isEdit,
    }
    return (
        <div className={classNames(cl.NotificationCard, mods, [className])}>
            <span className={cl.message}>{message}</span>
            {onClose && (
                <Button onClick={onClose} className={cl.closeButton}>
                    ×
                </Button>
            )}
        </div>
    )
}

export default NotificationCard
