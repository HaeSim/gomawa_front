import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <header
        style={{
          border: '1px solid black',
          position: 'fixed',
          height: 150,
          display: 'none',
        }}
      >
        Header
      </header>
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

export default Layout;
