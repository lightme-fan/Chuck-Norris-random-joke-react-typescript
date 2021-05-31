import React, { FC } from 'react'
import './App.css'
import DrawJokeButton from './components/DrawJokeButton'
import InputName from './components/InputName'
import JokeDetails from './components/JokeDetails'
import SaveJokes from './components/SaveJokes'
import SelectCategory from './components/SelectCategory'
import useCustomHooks from './hooks'
import chuckNorrisPhoto from './userPhotos/chuck-norris.png'

import { Container, Select, Form } from './styles'

const App: FC = () => {
  const [
    joke,
    jokeText,
    allCategories,
    firstName,
    lastName,
    inputValue,
    selectOnChange,
    handleInputChange,
    handleSubmitDrawJoke,
    handleSaveButton,
  ] = useCustomHooks()

  // console.log('Jokes', joke)
  // console.log('Category', allCategories)

  return (
    <Container>
      <JokeDetails
        imageSource={chuckNorrisPhoto}
        jokeText={'joke.value.joke'}
        alt={firstName}
      />
      {/* <SelectCategory onChange={selectOnChange} item={allCategories} /> */}
      <Select name='' id=''>
        <option>Cat1</option>
        <option>Cat2</option>
      </Select>
      <Form onSubmit={handleSubmitDrawJoke}>
        <InputName
          value={inputValue}
          name={'inputValue'}
          onChange={handleInputChange}
        />
        <DrawJokeButton
          joker={
            inputValue === '' ? 'Chuck Norris' : `${firstName} ${lastName}`
          }
        />
      </Form>
      <SaveJokes value={'joke.value.joke'} onClick={handleSaveButton} />
    </Container>
  )
}

export default App
