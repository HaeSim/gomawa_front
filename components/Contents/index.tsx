import styled from '@emotion/styled';
import Card, { tempCardData } from 'components/Card';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { getNotionCards } from 'pages/api/notion';
import useModal from 'Hooks/useModal';
import Modal from 'components/Modal';

type Props = {};

const Contents = (props: Props) => {
  const { isLoading, error, data } = useQuery(['notionData'], getNotionCards);

  const [open, openModal, closeModal] = useModal();
  const [cardIdx, setCardIdx] = useState(-1);

  useEffect(() => {
    if (cardIdx > -1) {
      openModal();
    }
  }, [cardIdx]);

  if (isLoading) return <div>Loading..</div>;
  return (
    <ContentsWrapper>
      <Modal open={open} onClose={closeModal}>
        {open && data[cardIdx].description}
      </Modal>
      <Grid>
        {tempCardData.map((v, idx) => {
          return (
            <Card
              key={v.title}
              title={v.title}
              createdDate={v.createdDate}
              background={v.background}
              rotate={v.rotate}
              onClick={() => {
                setCardIdx(idx);
              }}
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
