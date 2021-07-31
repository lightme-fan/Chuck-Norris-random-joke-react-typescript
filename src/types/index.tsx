export interface InitialStateType {
  loading: boolean
  joke: string
  categories: string[]
  firstName: string
  lastName: string
  inputValue: string
  numberOfJokes: any
  category: string
  savedJokes: any[]
}

export interface ActionType {
  type: string
  payload: string | any
}

export type InputType = {
  value: string
  name: string
  placeholder?: string
  style?: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children?: any
}

export type JokeContentType = {
  imageSource: any
  jokeText: string | undefined
  alt: string
}

export type SaveButtonType = {
  numValue: number
  value: string | undefined
  onClick: (event: any) => void
  saveOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  decrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  increment: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: any
  isDisabled?: boolean
}

export type SelectType = {
  categoryName: string
  item: any
  style?: any
  onClick: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

export interface Props {
  style?: any
  children: JSX.Element[] | JSX.Element
}

export type JokerType = {
  id: string
  joker: string
  value: string
}
