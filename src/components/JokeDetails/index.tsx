import { Image, Joke } from '../../styles'
import { JokeContentType } from '../../types'

const JokeDetails = ({
  imageSource,
  jokeText,
  alt,
}: JokeContentType): JSX.Element => {
  return (
    <div>
      <Image src={imageSource} alt={alt} />
      <Joke>"{jokeText}"</Joke>
    </div>
  )
}

export default JokeDetails
