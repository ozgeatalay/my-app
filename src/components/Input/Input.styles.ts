
import styled from 'styled-components'

interface IInput {
  inputWidth: string,
  }
  

  
  export const StyledInput = styled.input<IInput>`
  width:${props => props.inputWidth};
  border-radius: 4px;
  padding: 4px 0 0 10px;
  border: 1px solid #ccc
  `