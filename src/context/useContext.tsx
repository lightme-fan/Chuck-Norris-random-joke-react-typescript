import React, { createContext, useEffect, useReducer, useState } from 'react'
import useCustomHooks from '../customHooks'
import { fetchJokes, useFetchData } from '../fetchData/useFetchData'

interface InitialStateType {
  loading: boolean
  joke: string
  categories: string[]
  firstName: string
  lastName: string
  inputValue: string
  numberOfJokes: number
}

const initialState: InitialStateType = {
  loading: true,
  joke: '',
  categories: ['Explicit', 'Nerdy'],
  firstName: '',
  lastName: '',
  inputValue: '',
  numberOfJokes: 0,
}
interface ActionType {
  type: 'GET_JOKE'
  payload: string
}
const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'GET_JOKE':
      return { ...state, loading: false, joke: action.payload }

    default:
      return state
  }
}

export const Context = createContext<any | null>(null)

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)

  const fetchRandomJoke = async (): Promise<any> => {
    const response = await fetchJokes('https://api.icndb.com/jokes/random')
    dispatch({ type: 'GET_JOKE', payload: response.value.joke })
  }

  useEffect(() => {
    fetchRandomJoke()
  }, [])

  return (
    <Context.Provider
      value={{
        state,
      }}>
      {children}
    </Context.Provider>
  )
}
