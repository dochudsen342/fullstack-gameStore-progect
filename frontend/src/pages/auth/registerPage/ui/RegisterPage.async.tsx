import dynamic from 'next/dynamic'

export const AsyncRegisterPage = dynamic(() => import('./RegisterPage'))
