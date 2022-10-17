import React from 'react';
import styled from '@emotion/styled';

export interface NavBarProps {
  children: React.ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  return (
    <Header>
      <a
        href='#'
        onClick={(e) => e.preventDefault()}
        style={{
          overflow: 'hidden',
          display: 'inline-block',
          height: '70px',
          padding: '20px 20px 20px 20px',
        }}
      >
        <img src='/logo.png' alt='logo' />
      </a>
      {children}
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 9999;
`;

export default NavBar;
