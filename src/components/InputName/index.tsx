import { Fragment } from 'react'
import { Input, PlaceholderElement } from '../../styles'
import useCustomHooks from '../../hooks'

type InutType = {
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputName = ({ value, name, onChange }: InutType) => {
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

  return (
    <Fragment>
      <Input value={value} name={name} onChange={onChange} />
      <PlaceholderElement>Impersonate Chuck Norris</PlaceholderElement>
    </Fragment>
  )
}

export default InputName
