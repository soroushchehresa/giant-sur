import Head from 'next/head'
import { createStore, action, StoreProvider } from 'easy-peasy'
import MenuBar from './_components/MenuBar'
import Dock from './_components/Dock'
import Desktop from './_components/Desktop'

const store = createStore({
  menuBar: {
    isMenuOpen: false,
    closeMenu: action((state: any) => {
      if (state.isMenuOpen) {
        state.isMenuOpen = false
      }
    }),
    openMenu: action((state: any) => {
      if (!state.isMenuOpen) {
        state.isMenuOpen = true
      }
    }),
  },
})

const Home = () => (
  <StoreProvider store={store}>
    <Head>
      <title>Giant Sur</title>
    </Head>
    <div className="flex mx-auto w-screen h-screen bg-wallpaper bg-cover overflow-hidden">
      <MenuBar />
      <Desktop />
      <Dock />
    </div>
  </StoreProvider>
)

export default Home
