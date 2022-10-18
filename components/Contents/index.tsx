import styled from '@emotion/styled';
import Card, { tempCardData } from 'components/Card';
import React from 'react';

type Props = {};

const Contents = (props: Props) => {
  return (
    <ContentsWrapper>
      <Grid>
        {tempCardData.map((v) => {
          return (
            <Card
              key={v.title}
              title={v.title}
              createdDate={v.createdDate}
              background={v.background}
            >
              {v.children}
            </Card>
          );
        })}
      </Grid>
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.section`
  position: relative;
  height: 100vh;

  background-color: white;

  padding: 0 2rem;
`;

// 카드 느낌 보려고 임의로 만든 그리드
const Grid = styled.div`
  display: grid;
  padding-top: 8rem;
  gap: 1rem;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: ${(props) => props.theme.bp.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${(props) => props.theme.bp.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.bp.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
