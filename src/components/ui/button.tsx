import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  background-color: #05a8a0;

  color: white;
  border: none;
  transition: all 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const MainButton: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  ...rest
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} type={type} {...rest}>
      {children}
    </Button>
  );
};

export default MainButton;
