import styled from 'styled-components'

export const Container = styled.div`
  max-width: 439px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 48px 58px 72px 58px;
  margin: 98px auto 98px auto;
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
  height: 58px;
  padding-left: 16px;
  position: relative;
  border: solid 2px #c4c4c4;
  background-color: #fff;
  border-radius: 7px;

  &:focus {
    padding-top: 28px;
    height: 30px;
  }

  &:focus ~ span {
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
  margin: 32px 0 52px;
  border: none;
`

export const SaveJoke = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 8px;
`

export const Savebutton = styled.button`
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

  div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 90px;
    padding-left: 16px;

    input {
      border: none;
      background-color: #f5f6f8;
      width: 100%;
      font-size: 16px;

      &:focus,
      &:valid {
        border: none;
        border-color: #f5f6f8;
      }
    }
  }
`

export const IconButton = styled.button`
  width: 24px;
  height: 24px;
  border: solid 2px #34394f;
  color: #34394f;
  border-radius: 50%;
  object-fit: contain;
`
