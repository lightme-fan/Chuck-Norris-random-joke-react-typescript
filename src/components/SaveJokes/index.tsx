import React from 'react'
import { SaveJoke, NumberOfJokes, Savebutton, IconButton } from '../../styles'

type OnClickType = {
  value: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SaveJokes = ({ onClick, value }: OnClickType) => {
  return (
    <SaveJoke>
      <NumberOfJokes>
        <div>
          <IconButton>-</IconButton>
          <span>0</span>
          <IconButton>+</IconButton>
        </div>
      </NumberOfJokes>
      <Savebutton value={value} onClick={onClick}>
        Save Jokes
      </Savebutton>
    </SaveJoke>
  )
}
export default SaveJokes
