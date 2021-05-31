import React from 'react'
import useCustomHooks from '../../customHooks'
import { SaveJoke, NumberOfJokes, Savebutton, IconButton } from '../../styles'

type OnClickType = {
  numValue: number
  value: string | undefined
  onClick: (event: any) => void
  saveOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  decrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  increment: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SaveJokes = ({
  onClick,
  decrement,
  increment,
  saveOnChange,
  value,
  numValue,
}: OnClickType) => {
  const { numberOfJokes, isButonClicked } = useCustomHooks()

  return (
    <SaveJoke>
      <NumberOfJokes
        className={numberOfJokes > 100 || numberOfJokes < 0 ? 'disabled' : ''}>
        <div>
          <IconButton onClick={decrement}>-</IconButton>
          <input
            value={numValue}
            name='numberOfJokes'
            onChange={saveOnChange}
          />
          <IconButton onClick={increment}>+</IconButton>
        </div>
      </NumberOfJokes>
      <Savebutton
        value={value}
        onClick={onClick}
        className={isButonClicked ? 'save-on-click' : ''}>
        Save Jokes
      </Savebutton>
      {numberOfJokes > 100 || numberOfJokes < 0 ? (
        <p>You can pick a number from 1 to 100.</p>
      ) : null}
    </SaveJoke>
  )
}
export default SaveJokes
