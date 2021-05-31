import React, { Children, FC, useState } from 'react'

type SelectType = {
  item: any
  onClick: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

type ItemType = {
  children: any
  onClick: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

const SelectContainer = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [head, ...tail] = Children.toArray(children)
  return (
    <div
      className={isOpen ? 'onpe-men' : 'menu'}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
      {head}
      {isOpen && <div className='open'>{tail}</div>}
    </div>
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
          <Item onClick={onClick} key={cat} value={cat}>
            {cat}
          </Item>
        )
      })}
    </SelectContainer>
  )
}

export default SelectCategory
