'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import cl from './Dropdows.module.scss'

export type DropdownItem = {
    unavailable?: boolean
    content: ReactNode
    onClick?: () => void
    href?: string // сделать ссылку обязательным
}

type DropdownProps = {
    className?: string,
    items: DropdownItem[],
    triger: ReactNode,
}

export default function Dropdown({ className, items, triger }: DropdownProps) {
    return (
        <div className={cl['dropdown-container']}>
            <Menu as="div" className={cl["dropdown-menu-container"]}>
                <div>
                    <MenuButton className={cl['dropdown-button']}>
                        {triger}
                    </MenuButton>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems className={cl['dropdown-items']}>
                        <div className={cl['dropdown-item-group']}>

                            {items.map(item => (<MenuItem key={item.href}>
                                {({ focus }) => (
                                    <button
                                        onClick={item?.onClick}
                                        className={cl['dropdown-item']}
                                    >
                                        {item.content}
                                    </button>
                                )}
                            </MenuItem>))}

                        </div>

                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}