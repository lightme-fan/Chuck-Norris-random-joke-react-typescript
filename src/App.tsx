import { FC, useContext } from 'react'
import './App.css'
import DrawJokeButton from './components/DrawJokeButton'
import InputName from './components/InputName'
import JokeDetails from './components/JokeDetails'
import SaveJokes from './components/SaveJokes'
import SelectCategory from './components/SelectCategory'
import chuckNorrisPhoto from './userPhotos/chuck-norris.png'
import randomPhoto from './userPhotos/random-photo.png'
import { Container, Form, PlaceholderElement } from './styles'
import { Context } from './context/useContext'

const App: FC = () => {
  const {
    state,
    handleSelectChange,
    handleInput,
    handleDrawButton,
    handleInputNumberOfJoke,
    incrementNumber,
    decrementNumber,
    handleSaveButton,
  } = useContext(Context)

  const jokerName =
    state.inputValue.length === 0 ? 'Chuck Norris' : state.inputValue

  return (
    <Container>
      {state.loading === false ? (
        <JokeDetails
          imageSource={
            state.firstName === 'Chuck' || state.lastName === 'Norris'
              ? chuckNorrisPhoto
              : randomPhoto
          }
          jokeText={state.joke}
          alt={`${state.firstName} ${state.lastName}`}
        />
      ) : (
        <span>Loading...</span>
      )}
      <SelectCategory
        item={state.categories}
        categoryName={
          state.category.length === 0 ? 'Select a category' : state.category
        }
        onClick={handleSelectChange}
      />
      <Form onSubmit={handleDrawButton}>
        <InputName
          style={{ backgroundColor: state.inputValue && '#ffffff' }}
          value={state.inputValue}
          name='input'
          onChange={handleInput}>
          {state.inputValue.length === 0 ? (
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
        value={state.joke}
        style={
          state.numberOfJokes <= 0 || state.numberOfJokes >= 101
            ? {
                backgroundColor: '#f5f6f8',
                color: '#34394f',
                cursor: 'default',
              }
            : {
                backgroundColor: '#34394f',
                color: '#fff',
                cursor: 'pointer',
              }
        }
        numValue={state.numberOfJokes}
        saveOnChange={handleInputNumberOfJoke}
        onClick={handleSaveButton}
        decrement={decrementNumber}
        increment={incrementNumber}
      />
    </Container>
  )
}

export default App
