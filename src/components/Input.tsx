import styled from "styled-components";

interface InputProps {
  title: string;
  type: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  testid: string;
}

function Input({
  title,
  type,
  name,
  handleChange,
  placeholder,
  testid
}: InputProps) {
  return (
    <InputWrapper>
      <InputTitle>{title}</InputTitle>
      <InputBody
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="false"
        data-testid={testid}
      />
    </InputWrapper>
  );
}

export default Input;

export const InputWrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const InputTitle = styled.p`
  width: 70px;
  margin: 0;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

export const InputBody = styled.input`
  width: 240px;
  border: 2px solid #1e90ff;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
`;
