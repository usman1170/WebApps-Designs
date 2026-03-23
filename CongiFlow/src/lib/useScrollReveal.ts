import { useEffect, useState } from 'react'

export function useScrollReveal(delay = 0) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsVisible(true), delay)

    return () => window.clearTimeout(timeoutId)
  }, [delay])

  return isVisible
}
