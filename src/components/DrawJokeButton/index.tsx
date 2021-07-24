import { DrawButton } from '../../styles'
import { JokerType } from '../../types'

const DrawJokeButton = ({ id, joker, value }: JokerType) => {
  return (
    <DrawButton id={id} value={value}>
      Draw a random {joker} joke
    </DrawButton>
  )
}

export default DrawJokeButton
