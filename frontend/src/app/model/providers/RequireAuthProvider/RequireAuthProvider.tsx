'use client'
import { getUserAuthData, useUserStore } from "@/src/entities/User"
import { Spiner } from "@/src/shared/ui/Spiner/Spiner"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

interface RequireAuthProps {
    children: ReactNode
}

export const RequireAuthProvider = ({ children }: RequireAuthProps) => {
    const auth = useUserStore(getUserAuthData)
    const isMounted = useUserStore(state => state._isMounted)
    const router = useRouter()

    useEffect(() => {
        if (isMounted && !auth) {
            router.replace('/')
        }
    }, [isMounted, auth, router])

    return auth ? children : <Spiner />
}