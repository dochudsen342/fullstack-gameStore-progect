import dynamic from 'next/dynamic'

const LazyRegisterPage = dynamic(() => import('./RegisterPage'))
export default LazyRegisterPage
