import React, { createContext, useEffect, useReducer } from 'react'
import { InitialStateType } from '../types'
import { capitalizeFirstLetter, fetchJokes } from '../utils/index'
import { reducer } from './reducer'

export const initialState: InitialStateType = {
  loading: true,
  joke: '',
  categories: ['Custom joke', 'Nerdy'],
  firstName: 'Chuck',
  lastName: 'Norris',
  inputValue: '',
  numberOfJokes: 0,
  category: '',
  savedJokes: [],
}

export const Context = createContext<any | null>(null)

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchRandomJoke = async (): Promise<any> => {
    const response = await fetchJokes(
      'https://api.icndb.com/jokes/random?exclude=[explicit]'
    )
    dispatch({ type: 'GET_JOKE', payload: response.value.joke })
  }

  useEffect(() => {
    fetchRandomJoke()
  }, [])

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLButtonElement>
  ): Promise<any> => {
    dispatch({
      type: 'GET_CATEGORY',
      payload: capitalizeFirstLetter(event.target.value),
    })
    const category =
      event.target.value === 'custom joke' ? 'nerdy' : event.target.value

    const response = await fetchJokes(
      `https://api.icndb.com/jokes/random?limitTo=${category}`
    )
    dispatch({ type: 'GET_JOKE', payload: response.value.joke })
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'HANDLE_INPUT_CHANGE', payload: event.target.value })
  }

  const handleDrawButton = async (e: React.SyntheticEvent): Promise<any> => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      drawJokeButton: { value: string }
    }
    const buttonValue = target.drawJokeButton.value.split(' ')

    dispatch({ type: 'SET_FIRST_NAME', payload: buttonValue[0] })
    dispatch({ type: 'SET_LAST_NAME', payload: buttonValue[1] })
    const response = await fetchJokes(
      `https://api.icndb.com/jokes/random?firstName=${
        buttonValue[0]
      }&lastName=${buttonValue[1] === undefined ? '' : buttonValue[1]}`
    )

    dispatch({ type: 'GET_JOKE', payload: response.value.joke })
  }

  const handleInputNumberOfJoke = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: 'NUMBER_OF_JOKE',
      payload: event.target.value,
    })
  }

  const incrementNumber = () => {
    dispatch({ type: 'INCREMENT_NUMBER', payload: state.numberOfJokes })
  }

  const decrementNumber = () => {
    dispatch({
      type: 'DECREMENT_NUMBER',
      payload: state.numberOfJokes,
    })
  }

  const handleSaveButton = async (): Promise<any> => {
    const response = await fetchJokes(
      `https://api.icndb.com/jokes/random/${state.numberOfJokes}`
    )
    dispatch({ type: 'SAVE_JOKES', payload: response.value })
    alert(
      `Congratulation, you have ${response.value.length} joke${
        response.value.length === 1 ? '' : 's'
      } saved on local storage!`
    )
  }

  return (
    <Context.Provider
      value={{
        state,
        handleSelectChange,
        handleInput,
        handleDrawButton,
        handleInputNumberOfJoke,
        incrementNumber,
        decrementNumber,
        handleSaveButton,
      }}>
      {children}
    </Context.Provider>
  )
}
