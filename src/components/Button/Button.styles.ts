
import styled from 'styled-components'
import colors from '../Theme/theme';

const { LIGHT_GREY, DARK_GREY, WHITE} = colors

interface IButton {
  buttonWidth: string
  }
  
export const StyledButton = styled.button<IButton>`
width:${props => props.buttonWidth};
border-radius: 4px;
padding: 4px 0;
border: 1px solid #adacac;
background: ${ LIGHT_GREY};

&:hover {
  background: ${DARK_GREY};
  color: ${WHITE}
}
`