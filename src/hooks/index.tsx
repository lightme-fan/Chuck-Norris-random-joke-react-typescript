import React, { useState, useEffect, MouseEvent } from 'react'

const useCustomHooks = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [joke, setJokes] = useState<any>(null)
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [firstName, setFirstName] = useState<string>('Chuck')
  const [lastName, setLastName] = useState<string>('Norris')
  const [inputValue, setInputValue] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [jokeText, setJokeText] = useState<string>('')

  const DEFAULT_API_URL = 'http://api.icndb.com/jokes/random'
  const CATEGORY_API = 'http://api.icndb.com/categories'

  const API = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=`
  const API_URL = `http://api.icndb.com/jokes/random?limitTo=[${category}]`

  const fetchJokes = async (url: RequestInfo): Promise<any> => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function randomJokes(): Promise<any> {
      const newJoke = await fetchJokes(API)
      setJokes(newJoke)
    }
    async function jokeCategory(): Promise<any> {
      const newCat = await fetchJokes(CATEGORY_API)
      // setAllCategories(newCat.value)

      // console.log(newCat)
    }
    randomJokes()
    jokeCategory()
  }, [])

  console.log(joke)

  type HtmlEvent = React.ChangeEvent<HTMLSelectElement>

  const selectOnChange = async (event: HtmlEvent): Promise<any> => {
    const catValue = event.target.value
    const categories = joke.value.categories
    console.log(categories)

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  const handleSubmitDrawJoke = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault()

    if (inputValue === '') {
      const newJoke = await fetchJokes(DEFAULT_API_URL)
      setJokes(newJoke)
    } else {
      const inputValueToArray = inputValue.match(/\S+/g)
      const newJokerName: any = inputValueToArray

      setFirstName(newJokerName[0])
      setLastName(newJokerName[1])
      const newJoke = await fetchJokes(API)
      setJokes(newJoke)
      // setInputValue('')
    }
  }

  const handleSaveButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Saved files')

    console.log(event.target)
  }

  return [
    joke,
    allCategories,
    firstName,
    lastName,
    inputValue,
    category,
    selectOnChange,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
  ]
}

export default useCustomHooks
