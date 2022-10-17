import styled from '@emotion/styled';
import React from 'react';

type Props = {};

const Contents = (props: Props) => {
  return <ContentsWrapper>Contents</ContentsWrapper>;
};

export default Contents;

const ContentsWrapper = styled.section`
  position: relative;
  height: 100vh;

  background-color: yellow;
`;
