import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import SearchBar from 'components/SearchBar';
import NavBar from 'components/NavBar';
import Footer from './Footer';
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <NavBar>
        <SearchBarWrapper>
          <SearchBar
            value={value}
            handleChange={(e) => setValue(e.target.value)}
          />
        </SearchBarWrapper>
      </NavBar>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main``;

const SearchBarWrapper = styled.div`
  max-width: 1000px;
  width: 50%;
`;

export default Layout;
