import React, { useState, useEffect } from 'react'
import axios from 'axios'

export interface JokeType {
  type?: string
  value?: { id: string; joke: string; categories: string[] }
}

interface FetchType {
  category: string
  firstName: string
  lastName: string
  // numberOfJokes: number
}

// const CATEGORY_API = 'https://api.icndb.com/categories'
// const RANDOM_JOKE_URL = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
// const SPECIFIC_CATEGORY_API = `https://api.icndb.com/jokes/random?limitTo=[${category}]`
// const MULTIPLE_JOKE_API = `https://api.icndb.com/jokes/random/${numberOfJokes}`

export const fetchJokes = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url)
    return await response.data
  } catch (err) {
    console.log(err)
  }
}

export const useFetchData = () => {
  const [data, setData] = useState<any | null>()
  const [fetch, setFetch] = useState<FetchType | null>({
    category: '',
    firstName: '',
    lastName: '',
  })
  const fetchRandomJoke = async (): Promise<any> => {
    const response = await fetchJokes('https://api.icndb.com/jokes/random')
    setData(response)
  }

  const fetchJokeByCategory = async (): Promise<any> => {
    const response = await fetchJokes(
      `https://api.icndb.com/jokes/random?limitTo=[${fetch?.category}]`
    )
    setData(response)
  }

  const fetchJokeByName = async (): Promise<any> => {
    const response = await fetchJokes(
      `https://api.icndb.com/jokes/random?firstName=${fetch?.firstName}&lastName=${fetch?.lastName}`
    )
    setData(response)
  }

  return {
    data,
    fetch,
    setFetch,
    fetchRandomJoke,
    fetchJokeByCategory,
    fetchJokeByName,
  }
}
