import React from 'react'
import { SaveJoke, NumberOfJokes, Savebutton, IconButton } from '../../styles'

type OnClickType = {
  numValue: number
  value: string | undefined
  onClick: (event: any) => void
  decrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  increment: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SaveJokes = ({
  onClick,
  decrement,
  increment,
  value,
  numValue,
}: OnClickType) => {
  return (
    <SaveJoke>
      <NumberOfJokes>
        <div>
          <IconButton onClick={decrement}>-</IconButton>
          <input value={numValue} />
          <IconButton onClick={increment}>+</IconButton>
        </div>
      </NumberOfJokes>
      <Savebutton value={value} onClick={onClick}>
        Save Jokes
      </Savebutton>
    </SaveJoke>
  )
}
export default SaveJokes
