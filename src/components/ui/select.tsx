import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Option = {
  value: string;
  label: string;
};

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  selected_: string | null;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
  selected_,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(selected_);

  useEffect(() => {
    setSelected(selected_);
  }, [selected_]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((option) => option.value === selected)?.label ||
    placeholder ||
    "Select an option";

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedLabel}
        <Arrow isOpen={isOpen}>&#9662;</Arrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  padding: 8px 12px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  height: 40px;
`;

const Arrow = styled.span<{ isOpen: boolean }>`
  font-size: 12px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  margin-top: 4px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 450px;
  overflow-y: auto;
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
