import React from 'react';
import styled from '@emotion/styled';
import logo from 'public/logo.png';
import Image from 'next/image';

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
          padding: '10px 20px',
        }}
      >
        <Image
          src={logo}
          alt='logo'
          placeholder='blur'
          width={70}
          height={70}
          objectFit='contain'
        />
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
  box-sizing: border-box;
  z-index: 9999;
`;

export default NavBar;
