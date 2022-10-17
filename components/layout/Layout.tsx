import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import SearchBar from 'components/SearchBar';
import NavBar from 'components/NavBar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [value, setValue] = useState('');

  const layoutRef = useRef<HTMLDivElement>(null);

  const wheelHandler = (e: { preventDefault?: any; deltaY?: any }) => {
    const { scrollTop } = layoutRef.current;

    const { deltaY } = e;
    const pageHeight = window.innerHeight;
    const scrollHeight = window.scrollY;

    if (deltaY > 0) {
      // 내릴 때
      if (scrollHeight >= scrollTop && scrollHeight < pageHeight) {
        e.preventDefault();
        // Landing Block 일때
        window.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    } else {
      // 올릴 때
      if (scrollHeight >= pageHeight) {
        // Contents Block 일때
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const layoutRefCurrent = layoutRef.current;
    layoutRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      layoutRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <Container ref={layoutRef}>
      <NavBar>
        <SearchBarWrapper>
          <SearchBar
            value={value}
            handleChange={(e) => setValue(e.target.value)}
          />
        </SearchBarWrapper>
      </NavBar>
      <Main>{children}</Main>
      <footer style={{ border: '1px solid blue', height: 150 }}>Footer</footer>
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
