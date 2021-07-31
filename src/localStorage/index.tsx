import React, { useState, useEffect } from 'react'

function getSavedValue<T>(key: string, initialValue: T): T {
  const stored = localStorage.getItem(key)

  if (stored) {
    return JSON.parse(stored) as T
  }

  return initialValue
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => getSavedValue(key, initialValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue] as const
}
