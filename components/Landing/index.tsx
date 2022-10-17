/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import CountUp from './CountUp';

type Props = {};

const Landing = (props: Props) => {
  const [sawoo, setSawoo] = useState(137);
  const [gamsaInsa, setGamsaInsa] = useState(3127);

  return (
    <LandingWrapper>
      <Video autoPlay loop muted playsInline>
        <source src='video/banner.webm' type='video/webm' />
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
  gap: 1rem;

  position: absolute;
  text-align: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: white;
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
`;

export default Landing;
