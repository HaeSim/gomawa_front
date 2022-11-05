import styled from '@emotion/styled';
import Card, { tempCardData } from 'components/Card';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { getNotionCards } from 'pages/api/notion';
import useModal from 'Hooks/useModal';
import Modal from 'components/Modal';
import Loading from './Loading';
import * as gtag from '../../lib/gtag';

type Props = {};
const postItColorSet = ['#f6c2d9', '#fff69b', '#bcdfc9', '#a1c8e9', '#e4dae2'];

const Contents = (props: Props) => {
  const {
    isLoading,
    error,
    data: postDataArray,
  } = useQuery(['notionData', ''], (context) => getNotionCards(context));

  const [open, openModal, closeModal] = useModal();
  const [cardIdx, setCardIdx] = useState<number>(-1);
  const [modalBackgroundColor, setModalBackgroundColor] =
    useState<string>('#ffffff');

  return (
    <ContentsWrapper>
      <Modal
        open={open}
        onClose={closeModal}
        backgroundColor={modalBackgroundColor}
        title={open && `${postDataArray[cardIdx].to}님, 고구맙습니다!`}
        footerText={open && postDataArray[cardIdx].from}
      >
        {open && postDataArray[cardIdx].description}
      </Modal>

      {isLoading ? (
        <Loading />
      ) : (
        <Grid>
          {postDataArray?.map((post, index) => {
            const backgroundColor = postItColorSet[index % 5];

            return (
              <Card
                key={post.id}
                title={post.title}
                createAt={post.createAt}
                background={backgroundColor}
                rotate={0}
                from={post.from}
                to={post.to}
                onClick={() => {
                  gtag.event({
                    category: 'Card',
                    action: 'veiw_card',
                    label: post.to,
                  });
                  setCardIdx(index);
                  setModalBackgroundColor(backgroundColor); // alpha 0.95 == f2
                  openModal();
                }}
              >
                {post.description}
              </Card>
            );
          })}
        </Grid>
      )}
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.section`
  display: flex;
  justify-content: center;

  position: relative;
  min-height: 100vh;
  height: fit-content;
  background-color: transparent;
  padding: 8rem 1rem 4rem 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border: tan solid 1.5rem;
  border-top: #bda27e solid 1.5rem;
  border-left: #b19876 solid 1.5rem;
  border-bottom: #c9ad86 solid 1.5rem;

  box-shadow: 0px 0px 6px 5px rgba(58, 18, 13, 0), 0px 0px 0px 2px #c2a782,
    0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5);
  background-image: radial-gradient(
      circle at left 30%,
      rgba(34, 34, 34, 0.3),
      rgba(34, 34, 34, 0.3) 80px,
      rgba(34, 34, 34, 0.5) 100px,
      rgba(51, 51, 51, 0.5) 160px,
      rgba(51, 51, 51, 0.5)
    ),
    linear-gradient(
      215deg,
      transparent,
      transparent 100px,
      #222 260px,
      #222 320px,
      transparent
    ),
    radial-gradient(circle at right, #111, rgba(51, 51, 51, 1));
  background-color: #333;

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${(props) => props.theme.bp.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${(props) => props.theme.bp.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.bp.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
