import { Select } from '../../styles'

type OnChange = {
  item: any
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectCategory = ({ onChange, item }: OnChange) => {
  return (
    <Select onChange={onChange}>
      <option value=''>Select a category</option>
      {item.map((cat: string, index: string) => {
        return (
          <option key={cat.length} value={cat}>
            {cat}
          </option>
        )
      })}
    </Select>
  )
}

export default SelectCategory
