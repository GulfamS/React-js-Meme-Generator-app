import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px
    padding-top: 30px;
    padding-bottom: 30px'
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width: 768px){
        width: 80%
        max-width: 1110px
    }
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    text-align: left;
  }
`
export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const TextContent = styled.p`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 500;
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const Label = styled.label`
  font-family: 'Open Sans';
  color: #7e858e;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 0px;
`
export const Input = styled.input`
    font-family: 'Open sans'
    color: #5a7184;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #d7dfe9;
    padding: 6px;
    margin-top: 5px;
    outline: none;
    border-radius: 4px;
`
export const Select = styled.select`
  font-family: 'Open Sans';
  color: #1e293b;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 6px;
  outline: none;
`
export const Option = styled.option`
  font-size: 16px;
  padding: 18px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 5px;
  min-width: 25px;
  max-width: 150px;
  padding: 15px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
  margin-top: 15px;
`
