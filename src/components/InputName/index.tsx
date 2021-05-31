import { Fragment } from 'react'
import { Input, PlaceholderElement } from '../../styles'

type InputType = {
  value: string
  name: string
  doesInputHaveValue: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputName = ({
  value,
  name,
  doesInputHaveValue,
  onChange,
}: InputType) => {
  return (
    <Fragment>
      <Input value={value} name={name} onChange={onChange} />
      <PlaceholderElement>
        {doesInputHaveValue === false ? 'Impersonate Chuck Norris' : ''}
      </PlaceholderElement>
    </Fragment>
  )
}

export default InputName
