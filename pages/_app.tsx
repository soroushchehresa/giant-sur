import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvider } from 'easy-peasy'
import { useStore } from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.ssrStoreState)
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
export default MyApp
