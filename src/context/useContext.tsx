import React, { createContext, useEffect, useReducer, useState } from 'react'
interface ValueType {
  id: string
  joke: string
  categories: string[]
}
interface InitialType {
  type: string
  value: ValueType
}

const initialState: InitialType = {
  type: '',
  value: { id: '', joke: '', categories: [] },
}

export const Context = createContext<any>(null)

export const ContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialState)
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}
