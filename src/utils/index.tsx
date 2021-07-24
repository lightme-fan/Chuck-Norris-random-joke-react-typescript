import axios from 'axios'

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const fetchJokes = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url)
    return await response.data
  } catch (err) {
    console.log(err)
  }
}
