import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppProvier from '../components/context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <AppProvier>
      <div><Component {...pageProps} /></div>
    </AppProvier>
}

export default MyApp
