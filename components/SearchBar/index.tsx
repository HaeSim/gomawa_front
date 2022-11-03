import React, { useState } from 'react';
import styled from '@emotion/styled';
import { BiSearch } from 'react-icons/bi';

export interface SearchBarProps {
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** 마우스 hover시 border 색상 */
  hoverColor?: string;
}

const SearchBar = ({
  value,
  handleChange,
  handleClick = undefined,
  hoverColor = '#ef2a23',
}: SearchBarProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocusInput = () => {
    setIsFocus(true);
  };

  const handleBlueInput = () => {
    setIsFocus(false);
  };

  return (
    <Container isFocus={isFocus} hoverColor={hoverColor}>
      <Input
        value={value}
        onFocus={handleFocusInput}
        onBlur={handleBlueInput}
        onChange={handleChange}
      />
      <InputAdornment>
        <IconButton onClick={handleClick}>
          <Icon size={24} />
        </IconButton>
      </InputAdornment>
    </Container>
  );
};

const Container = styled.div<{ isFocus: boolean; hoverColor: string }>`
  width: 100%;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 48px;
  padding-left: 8px;
  padding-right: 18px;
  font-size: 1rem;
  background-color: #ffffff;

  transition: border 150ms ease-in-out;
  border: 2px solid ${(props) => (props.isFocus ? props.hoverColor : '#eee')};
`;

const InputAdornment = styled.div`
  display: flex;
  height: 0.01em;
  max-height: 2em;
  align-items: center;
  box-align: center;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 8px;
`;

const IconButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px -12px 0px 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #eee;
  }
`;

const Input = styled.input`
  font: inherit;
  font-weight: 600;
  letter-spacing: inherit;
  color: currentcolor;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  padding: 16.5px 0px 16.5px 14px;
  text-align: center;

  outline: none;
`;

const Icon = styled(BiSearch)``;

export default SearchBar;
