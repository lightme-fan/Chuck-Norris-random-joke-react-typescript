import React, { createContext, useEffect, useReducer, useState } from 'react'

interface JokeType {
  type: string
  value: { id: string; joke: string; categories: string[] }
}

interface initialType {
  joke: JokeType
}

const initialState: initialType = {
  joke: { type: '', value: { id: '', joke: '', categories: [] } },
}

export const Context = createContext<{ joke: initialType }>({
  joke: initialState,
})

export const ContextProvider: React.FC = ({ children }) => {
  const fetchRandomJoke = async (url: RequestInfo): Promise<any> => {
    const response = await fetch(`${url}`)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchRandomJoke('https://api.icndb.com/jokes/random')
  }, [])

  return <Context.Provider value={{ joke }}>{children}</Context.Provider>
}
