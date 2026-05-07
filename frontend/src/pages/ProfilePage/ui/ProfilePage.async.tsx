import dynamic from 'next/dynamic'

const LazyProfilePage = dynamic(() => import('./ProfilePage'))

export default LazyProfilePage
