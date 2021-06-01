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
  const [
    joke,
    allCategories,
    firstName,
    lastName,
    isInputValid,
    inputValue,
    category,
    selectOnChange,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
  ] = useCustomHooks()

  const jokerName = inputValue === '' ? 'Chuck Norris' : `${inputValue}`

  const lengthOfInputValue = inputValue.split(' ').length

  return (
    <Container>
      <JokeDetails
        imageSource={
          firstName === 'Chuck' && lastName === 'Norris'
            ? chuckNorrisPhoto
            : randomPhoto
        }
        jokeText={joke.value.joke}
        alt={firstName}
      />
      <SelectCategory onChange={selectOnChange} item={allCategories} />
      <Form onSubmit={handleSubmitDrawJoke}>
        <InputName
          value={inputValue}
          name='name'
          onChange={handleInputChange}
        />
        <DrawJokeButton joker={jokerName} />
      </Form>
      <SaveJokes value={joke.value.joke} onClick={handleSaveButton} />
    </Container>
  )
}

export default App
