import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useCustomHooks = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [joke, setJokes] = useState<any>({})
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [firstName, setFirstName] = useState<string>('Chuck')
  const [lastName, setLastName] = useState<string>('Norris')
  const [inputValue, setInputValue] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [savedJokes, setSaveJokes] = useState<string[]>([])
  const [isInputValid, setIsInputValid] = useState<boolean>(false)
  const [newMultipleJokes, setNewMultipleJokes] = useState<any>(null)
  const [number, setNumber] = useState<any>(0)
  const [numberOfJokes, setNumberOfJokes] = useState<number>(0)
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)

  // API
  const CATEGORY_API = 'https://api.icndb.com/categories'
  const RANDOM_JOKE_URL = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  const SPECIFIC_CATEGORY_API = `https://api.icndb.com/jokes/random?limitTo=`
  const MULTIPLE_JOKE_API = `https://api.icndb.com/jokes/random/${numberOfJokes}`

  // Fetch API
  const fetchJokes = async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  // Handle select change
  const handleSelect = async (
    event: React.ChangeEvent<HTMLButtonElement>
  ): Promise<any> => {
    const catValue = event.target.value
    if (catValue === 'explicit') {
      setCategory('')
    } else {
      setCategory(catValue)
    }
    const prevJoke = await fetchJokes(RANDOM_JOKE_URL)
    const newJoke = await fetchJokes(`${SPECIFIC_CATEGORY_API}[${category}]`)
    const joke =
      newJoke.value === 'No such categories='
        ? setJokes(prevJoke.value)
        : setJokes(newJoke.value)
    return joke
  }

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputValid(true)
    const newValue = event.target.value
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
    console.log(lastName)
    console.log(firstName)

    // Fetch API
    const newJoke = await fetchJokes(RANDOM_JOKE_URL)
    if (newJoke.value.joke.include('Chuck Norris')) {
      setJokes(newJoke.value)
    }
    setJokes(newJoke.value)
  }

  const handleDecrementButton = () => {
    setIsButtonClicked(true)
    setNumber((num: number) => (num > 0 ? number - 1 : 0))
  }

  const handleIncrementButton = () => {
    setNumber((prev: number) => prev + 1)
    setIsButtonClicked(true)
  }

  const handleInputSaveOnchange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newNumber = event.target.value
    console.log(newNumber)
  }

  // Handle save button
  const handleSaveButton = (event: React.ChangeEvent<HTMLButtonElement>) => {
    const newJoke = event.target.value
    const mapMultipleJokes = newMultipleJokes.map(
      (item: any, index: number) => item.joke
    )
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
      setLoading(false)
    }

    async function jokeCategory(): Promise<any> {
      const newCat = await fetchJokes(CATEGORY_API)
      setAllCategories(newCat.value)
    }

    async function saveMultipleJokes(): Promise<any> {
      if (numberOfJokes > 0 || numberOfJokes <= 100) {
        setNumberOfJokes(number)
        const multipleJokes = await fetchJokes(MULTIPLE_JOKE_API)
        setNewMultipleJokes(multipleJokes.value)
      }
    }
    randomJokes()
    jokeCategory()
    saveMultipleJokes()
    // eslint-disable-next-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfJokes])

  return {
    loading,
    joke,
    number,
    numberOfJokes,
    allCategories,
    isButtonClicked,
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
