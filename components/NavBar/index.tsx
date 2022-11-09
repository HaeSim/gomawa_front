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
      <Anchor href='#' onClick={(e) => e.preventDefault()}>
        <Image
          src={logo}
          alt='logo'
          placeholder='blur'
          // width={70}
          // height={70}
          objectFit='contain'
        />
      </Anchor>
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

const Anchor = styled.a`
  overflow: hidden;
  display: inline-block;
  padding: 10px 20px;

  @media (max-width: ${(props) => props.theme.bp.sm}) {
    position: absolute;
    width: 36px;
    z-index: 999;
    top: 18px;
    left: 26px;
  }
`;

export default NavBar;
