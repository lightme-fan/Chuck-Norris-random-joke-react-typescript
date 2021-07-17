import React, { Children, useState } from 'react'
import styled from 'styled-components'

type SelectType = {
  item: any
  onClick: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Button = styled.button`
  width: 100%;
  background-color: #ffffff;
`

const ItemWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`

const SelectContainer = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [head, ...tail] = Children.toArray(children)
  return (
    <Button
      className={isOpen ? 'open-men' : 'menu'}
      onClick={() => setIsOpen(!isOpen)}>
      {head}
      {isOpen && <div className='open'>{tail}</div>}
    </Button>
  )
}

const Item = ({ children, value, onClick }: any) => {
  return (
    <button className='item' value={value} onClick={onClick}>
      {children}
    </button>
  )
}

const SelectCategory = ({ item, onClick }: SelectType) => {
  return (
    <SelectContainer>
      <span className='cat-span'>Select a category</span>
      {item.map((cat: string) => {
        return (
          <ItemWrapper key={cat}>
            <Item onClick={onClick} value={cat}>
              {cat}
            </Item>
          </ItemWrapper>
        )
      })}
    </SelectContainer>
  )
}

export default SelectCategory
