import { StyledInput } from "./Input.styles";

interface IInput {
  width: string;
  type: string;
  name: string;
  defaultValue: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  width,
  type,
  name,
  defaultValue,
  onChange,
}: IInput) => (
  <StyledInput
    inputWidth={width}
    type={type}
    name={name}
    defaultValue={defaultValue}
    max="100"
    min="4"
    onChange={onChange}
  />
)
