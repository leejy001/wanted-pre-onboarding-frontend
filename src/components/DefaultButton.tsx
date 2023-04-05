import styled from "styled-components";
import { ButtonType } from "../types/button";

function DefaultButton({ className, ...rest }: ButtonType) {
  return (
    <ButtonContainer className={className} {...rest}>
      {rest.name}
    </ButtonContainer>
  );
}

DefaultButton.defaultProps = {
  type: "button",
  fontSize: 18
};

export default DefaultButton;

export const ButtonContainer = styled.button<{
  fontSize: number;
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 700;
  margin-top: 10px;
  padding: 0;
  &.primary {
    border: 1px solid #1e90ff;
    border-radius: 10px;
    background-color: #1e90ff;
    color: #fff;
  }
  &.border-primary {
    border: 2px solid #1e90ff;
    border-radius: 5px;
    background-color: #fff;
    color: #1e90ff;
  }
`;
