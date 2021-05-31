import { DrawButton } from '../../styles'

type JokerType = {
  joker: string
}

const DrawJokeButton = ({ joker }: JokerType) => {
  return <DrawButton>Draw a {joker} joke</DrawButton>
}

export default DrawJokeButton
