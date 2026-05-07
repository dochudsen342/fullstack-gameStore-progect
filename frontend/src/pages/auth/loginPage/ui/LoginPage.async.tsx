import dynamic from 'next/dynamic'

export const AsyncLoginPage = dynamic(() => import('./LoginPage'))
