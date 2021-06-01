import { DrawButton } from '../../styles'

type JokerType = {
  id: string
  joker: string
  value: string
}

const DrawJokeButton = ({ id, joker, value }: JokerType) => {
  return (
    <DrawButton id={id} value={value}>
      Draw a random {joker} joke
    </DrawButton>
  )
}

export default DrawJokeButton
