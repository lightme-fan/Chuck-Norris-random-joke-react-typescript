import React, { FC } from 'react'
import './App.css'
import DrawJokeButton from './components/DrawJokeButton'
import InputName from './components/InputName'
import JokeDetails from './components/JokeDetails'
import SaveJokes from './components/SaveJokes'
import SelectCategory from './components/SelectCategory'
import useCustomHooks from './hooks'
import chuckNorrisPhoto from './userPhotos/chuck-norris.png'
import randomPhoto from './userPhotos/random-photo.png'

import { Container, Select, Form } from './styles'

const App: FC = () => {
  const {
    joke,
    allCategories,
    firstName,
    lastName,
    inputValue,
    selectOnChange,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
    handleDecrementButton,
    handleIncrementButton,
  } = useCustomHooks()

  const jokerName = inputValue === '' ? 'Chuck Norris' : `${inputValue}`
  return (
    <Container>
      <JokeDetails
        imageSource={
          firstName === 'Chuck' && lastName === 'Norris'
            ? chuckNorrisPhoto
            : randomPhoto
        }
        jokeText={joke.joke}
        alt={firstName}
      />
      <SelectCategory onChange={selectOnChange} item={allCategories} />
      <Form onSubmit={handleSubmitDrawJoke}>
        <InputName
          value={inputValue}
          name='input'
          onChange={handleInputChange}
        />
        <DrawJokeButton
          joker={jokerName}
          id='drawJokeButton'
          value={jokerName}
        />
      </Form>
      <SaveJokes
        value={joke.joke}
        numValue={0}
        onClick={handleSaveButton}
        decrement={handleDecrementButton}
        increment={handleIncrementButton}
      />
    </Container>
  )
}

export default App
