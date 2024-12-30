//UseEffect project guna windowtracker
import React, {useEffect,useState} from 'react'

function WindowTracker () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
          console.log('watching width')
          setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        return function () {
          console.log('cleanup')
          window.removeEventListener('resize', watchWidth)
        }
    }, [])

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg text-white text-center transform transition-all duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold mb-2">Window Width Tracker</h2>
        <div className="text-4xl font-bold">
            {windowWidth}<span className="text-xl ml-2">px</span>
        </div>
    </div>
)
}

export default WindowTracker