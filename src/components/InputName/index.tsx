import { Input } from '../../styles'

type InutType = {
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputName = ({ value, name, onChange }: InutType) => {
  return (
    <Input
      placeholder={`Impersonate Chuck Norris`}
      value={value}
      name={name}
      onChange={onChange}
    />
  )
}

export default InputName
