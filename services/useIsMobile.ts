import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    const { isMobile } = require('react-device-detect')
    setIsTouch(isMobile)
  }, [])

  return isTouch
}
