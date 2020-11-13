function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset, // pageYOffset - кол-во пикселей на сколько проскролено окно
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
    width: box.width,
    height: box.height,
  };
}


// Sample:
// ...
const [coords, setCoords] = useState({})
//..
useEffect(() => {
  if (isOpen) {
    const modal = document.querySelector('.modal')
    if (modal && Object.keys(coords).length === 0) {
      setCoords(() => getCoords(modal))
    }
  }
}, [isOpen, coords])

//..
  <div className='modal' style={coords.left ? { left: coords.left - coords.width / 2, top: coords.top - coords.height / 2 } : {}}>
    {/* ... */}
  </div>
// ...

