import styled from '@emotion/styled';
import Card, { tempCardData } from 'components/Card';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { getNotionCards } from 'pages/api/notion';
import useModal from 'Hooks/useModal';
import Modal from 'components/Modal';
import Loading from './Loading';

type Props = {};
const postItColorSet = ['#f6c2d9', '#fff69b', '#bcdfc9', '#a1c8e9', '#e4dae2'];

const Contents = (props: Props) => {
  const { isLoading, error, data } = useQuery(['notionData', ''], (context) =>
    getNotionCards(context),
  );

  const [open, openModal, closeModal] = useModal();
  const [cardIdx, setCardIdx] = useState(-1);

  useEffect(() => {
    if (cardIdx > -1) {
      openModal();
    }
  }, [cardIdx, openModal]);

  return (
    <ContentsWrapper>
      <Modal open={open} onClose={closeModal}>
        {open && data[cardIdx].description}
      </Modal>
      <Grid>
        {data?.map((v, idx) => {
          const randomNumber = Math.random();
          return (
            <Card
              key={v.id}
              title={v.title}
              createAt={v.createAt}
              background={postItColorSet[idx % 4]}
              rotate={
                ((randomNumber < 0.5 ? randomNumber * -1 : randomNumber) *
                  100) %
                4
              }
              from={v.from}
              to={v.to}
              onClick={() => {
                setCardIdx(idx);
              }}
            >
              {v.description}
            </Card>
          );
        })}
      </Grid>
      {isLoading ? <Loading /> : ''}
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  height: fit-content;

  background-color: beige;

  padding: 0 2rem;
`;

// 카드 느낌 보려고 임의로 만든 그리드
const Grid = styled.div`
  display: grid;
  padding-top: 8rem;
  gap: 1.5rem;

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
