import { Input } from '../../styles'
import { InputType } from '../../types'

const InputName = ({
  value,
  name,
  placeholder,
  style,
  onChange,
  children,
}: InputType) => {
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
