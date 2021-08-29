import { memo } from 'react'

interface MenuItem {
  title: string
  separator: boolean
  rightLabel: string | null
}

interface Props {
  items: MenuItem[]
  title: string
}

const Menu = ({ items, title }: Props) => (
  <div
    className={`absolute bg-gray-700 bg-opacity-50 p-1 rounded-md left-0 border border-gray-500 border-box${
      title === 'Apple' ? ' top-5' : ''
    }`}
  >
    {items &&
      items.map((item: MenuItem) => (
        <div key={item.title}>
          <a
            key={item.title}
            className="text-white px-2 py-0.5 text-sm whitespace-nowrap text-left rounded-md w-full block hover:bg-blue-600"
          >
            <p className="flex justify-between">
              <span className="">{item.title}</span>
              <span className="text-gray-400 ml-16">{item.rightLabel}</span>
            </p>
          </a>
          {item.separator && (
            <span className="block h-0.5 border-b border-gray-500 my-1 mx-2 text-xs" />
          )}
        </div>
      ))}
  </div>
)

export default memo(Menu)
