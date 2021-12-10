import styled from 'styled-components'

export const Container = styled.div`
  max-width: 439px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 28px 58px 15px 58px;
  margin: auto;
  margin-top: 16px;
  background-color: #fff;
  border-radius: 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
`

export const Joke = styled.p`
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #34394f;
`

export const Select = styled.select`
  width: 100%;
  padding: 16px;
  height: 60px;
  border: solid 2px #c4c4c4;
  background-color: #fff;
  border-radius: 7px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 16px;
  color: #c4c4c4;
  margin: 32px 0 16px;

  option {
    border: none;
    font-size: 16px;
    padding: 16px;
  }
`

export const Input = styled.input`
  border: none;
  font-size: 16px;
  color: #34394f;
  line-height: 1.63;
  letter-spacing: -0.52px;
  position: relative;
  width: 95%;
  height: 30px;
  padding-left: 16px;
  position: relative;
  border: solid 2px #c4c4c4;
  background-color: #ffffff;
  border-radius: 7px;
  padding-top: 24px;

  &:focus {
    padding-top: 24px;
    height: 30px;
  }

  &:focus ~ span,
  &:active ~ span {
    top: 5px;
    font-size: 12px;
  }
`

export const PlaceholderElement = styled.span`
  position: absolute;
  top: 7%;
  left: 17px;
  color: #c4c4c4;
  line-height: 1.63;
  letter-spacing: -0.52px;
`

export const DrawButton = styled.button`
  width: 100%;
  padding: 16px;
  color: white;
  height: 58px;
  font-size: 16px;
  border-radius: 6px;
  background-color: #34394f;
  line-height: 1.63;
  letter-spacing: -0.52px;
  margin: 11px 0 24px;
  border: none;
`

export const SaveJoke = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 8px;

  .disabled {
    background: #f39a9a;

    button {
      border: 2px solid #34394f;
    }

    input,
    button {
      background: #f39a9a;
    }
  }
`

export const SaveButton = styled.button`
  height: 55px;
  font-size: 16px;
  background-color: #f5f6f8;
  font-weight: 500;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: #34394f;
  border-color: #f5f6f8;
  border-radius: 6px;
  border: none;

  &:focus,
  &:hover {
    background-color: #34394f;
    color: #fff;
  }
`

export const NumberOfJokes = styled.div`
  background-color: #f5f6f8;
  border-color: #f5f6f8;
  border-radius: 6px;
  text-align: center;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;

    input {
      text-align: center;
      border: none;
      background-color: #f5f6f8;
      font-size: 16px;
      width: 50%;
      font-size: 16px;
      line-height: 0.63;
      letter-spacing: -0.52px;

      &:focus,
      &:valid {
        outline: none;
        border: none;
        border-color: #f5f6f8;
      }
    }
  }
`

export const IconButton = styled.button`
  border: none;
  color: #34394f;
  border: 1px solid #34394f;
  border-radius: 50%;
  text-align: center;
  width: 24px;
  height: 24px;
  padding: 0;

  &:hover {
    background-color: #34394f;
    color: #fff;
    span {
      color: #fff;
    }
  }

  span {
    color: #34394f;
  }

  &:nth-of-type(2) {
    border-radius: 50%;

    span {
      font-size: 22px;
      line-height: 20px;
    }
  }

  &:nth-of-type(1) {
    padding: 0;
    span {
      line-height: 16px;
      font-size: 32px;
    }
  }
`

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: #f39a9a;
  opacity: 0.6;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: left;
`

export const ItemStyle = styled.div`
  width: 99%;
  background-color: #ffffff;

  &:hover {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 564px) {
    width: 102%;
  }
`

export const ItemWrapper = styled.div`
  width: 92%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  background-color: white;
  margin: auto;

  &:hover {
    background-color: #e9e9e9;
    color: #34394f;
    border: none;
    border-radius: 6px;
  }
`
