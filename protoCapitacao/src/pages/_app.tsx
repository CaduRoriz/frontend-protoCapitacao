import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import {Sidebar } from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header/>
      <Sidebar/>
      <Component {...pageProps}/>
    </main>
  )
}

export default MyApp
