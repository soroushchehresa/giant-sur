const menuItems: string[] = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

const MenuBar = () => (
  <>
    <head>
      <title>Giant Sur</title>
    </head>
    <div className="flex flex-row justify-between w-screen h-6 bg-gray-600 fixed top-0 left-0 px-6 bg-opacity-40">
      <div className="flex items-center">
        <button>
          <img className="w-3.5" src="images/apple-logo.png" />
        </button>
        <button className="ml-6 mr-6">
          <span className="font-bold text-white text-sm">Finder</span>
        </button>
        <div>
          {menuItems.map((item: string) => (
            <button className="mr-5 text-sm">
              <span key={item} className="text-white">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="w-7 mr-5">
          <img className="w-full" src="/images/battery-icon.png" />
        </button>
        <button className="w-4 mr-5">
          <img className="w-full" src="/images/wifi-icon.png" />
        </button>
        <button className="w-4 mr-5">
          <img className="w-full" src="/images/magnifier-icon.png" />
        </button>
        <button className="w-3.5 mr-5">
          <img className="w-full" src="/images/control-center-icon.png" />
        </button>
        <button className="w-3.5 mr-5">
          <img className="w-full" src="/images/siri-logo.png" />
        </button>
        <button className="flex flex-row justify-center items-center">
          <p className="text-sm text-white mr-2">Mon Aug 9</p>
          <p className="text-sm text-white">10:36 PM</p>
        </button>
      </div>
    </div>
  </>
)

export default MenuBar
