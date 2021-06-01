import React, { useState, useEffect, MouseEvent, createContext } from 'react'
import axios from 'axios'

interface JokeType {
  categories?: string[] | undefined
  id: number
  joke: string
}

// type StateType = {
//   loading: boolean
//   joke: JokeType
//   allCategories: string[]
//   setAllCategories: string
//   firstName: string
//   lastName: string
//   inputValue: string
//   category: string
//   savedJokes: string
//   isInputValid: string
// }

// const initialState: StateType = {
//   loading: false,
//   joke: {},
//   allCategories: [],
//   setAllCategories: '',
//   firstName: '',
//   lastName: '',
//   inputValue: '',
//   category: '',
//   savedJokes: '',
//   isInputValid: '',
// }

// const Context = createContext(initialState)

const useCustomHooks = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [joke, setJokes] = useState<Partial<JokeType>>({})
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [savedJokes, setSaveJokes] = useState<string[]>([])
  const [isInputValid, setIsInputValid] = useState<boolean>(false)

  // API
  const DEFAULT_ENDPOINT = 'http://api.icndb.com/jokes/random'
  const CATEGORY_API = 'http://api.icndb.com/categories'
  const MAIN_CHARACTER_API = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  const SPECIFIC_CATEGORY_API = `http://api.icndb.com/jokes/random?limitTo=[${category}]`
  const MULTIPLE_JOKE_API = `http://api.icndb.com/jokes/random/3`

  // Fetch API
  const fetchJokes = async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url)
      console.log(response.data)
      return response.data
    } catch (err) {
      console.log(err)
      setLoading(true)
    }
  }

  useEffect(() => {
    async function randomJokes(): Promise<any> {
      const newJoke = await fetchJokes(MAIN_CHARACTER_API)
      setJokes(newJoke.value)
    }
    async function jokeCategory(): Promise<any> {
      const newCat = await fetchJokes(CATEGORY_API)
      setAllCategories(newCat.value)
    }

    randomJokes()
    jokeCategory()
  }, [])

  // Handle select change
  const selectOnChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ): Promise<any> => {
    const catValue = event.target.value
    const categories = joke?.categories

    console.log(allCategories)
    console.log(categories?.includes(catValue))

    if (categories === undefined) {
      const newJoke = await fetchJokes(DEFAULT_ENDPOINT)
      setJokes(newJoke)
    } else {
      setCategory(catValue)
      const newJoke = await fetchJokes(SPECIFIC_CATEGORY_API)
      setJokes(newJoke)
    }
  }

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputValid(true)
    const input = event.target
    const newValue = input.value
    setInputValue(newValue)
  }

  // Handle submit
  const handleSubmitDrawJoke = async (
    e: React.SyntheticEvent
  ): Promise<any> => {
    e.preventDefault()

    // Type of event target
    const target = e.target as typeof e.target & {
      drawJokeButton: { value: string }
    }

    // Value from button
    const buttonValue = target.drawJokeButton.value

    // Convert the value into an array of string
    const convertedValueToArray = buttonValue.split(' ')

    // Set Name
    setFirstName(convertedValueToArray[0])
    setLastName(
      convertedValueToArray.length === 1 ? '' : convertedValueToArray[1]
    )

    // Fetch API
    const newJoke = await fetchJokes(MAIN_CHARACTER_API)
    setJokes(newJoke)
  }

  const handleDecrementButton = () => {
    console.log('Decrement')
  }

  const handleIncrementButton = () => {
    console.log('Increment')
  }

  // Handle save button
  const handleSaveButton = (event: React.ChangeEvent<HTMLButtonElement>) => {
    const newJoke = event.target.value
    savedJokes.every((joke) => joke !== newJoke) &&
      setSaveJokes((joke: string[]) => {
        return [...joke, newJoke]
      })

    console.log(savedJokes)
  }

  return {
    joke,
    allCategories,
    firstName,
    lastName,
    isInputValid,
    inputValue,
    category,
    selectOnChange,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
    handleDecrementButton,
    handleIncrementButton,
  }
}

export default useCustomHooks
