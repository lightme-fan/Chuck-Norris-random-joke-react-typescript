import React from 'react'
import { Image } from '../../styles'

type JokeContent = { imageSource: any; jokeText: string; alt: string }

const JokeDetails = ({
  imageSource,
  jokeText,
  alt,
}: JokeContent): JSX.Element => {
  return (
    <div>
      <Image src={imageSource} alt={alt} />
      <p>{jokeText}</p>
    </div>
  )
}

export default JokeDetails
