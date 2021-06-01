import React, { useState, useEffect, MouseEvent } from 'react'

const useCustomHooks = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [joke, setJokes] = useState<any>(null)
  const [allCategories, setAllCategories] = useState<any>(null)
  const [firstName, setFirstName] = useState<string>('Chuck')
  const [lastName, setLastName] = useState<string>('Norris')
  const [inputValue, setInputValue] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [savedJokes, setSaveJokes] = useState<string[]>([])
  const [isInputValid, setIsInputValid] = useState<boolean>(false)

  // API
  const DEFAULT_API_URL = 'http://api.icndb.com/jokes/random'
  const CATEGORY_API = 'http://api.icndb.com/categories'
  const API = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  const API_URL = `http://api.icndb.com/jokes/random?limitTo=[${category}]`

  // Fetch API
  const fetchJokes = async (url: RequestInfo): Promise<any> => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      setLoading(true)
    }
  }

  useEffect(() => {
    async function randomJokes(): Promise<any> {
      const newJoke = await fetchJokes(API)
      setJokes(newJoke)
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
    const categories = joke.value.categories
    const isCategory = categories.includes(catValue)

    if (isCategory === false) {
      const newJoke = await fetchJokes(API)
      setJokes(newJoke)
    } else {
      setCategory(catValue)
      const newJoke = await fetchJokes(API_URL)
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
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault()

    if (inputValue === '') {
      setFirstName('Chuck')
      setLastName('Norris')
      const newJoke = await fetchJokes(DEFAULT_API_URL)
      setJokes(newJoke)
    } else {
      const inputValueToArray = inputValue.match(/\S+/g)
      const newJokerName: any = inputValueToArray
      setFirstName(newJokerName[0])
      setLastName(newJokerName[1])
      const newJoke = await fetchJokes(API)
      setJokes(newJoke)
    }
  }

  // Handle save button
  const handleSaveButton = (event: React.ChangeEvent<HTMLButtonElement>) => {
    const newJoke = event.target.value
    setSaveJokes((joke: string[]) => [...joke, newJoke])
  }

  return [
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
  ]
}

export default useCustomHooks
