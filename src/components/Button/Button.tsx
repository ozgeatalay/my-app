
import {StyledButton}  from './Button.styles';

interface IButton {
  text: string,
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  buttonWidth:string 
}

export const Button = ({buttonWidth, text, clickHandler}: IButton) => (
  <StyledButton buttonWidth={buttonWidth} onClick={clickHandler}>{text}</StyledButton>
)