import { ActionType } from '../types'
import { initialState } from './useContext'

export const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'GET_JOKE':
      return { ...state, loading: false, joke: action.payload }

    case 'GET_CATEGORY':
      return { ...state, category: action.payload }

    case 'HANDLE_INPUT_CHANGE':
      return { ...state, inputValue: action.payload }

    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.payload }

    case 'SET_LAST_NAME':
      return { ...state, lastName: action.payload }

    case 'HANDLE_SUBMIT':
      return {
        ...state,
        firstName: action.payload,
      }

    case 'NUMBER_OF_JOKE':
      return { ...state, numberOfJokes: action.payload }

    case 'INCREMENT_NUMBER':
      return {
        ...state,
        numberOfJokes: action.payload + 1,
      }

    case 'DECREMENT_NUMBER': {
      const count =
        Number(action.payload) > -1
          ? Number(action.payload) - 1
          : Number(action.payload)
      return {
        ...state,
        numberOfJokes: count,
      }
    }

    case 'SAVE_JOKES':
      return {
        ...state,
        savedJokes: [...state.savedJokes, action.payload],
      }

    default:
      return state
  }
}
