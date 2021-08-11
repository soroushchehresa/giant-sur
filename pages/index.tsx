import MenuBar from './_components/MenuBar'
import Dock from './_components/Dock'
import Desktop from './_components/Desktop'

const Home = () => (
  <div className="flex mx-auto w-screen h-screen bg-wallpaper bg-cover overflow-hidden">
    <MenuBar />
    <Desktop />
    <Dock />
  </div>
)

export default Home
