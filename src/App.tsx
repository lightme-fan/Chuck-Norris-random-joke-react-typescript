import { FC, useContext } from 'react'
import './App.css'
import DrawJokeButton from './components/DrawJokeButton'
import InputName from './components/InputName'
import JokeDetails from './components/JokeDetails'
import SaveJokes from './components/SaveJokes'
import SelectCategory from './components/SelectCategory'
import useCustomHooks from './customHooks'
import chuckNorrisPhoto from './userPhotos/chuck-norris.png'
import randomPhoto from './userPhotos/random-photo.png'

import { Container, Form, PlaceholderElement } from './styles'
import { Context } from './context/useContext'

const App: FC = () => {
  const { state } = useContext(Context)
  console.log(state)

  const {
    loading,
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
      {loading === false ? (
        <JokeDetails
          imageSource={
            firstName === 'Chuck' && lastName === 'Norris'
              ? chuckNorrisPhoto
              : randomPhoto
          }
          jokeText={joke.joke}
          alt={firstName}
        />
      ) : (
        <span>Loading...</span>
      )}
      <SelectCategory item={allCategories} onClick={handleSelect} />
      <Form onSubmit={handleSubmitDrawJoke}>
        <InputName value={inputValue} name='input' onChange={handleInputChange}>
          {inputValue.length === 0 ? (
            <PlaceholderElement>Impersonate Chuck Norris</PlaceholderElement>
          ) : (
            <span
              style={{
                position: 'absolute',
                top: '5px',
                left: '16px',
                fontSize: '12px',
                color: '#c4c4c4',
              }}>
              Impersonate Chuck Norris
            </span>
          )}
        </InputName>
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
