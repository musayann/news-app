import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='w-5/6 mx-auto py-12'>
    <Component {...pageProps} />
  </div>
}
