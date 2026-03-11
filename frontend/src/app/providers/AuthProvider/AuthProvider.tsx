"use client"
import { useUserStore } from "@/src/entities/User"
import { useEffect, useState } from "react"

function AuthProvider({ children }: any) {
    const userInitAuthData = useUserStore(state => state.initAuthData)

    useEffect(() => {
        userInitAuthData()
    }, [])
    return (
        <>
            {children}
        </>
    )
}

export { AuthProvider }