import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header/>
      
      <div className="sidebar-main">
        <Component {...pageProps}/>
      </div>
      
    </main>
  )
}

export default MyApp
