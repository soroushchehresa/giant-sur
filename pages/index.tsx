import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MenuBar from './_components/MenuBar'
import Dock from './_components/Dock'
import Desktop from './_components/Desktop'

export interface AppContextTypes {
  desktopClickHash: string
  updateDesktopClickHash: () => void
}

export const AppContext = createContext<AppContextTypes>({
  desktopClickHash: '',
  updateDesktopClickHash: () => {},
})

const Home = () => {
  const [desktopClickHash, setDesktopClickHash] = useState<string>(uuidv4())
  const updateDesktopClickHash = () => {
    setDesktopClickHash(uuidv4())
  }
  return (
    <AppContext.Provider value={{ desktopClickHash, updateDesktopClickHash }}>
      <div className="flex mx-auto w-screen h-screen bg-wallpaper bg-cover overflow-hidden">
        <MenuBar />
        <Desktop />
        <Dock />
      </div>
    </AppContext.Provider>
  )
}

export default Home
