import { StyledButton } from "./Button.styles";

interface IButton {
  text: string;
  buttonWidth: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ buttonWidth, text, clickHandler }: IButton) => (
  <StyledButton buttonWidth={buttonWidth} onClick={clickHandler}>
    {text}
  </StyledButton>
);
