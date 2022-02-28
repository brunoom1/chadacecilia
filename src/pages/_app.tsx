import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import "sweetalert2/src/sweetalert2.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
