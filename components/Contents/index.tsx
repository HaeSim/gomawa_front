import styled from '@emotion/styled';
import Card, { tempCardData } from 'components/Card';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import React from 'react';
import { getNotionCards } from 'pages/api/notion';

const queryClient = new QueryClient();

type Props = {};

const Contents = (props: Props) => {
  const { isLoading, error, data } = useQuery(['notionData'], getNotionCards);

  console.log(isLoading, error, data);

  return (
    <QueryClientProvider client={queryClient}>
      <ContentsWrapper>
        <Grid>
          {tempCardData.map((v) => {
            return (
              <Card
                key={v.title}
                title={v.title}
                createdDate={v.createdDate}
                background={v.background}
                rotate={v.rotate}
              >
                {v.children}
              </Card>
            );
          })}
        </Grid>
      </ContentsWrapper>
    </QueryClientProvider>
  );
};

export default Contents;

const ContentsWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  height: fit-content;

  background-color: white;

  padding: 0 2rem;
`;

// 카드 느낌 보려고 임의로 만든 그리드
const Grid = styled.div`
  display: grid;
  padding-top: 8rem;
  gap: 1rem;
  background-color: beige;

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
