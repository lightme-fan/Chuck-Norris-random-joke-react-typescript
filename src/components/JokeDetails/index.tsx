import React from 'react'
import { Image, Joke } from '../../styles'

type JokeContent = {
  imageSource: any
  jokeText: string | undefined
  alt: string
}

const JokeDetails = ({
  imageSource,
  jokeText,
  alt,
}: JokeContent): JSX.Element => {
  return (
    <div>
      <Image src={imageSource} alt={alt} />
      <Joke>"{jokeText}"</Joke>
    </div>
  )
}

export default JokeDetails
