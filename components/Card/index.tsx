import React, { useState } from 'react';
import styled from '@emotion/styled';

export interface CardProps {
  children: React.ReactNode;
  title: string;
  createAt: string;
  rotate: number;
  background?: string;
  from?: string;
}

const postItColorSet = ['#f6c2d9', '#fff69b', '#bcdfc9', '#a1c8e9', '#e4dae2'];
export const tempCardData = [
  {
    title: '안녕하세요오오오오오옹',
    createdDate: '2022년 10월 17일',
    background: '#f6c2d9',
    rotate: 2,
    children:
      '오언은 내가 물건을 잃어버리는 방식에 관해, 잃어버리는 행위를 내 나름의 예술로 승화해나가는 방식에 관해 이야기하면서 나를 놀리곤 했다.',
  },
  {
    title: '이건 테스트 데이터에요',
    createdDate: '2022년 10월 18일',
    background: '#fff69b',
    rotate: -1,
    children:
      '오언은 그렇게 물었고, 주차권을 잃어버리는 여자라는 것이 그날 밤 나에 관해 알게 된 가장 좋은 정보라는 듯이 웃었다.',
  },
  {
    title: '마이클스 부인이세요?',
    createdDate: '2022년 10월 17일',
    background: '#bcdfc9',
    rotate: 3,
    children:
      '주차권은 확실히 잃어버렸다. 나는 렌트한 볼보를 구석구석 샅샅이 뒤졌고, 탄 적도 없는 오언의 멋진 스포츠카 내부도, 전체를 다 둘러보는 게 불가능한 주차장 회색 바닥도 열심히 뒤졌다.',
  },
  {
    title: '이건 제목입니다.',
    createdDate: '2022년 10월 17일',
    background: '#a1c8e9',
    rotate: 1,
    children:
      '텔레비전에서는 그 사람이 주로 경찰서 소속 목사이거나 소방관이거나 제복을 입은 장교다. 하지만 내가 문을 열었을 때, 이제 나의 세상이 완전히 바뀌리라는 것을 알게 됐을 때,',
  },
  {
    title: '괜찮은가요?',
    createdDate: '2022년 10월 17일',
    background: '#e4dae2',
    rotate: -1,
    children:
      '여자아이가 물었고, 나는 조금 주저했다. 누군가가 나에게 그 사람이 맞느냐고 물을 때면 자주 나오는 반응이었다.그 사람들이 묻는 사람은 나이기도 했고, 내가 아니기도 했으니까.',
  },
];

const Card = ({
  title,
  createAt,
  background = '#fff69b',
  rotate,
  children,
  from = 'joonsuk',
}: CardProps) => {
  return (
    <Container background={background} rotate={rotate}>
      <Body>
        <Title>{title}</Title>
        <ContentWrapper>
          <Content>{children}</Content>
        </ContentWrapper>
        <SubInfo>
          <span>{createAt}</span>
        </SubInfo>
      </Body>
      <Footer>
        <Author>
          by <B>{from}</B>
        </Author>
      </Footer>
    </Container>
  );
};

const Container = styled.div<{ background?: string; rotate: number }>`
  /* width: 20rem; */
  width: 100%;
  border-radius: 0px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.2s ease-in 0s;
  /* margin: 1rem; */
  overflow: hidden;
  display: flex;
  flex-direction: column;

  background-color: ${(props) =>
    props.background ? props.background : '#ffffff'};

  cursor: pointer;

  transform: rotate(${(props) => props.rotate}deg);
  &:hover {
    transform: rotate(0);
  }
`;

const Body = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #000000;
`;

const ContentWrapper = styled.div`
  flex: 1 1 0%;
`;

const Content = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 5rem;
  display: -webkit-box;
  -webkit-line-clamp: 5; // 5번째 줄부터 ellipsis 적용
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495057;
`;

const SubInfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #868e96;
`;

const Footer = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid #868e96;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Author = styled.p`
  text-decoration: none;
  color: #868e96;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const B = styled.b`
  font-weight: 600;
  padding-left: 0.3rem;
  color: #000000;
`;

export default Card;
