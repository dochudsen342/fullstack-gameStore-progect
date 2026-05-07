import dynamic from 'next/dynamic'

export const AsyncErrorPage = dynamic(() => import('./ErrorPage'))
