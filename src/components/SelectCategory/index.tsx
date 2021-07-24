import { Children, useState } from 'react'
import { ItemStyle, ItemWrapper } from '../../styles'
import { Props, SelectType } from '../../types'

const SelectContainer = ({ children, style }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [head, ...tail] = Children.toArray(children)
  return (
    <ItemStyle
      style={style}
      className={isOpen ? 'open-menu' : 'menu'}
      onClick={() => setIsOpen(!isOpen)}>
      {head}
      {isOpen && <div className='open'>{tail}</div>}
    </ItemStyle>
  )
}

const Item = ({ children, value, onClick }: any) => {
  return (
    <button className='item' value={value} onClick={onClick}>
      {children}
    </button>
  )
}

const SelectCategory = ({ item, categoryName, style, onClick }: SelectType) => {
  return (
    <SelectContainer style={style}>
      <span className='cat-span'>{categoryName}</span>
      {item.map((cat: string) => {
        return (
          <ItemWrapper key={cat}>
            <Item onClick={onClick} value={cat.toLocaleLowerCase()}>
              {cat}
            </Item>
          </ItemWrapper>
        )
      })}
    </SelectContainer>
  )
}

export default SelectCategory
