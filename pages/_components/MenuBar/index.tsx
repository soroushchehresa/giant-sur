import { useState, useContext, useEffect, MouseEvent } from 'react'
import { AppContext } from '../../index'
import Menu from './_components/Menu'

const menuItems: string[] = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

const MenuBar = () => {
  const [currentActiveMenu, setCurrentActiveMenu] = useState<string>('')
  const { desktopClickHash, updateDesktopClickHash } = useContext(AppContext)

  useEffect(() => {
    setCurrentActiveMenu('')
  }, [desktopClickHash])

  return (
    <div
      onClick={updateDesktopClickHash}
      className="border-box flex flex-row justify-between w-screen h-6 bg-gray-600 fixed top-0 left-0 bg-opacity-40 border-b border-gray-500 z-10"
    >
      <div className="flex items-center">
        <button
          className="pl-4 pr-1 ml-1.5 rounded-sm relative cursor-pointer"
          onClick={(e: MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            setCurrentActiveMenu((past) => (past !== 'Apple' ? 'Apple' : ''))
          }}
          onMouseEnter={() => {
            if (currentActiveMenu && currentActiveMenu !== 'Apple') {
              setCurrentActiveMenu('Apple')
            }
          }}
        >
          <img alt="apple icon" className="w-3.5" src="images/apple-logo.png" />
          {currentActiveMenu === 'Apple' && (
            <Menu
              title={currentActiveMenu}
              items={[
                {
                  title: 'About This Mac',
                  separator: true,
                  rightLabel: '',
                },
                {
                  title: 'System Preferences',
                  separator: false,
                  rightLabel: '',
                },
                {
                  title: 'App Store...',
                  separator: true,
                  rightLabel: '8 updates',
                },
                {
                  title: 'Recent Items',
                  separator: true,
                  rightLabel: '',
                },
                {
                  title: 'Force Quit',
                  separator: true,
                  rightLabel: '⌥⌘⎋',
                },
                {
                  title: 'Sleep',
                  separator: false,
                  rightLabel: '',
                },
                {
                  title: 'Restart...',
                  separator: false,
                  rightLabel: '',
                },
                {
                  title: 'Shut Down...',
                  separator: true,
                  rightLabel: '',
                },
                {
                  title: 'Lock Screen',
                  separator: false,
                  rightLabel: '^⌘Q',
                },
                {
                  title: 'Log Out Soroush...',
                  separator: false,
                  rightLabel: '⇧⌘Q',
                },
              ]}
            />
          )}
        </button>
        <button
          className="pl-4 relative"
          onClick={(e: MouseEvent<HTMLElement>) => {
            e.stopPropagation()
            setCurrentActiveMenu((past) => (past !== 'Finder' ? 'Finder' : ''))
          }}
          onMouseEnter={() => {
            if (currentActiveMenu && currentActiveMenu !== 'Finder') {
              setCurrentActiveMenu('Finder')
            }
          }}
        >
          <span className="font-bold text-white text-sm">Finder</span>
          {currentActiveMenu === 'Finder' && (
            <Menu
              title={currentActiveMenu}
              items={[
                {
                  title: 'About Finder',
                  separator: true,
                  rightLabel: '',
                },
                {
                  title: 'Preferences...',
                  separator: true,
                  rightLabel: '⌘ ,',
                },
                {
                  title: 'Empty Trash...',
                  separator: true,
                  rightLabel: '⇧⌘⌫',
                },
                {
                  title: 'Services',
                  separator: true,
                  rightLabel: '',
                },
                {
                  title: 'Hide Finder',
                  separator: false,
                  rightLabel: '⌘H',
                },
                {
                  title: 'Hide Others',
                  separator: false,
                  rightLabel: '⌥⌘H',
                },
                {
                  title: 'Show All',
                  separator: false,
                  rightLabel: '',
                },
              ]}
            />
          )}
        </button>
        <div>
          {menuItems.map((item: string) => (
            <button
              key={item}
              className="pl-5 text-sm relative"
              onClick={(e: MouseEvent<HTMLElement>) => {
                e.stopPropagation()
                setCurrentActiveMenu((past) => (past !== item ? item : ''))
              }}
              onMouseEnter={() => {
                if (currentActiveMenu && currentActiveMenu !== item) {
                  setCurrentActiveMenu(item)
                }
              }}
            >
              <span className="text-white">{item}</span>
              {currentActiveMenu === item && (
                <Menu
                  title={currentActiveMenu}
                  items={[
                    {
                      title: `About ${item}`,
                      separator: true,
                      rightLabel: '',
                    },
                    {
                      title: 'Preferences...',
                      separator: false,
                      rightLabel: `⌘P${item.split('')[0]}`,
                    },
                  ]}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="w-7 mr-5">
          <img
            alt="menubar icon"
            className="w-full"
            src="/images/battery-icon.png"
          />
        </button>
        <button className="w-4 mr-5">
          <img
            alt="menubar icon"
            className="w-full"
            src="/images/wifi-icon.png"
          />
        </button>
        <button className="w-4 mr-5">
          <img
            alt="menubar icon"
            className="w-full"
            src="/images/magnifier-icon.png"
          />
        </button>
        <button className="w-3.5 mr-5">
          <img
            alt="menubar icon"
            className="w-full"
            src="/images/control-center-icon.png"
          />
        </button>
        <button className="w-3.5 mr-5">
          <img
            alt="menubar icon"
            className="w-full"
            src="/images/siri-logo.png"
          />
        </button>
        <button className="flex flex-row justify-center items-center">
          <p className="text-sm text-white mr-2">Mon Aug 9</p>
          <p className="text-sm text-white mr-5">10:36 PM</p>
        </button>
      </div>
    </div>
  )
}

export default MenuBar
