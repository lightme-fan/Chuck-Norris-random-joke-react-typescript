import { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Input, PlaceholderElement } from '../../styles'

type InputType = {
  value: string
  name: string
  placeholder?: string
  style?: any
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children?: any
}

const InputWrapper = styled.div`
  width: 100%;
`
const InputName = ({
  value,
  name,
  placeholder,
  style,
  onChange,
  children,
}: InputType) => {
  const [isInputOnChange, setIsInputOnChange] = useState<boolean>(false)
  return (
    <div>
      <Input
        style={style}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  )
}

export default InputName
