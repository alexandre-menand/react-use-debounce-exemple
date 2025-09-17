import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handle)
    }
  }, [value, delay])

  return debounceValue
}
