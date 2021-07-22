import React from 'react'
import useCustomHooks from '../../customHooks'
import { SaveJoke, NumberOfJokes, SaveButton, IconButton } from '../../styles'

type OnClickType = {
  numValue: number
  value: string | undefined
  onClick: (event: any) => void
  saveOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  decrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  increment: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: any
}

const SaveJokes = ({
  onClick,
  decrement,
  increment,
  saveOnChange,
  value,
  numValue,
  style,
}: OnClickType) => {
  const { numberOfJokes, isButtonClicked } = useCustomHooks()

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
      <SaveButton
        style={style}
        value={value}
        onClick={onClick}
        className={isButtonClicked ? 'save-on-click' : ''}>
        Save Jokes
      </SaveButton>
      {numberOfJokes > 100 || numberOfJokes < 0 ? (
        <p>You can pick a number from 1 to 100.</p>
      ) : null}
    </SaveJoke>
  )
}
export default SaveJokes
