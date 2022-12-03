import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full bg-[url("/images/bg.svg")] bg-fixed bg-no-repeat relative bg-cover'>
      <Component {...pageProps} />
    </div>
  )
}
