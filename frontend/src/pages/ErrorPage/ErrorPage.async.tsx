import dynamic from 'next/dynamic'

const LazyErrorPage = dynamic(() => import('./ErrorPage'))

export default LazyErrorPage
