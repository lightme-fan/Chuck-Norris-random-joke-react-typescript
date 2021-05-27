import React from 'react'
type JokeContent = { imageSource: string; jokeText: string }

const JokeDetails = ({ imageSource, jokeText }: JokeContent): JSX.Element => {
  return (
    <div>
      <img src={imageSource} />
      <p>{jokeText}</p>
    </div>
  )
}

export default JokeDetails
