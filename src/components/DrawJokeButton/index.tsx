import { DrawButton } from '../../styles'

type JokerType = {
  joker: string
}

const DrawJokeButton = ({ joker }: JokerType) => {
  return <DrawButton>Draw a random {joker} joke</DrawButton>
}

export default DrawJokeButton
