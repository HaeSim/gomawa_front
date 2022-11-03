/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import CountUp from './CountUp';

type Props = {
  popupHandler?: Function;
};

const Landing = ({ popupHandler }: Props) => {
  const [sawoo, setSawoo] = useState(137);
  const [gamsaInsa, setGamsaInsa] = useState(3127);

  return (
    <LandingWrapper>
      <Video autoPlay loop muted playsInline poster='images/landing_poster.png'>
        <source src='video/landing_tower.mp4' type='video/webm' />
        <source src='video/landing_tower.webm' type='video/webm' />
        <source src='video/landing.webm' type='video/webm' />
        Sorry, your browser doesn't support embedded videos.
      </Video>
      <DimBox />
      <TextWrapper>
        <Title>The Great Workplace is up to You</Title>
        <DescriptionWrapper>
          <Description>
            지금까지{' '}
            <CountUp
              end={sawoo}
              fontSize={2.7}
              fontWeight={700}
              color='#ecff46'
            />{' '}
            명의 사우분들께
          </Description>
          <Description>
            <CountUp
              end={gamsaInsa}
              fontSize={2.7}
              fontWeight={700}
              color='#ecff46'
            />{' '}
            개의 감사 인사가 전달되었습니다
          </Description>
        </DescriptionWrapper>
        <WriteButtion onClick={() => popupHandler(true)}>
          지금 참여하기
        </WriteButtion>
      </TextWrapper>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.section`
  position: relative;

  height: 100vh;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100vh;

  object-fit: cover;
`;

const DimBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  position: absolute;
  text-align: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: white;

  @media (max-width: ${(props) => props.theme.bp.md}) {
    font-size: 0.9rem;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.h2`
  font-size: 2.5rem;
  color: white;
  @media (max-width: ${(props) => props.theme.bp.md}) {
    font-size: 1.3rem;
  }
`;

const WriteButtion = styled.button`
  width: 120px;

  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(76, 48, 48, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  color: white;

  transition: 0.5s transform;

  &:hover {
    transition: 0.5s transform;
    transform: scale(1.1);
  }
`;

export default Landing;
