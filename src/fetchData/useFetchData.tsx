import React, { useState, useEffect } from 'react'

export interface JokeType {
  type?: string
  value?: { id: string; joke: string; categories: string[] }
}

export const useFetchData = () => {
  const [data, setData] = useState<any | null>()
  const fetchRandomJoke = async (): Promise<any> => {
    const response = await fetch('https://api.icndb.com/jokes/random')
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    fetchRandomJoke()
  }, [])

  return [data]
}
