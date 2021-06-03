import React, { FC } from 'react'
import './App.css'
import DrawJokeButton from './components/DrawJokeButton'
import InputName from './components/InputName'
import JokeDetails from './components/JokeDetails'
import SaveJokes from './components/SaveJokes'
import SelectCategory from './components/SelectCategory'
import useCustomHooks from './customHooks'
import chuckNorrisPhoto from './userPhotos/chuck-norris.png'
import randomPhoto from './userPhotos/random-photo.png'

import { Container, Form } from './styles'

const App: FC = () => {
  const {
    joke,
    number,
    numberOfJokes,
    allCategories,
    firstName,
    lastName,
    inputValue,
    handleSelect,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
    handleDecrementButton,
    handleIncrementButton,
    handleInputSaveOnchange,
  } = useCustomHooks()

  // This is the joker name
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
      <SelectCategory item={allCategories} onClick={handleSelect} />
      <Form onSubmit={handleSubmitDrawJoke}>
        <InputName
          value={inputValue}
          name='input'
          doesInputHaveValue={inputValue !== '' ? true : false}
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
        numValue={number}
        saveOnChange={handleInputSaveOnchange}
        onClick={handleSaveButton}
        decrement={handleDecrementButton}
        increment={handleIncrementButton}
      />
    </Container>
  )
}

export default App
