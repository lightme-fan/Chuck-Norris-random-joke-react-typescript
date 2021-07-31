import React, { Fragment, useContext } from 'react'
import { Context } from '../../context/useContext'
import {
  SaveJoke,
  NumberOfJokes,
  SaveButton,
  IconButton,
  ErrorMessage,
} from '../../styles'
import { SaveButtonType } from '../../types'

const SaveJokes = ({
  onClick,
  decrement,
  increment,
  saveOnChange,
  value,
  numValue,
  style,
}: SaveButtonType) => {
  const { state } = useContext(Context)

  return (
    <Fragment>
      <SaveJoke>
        <NumberOfJokes
          className={
            state.numberOfJokes >= 101 || state.numberOfJokes <= -1
              ? 'disabled'
              : ''
          }>
          <div>
            <IconButton onClick={decrement}>
              <span>-</span>
            </IconButton>
            <input
              value={numValue}
              name='numberOfJokes'
              onChange={saveOnChange}
            />
            <IconButton onClick={increment}>
              <span>+</span>
            </IconButton>
          </div>
        </NumberOfJokes>
        <SaveButton style={style} value={value} onClick={onClick}>
          Save Jokes
        </SaveButton>
      </SaveJoke>
      <ErrorMessage>
        {state.numberOfJokes >= 101 || state.numberOfJokes <= -1
          ? 'You can pick a number from 1 to 100.'
          : ''}
      </ErrorMessage>
    </Fragment>
  )
}
export default SaveJokes
