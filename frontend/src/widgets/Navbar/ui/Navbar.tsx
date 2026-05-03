'use client'
import React, { useActionState } from 'react'
import styles from './Navbar.module.scss'
import Button from '@/src/shared/ui/Button/Button'
import { AppLink } from '@/src/shared/ui/Link/AppLink'
import { Input } from '@/src/shared/ui/Input/ui/Input'
import { getUserAuthData, useUserStore } from '@/src/entities/User'
import Dropdown from '@/src/shared/ui/Dropdown/Dropdown'
import { getUserLogout } from '@/src/entities/User/model/selectors/getUserLogout'

interface NavbarProps {
    className?: string,
}

const Navbar = ({ className }: NavbarProps) => {

    const userAuthData = useUserStore(getUserAuthData)
    const logout = useUserStore(getUserLogout)
    const dropdownTrigger =
        (<AppLink href={''} className={styles.loginButton} >
            <span>👤</span>
            Профиль
        </AppLink>)

    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <AppLink href="/" className={styles.logo}>GameStore</AppLink>
                <Button className={styles.catalogButton}>
                    <span className={styles.catalogIcon}>☰</span>
                    Каталог
                </Button>
            </div>

            <div className={styles.searchSection} >
                <Input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Найти товар"

                />
            </div>

            <aside className={styles.actions}>
                <AppLink href="/favorites" className={styles.actionItem} >
                    <span className={styles.actionIcon}>❤️</span>
                    <span>Избранное</span>
                </AppLink>

                <AppLink href="/orders" className={styles.actionItem} >
                    <span className={styles.actionIcon}>📦</span>
                    <span>Заказы</span>
                </AppLink>

                {userAuthData ? <Dropdown triger={dropdownTrigger} items={
                    [
                        { content: 'Профиль', href: `/profile/${userAuthData?.id}`, },
                        { content: 'Заказы', href: '/2' },
                        { content: 'Выход', href: '/', onClick: logout },

                    ]
                } /> :

                    <AppLink href={'/login'} className={styles.loginButton} >
                        <span>👤</span>
                        Войти
                    </AppLink>}
            </aside>
        </header>
    )
}

export default Navbar