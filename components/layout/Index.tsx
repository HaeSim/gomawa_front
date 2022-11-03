import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import SearchBar from 'components/SearchBar';
import NavBar from 'components/NavBar';
import Footer from './Footer';
import { throttle } from 'lodash-es';
import { useQuery } from '@tanstack/react-query';
import { getNotionCards } from 'pages/api/notion';
import ModalFrame from 'components/Modal/Popup/ModalFrame';
import GettingReady from 'components/Modal/Popup/GettingReady';

type Props = {
  children: React.ReactNode;
  popupHandler: Function;
};

const Layout = ({ children, popupHandler }: Props) => {
  const [value, setValue] = useState('');

  const { refetch } = useQuery(
    ['notionData', value],
    (context) => getNotionCards(context),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  const handleClick = () => {
    popupHandler(true);
    refetch();
  };

  const layoutRef = useRef<HTMLDivElement>(null);

  const wheelHandler = useCallback(
    (e: { preventDefault?: any; deltaY?: any }) => {
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
        if (scrollHeight <= pageHeight) {
          e.preventDefault();
          // Contents Block 일때
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    },
    [],
  );

  useEffect(() => {
    const layoutRefCurrent = layoutRef.current;
    layoutRefCurrent.addEventListener(
      'wheel',
      throttle(wheelHandler, 700, {
        leading: true,
        trailing: false,
      }),
    );
    return () => {
      layoutRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [wheelHandler]);

  return (
    <Container ref={layoutRef}>
      <NavBar>
        <SearchBarWrapper>
          <SearchBar
            value={value}
            handleChange={(e) => setValue(e.target.value)}
            handleClick={handleClick}
          />
        </SearchBarWrapper>
      </NavBar>
      <Main>{children}</Main>
      <Footer popupHandler={popupHandler} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main``;

const SearchBarWrapper = styled.div`
  max-width: 720px;
  width: 100%;
`;

export default Layout;
