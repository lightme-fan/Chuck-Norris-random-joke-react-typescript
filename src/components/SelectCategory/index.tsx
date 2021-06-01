import { Select } from '../../styles'

type OnChange = {
  item: any
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectCategory = ({ onChange, item }: OnChange) => {
  return (
    <Select onChange={onChange}>
      <option value=''>Category</option>
      {item.map((cat: string, index: string) => {
        const category = cat === '' ? 'Category' : cat
        return (
          <option key={cat.length} value={cat}>
            {category}
          </option>
        )
      })}
    </Select>
  )
}

export default SelectCategory
