import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useCustomHooks = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isItChuckNorrisJoke, setIsItChuckNorrisJoke] = useState<boolean>(true)
  const [joke, setJokes] = useState<any>({})
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [firstName, setFirstName] = useState<string>('Chuck')
  const [lastName, setLastName] = useState<string>('Norris')
  const [inputValue, setInputValue] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [savedJokes, setSaveJokes] = useState<string[]>([])
  const [isInputValid, setIsInputValid] = useState<boolean>(false)
  const [newMultipleJokes, setnewMultipleJokes] = useState<any>(null)
  const [numberOfJokes, setNumberOfJokes] = useState<number>(0)
  const [shouldBeDisable, setshouldBeDisable] = useState<boolean>(false)

  // API
  const CATEGORY_API = 'http://api.icndb.com/categories'
  const RANDOM_JOKE_URL = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  const SPECIFIC_CATEGORY_API = `http://api.icndb.com/jokes/random?limitTo=[${category}]`
  const MULTIPLE_JOKE_API = `http://api.icndb.com/jokes/random/${numberOfJokes}`

  // Fetch API
  const fetchJokes = async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (err) {
      console.log(err)
      setLoading(true)
    }
  }

  // Handle select change
  const handleSelect = async (
    event: React.ChangeEvent<HTMLButtonElement>
  ): Promise<any> => {
    const catValue = event.target.value
    setCategory(catValue)
    const newJoke = await fetchJokes(`${SPECIFIC_CATEGORY_API}`)
    setJokes(newJoke.value)
  }

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputValid(true)
    const input = event.target
    const newValue = input.value
    setInputValue(newValue)

    if (inputValue !== '') {
      setIsInputValid(true)
    }
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
    setLastName(buttonValue.length === 1 ? '' : convertedValueToArray[1])

    // Fetch API
    const newJoke = await fetchJokes(RANDOM_JOKE_URL)
    setJokes(newJoke.value)
  }

  const handleDecrementButton = () => {
    setNumberOfJokes(numberOfJokes - 1)
    if (numberOfJokes === 0) {
      setshouldBeDisable(true)
    }
  }

  const handleIncrementButton = () => {
    setNumberOfJokes(numberOfJokes + 1)
    if (numberOfJokes === 0) {
      setshouldBeDisable(true)
    }
  }

  const handleInputSaveOnchange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumber = event.target.value
    console.log(newNumber)

    // setNumberOfJokes(Number(newNumber))
  }

  // Handle save button
  const handleSaveButton = (event: React.ChangeEvent<HTMLButtonElement>) => {
    const newJoke = event.target.value
    const mapMultipleJokes = newMultipleJokes.map(
      (item: any, index: number) => item.joke
    )
    console.log(mapMultipleJokes)

    savedJokes.every((joke) => joke !== newJoke) &&
      setSaveJokes((joke: string[]) => {
        return [...joke, newJoke]
      })
    return savedJokes.concat(mapMultipleJokes)
  }

  useEffect(() => {
    async function randomJokes(): Promise<any> {
      const newJoke = await fetchJokes(RANDOM_JOKE_URL)
      setJokes(newJoke.value)
    }

    async function jokeCategory(): Promise<any> {
      const newCat = await fetchJokes(CATEGORY_API)
      setAllCategories(newCat.value)
    }

    async function saveMultipleJokes(): Promise<any> {
      if (numberOfJokes > 0 || numberOfJokes <= 100) {
        setshouldBeDisable(true)
        const multipleJokes = await fetchJokes(MULTIPLE_JOKE_API)
        setnewMultipleJokes(multipleJokes.value)
      }
    }
    randomJokes()
    jokeCategory()
    saveMultipleJokes()
  }, [numberOfJokes])

  return {
    shouldBeDisable,
    isItChuckNorrisJoke,
    joke,
    numberOfJokes,
    allCategories,
    firstName,
    lastName,
    isInputValid,
    inputValue,
    category,
    handleSelect,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
    handleDecrementButton,
    handleIncrementButton,
    handleInputSaveOnchange,
  }
}

export default useCustomHooks