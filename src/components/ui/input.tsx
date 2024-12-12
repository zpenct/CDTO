import styled from "styled-components";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputContainer = styled.div`
  margin-bottom: 15px;
  height: 100%;
  border: 2px solid #05a8a0;
  border-radius: 8px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: white;
  border-radius: 8px;
  ${(props) =>
    props.$error &&
    `
    border-color: red;
    color: red;
  `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: 500;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <StyledInputWrapper>
        <StyledInput $error={!!error} {...props} />
      </StyledInputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
