const desktopItems: { type: string; title: string }[] = [
  {
    type: 'Disc',
    title: 'Macintosh HD',
  },
  {
    type: 'Folder',
    title: 'Giant Sur',
  },
  {
    type: 'PDF',
    title: 'Example.pdf',
  },
]

const Desktop = () => {
  const renderItemIcon = (type: string) => {
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

    return <img className="w-12" src={iconSrc} />
  }
  return (
    <div className="flex flex-col items-end fixed left-0 top-0 h-screen w-screen border-box pt-6">
      {desktopItems.map((item: { type: string; title: string }) => (
        <button className="w-32 flex flex-col items-center my-4">
          {renderItemIcon(item.type)}
          <h3 className="text-xs text-white font-bold whitespace-nowrap text-center mt-2 text-shadow-sm">
            {item.title}
          </h3>
        </button>
      ))}
    </div>
  )
}

export default Desktop
