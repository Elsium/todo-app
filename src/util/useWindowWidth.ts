import { useState, useEffect } from 'react'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.screen.width)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth
}

export default useWindowWidth