import { useState, MouseEvent, memo } from 'react'
import { useStoreActions } from '../../../store'

interface DesktopItem {
  id: string
  type: string
  title: string
}

const desktopItems: DesktopItem[] = [
  {
    id: '1',
    type: 'Disc',
    title: 'Macintosh HD',
  },
  {
    id: '2',
    type: 'Folder',
    title: 'Giant Sur',
  },
  {
    id: '3',
    type: 'PDF',
    title: 'Example.pdf',
  },
]

const Desktop = () => {
  const [focusedDesktopItem, setFocusedDesktopItem] = useState<string>('')
  const closeMenu = useStoreActions((actions) => actions.menuBar.closeMenu)

  const renderItemIcon = (type: string, active: boolean) => {
    let iconSrc: string = ''

    switch (type) {
      case 'Folder':
        iconSrc = '/images/folder-icon.png'
        break
      case 'Disc':
        iconSrc = '/images/disk-icon.png'
        break
      case 'PDF':
        iconSrc = '/images/pdf-icon.png'
        break
      default:
        break
    }

    return (
      <div
        className={`image-wrapper rounded-md border-2 border-transparent border-box px-1 py-2 ${
          active ? 'bg-gray-900 border-gray-500 bg-opacity-30' : ''
        }`}
      >
        <img alt="select-none dock item logo" className="w-12" src={iconSrc} />
      </div>
    )
  }

  const handleClickDesktopItems = (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation()
    setFocusedDesktopItem(id)
    closeMenu()
  }

  const handleClickAroundDesktopItems = () => {
    setFocusedDesktopItem('')
    closeMenu()
  }

  return (
    <div
      className="flex flex-col items-end fixed left-0 top-0 h-screen w-screen border-box pt-6"
      onClick={handleClickAroundDesktopItems}
    >
      {desktopItems.map((item: DesktopItem, i: number) => (
        <button
          data-testid={`desktop-item-${i + 1}`}
          key={item.id}
          className="w-32 flex flex-col items-center my-2 p-1"
          onClick={(e) => handleClickDesktopItems(e, item.id)}
        >
          {renderItemIcon(item.type, focusedDesktopItem === item.id)}
          <h3
            className={`select-none text-xs text-white font-bold whitespace-nowrap text-center mt-0.5 text-shadow-sm pl-2 pr-2 pt-0.5 pb-0.5 rounded-md${
              focusedDesktopItem === item.id ? ' bg-blue-700' : ''
            }`}
          >
            {item.title}
          </h3>
        </button>
      ))}
    </div>
  )
}

export default memo(Desktop)
