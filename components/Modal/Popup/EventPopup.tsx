import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import gettingReadyImage from 'public/images/goguma_bow.png';

type Props = {
  popupHandler: Function;
};

const EventPopup = ({ popupHandler }: Props) => {
  const doNotSeeToday = () => {
    const expiryDate = new Date().getDate() + 1;

    localStorage.setItem('expiryDate', String(expiryDate));
    popupHandler(false);
  };

  return (
    <Container>
      <Image
        src={gettingReadyImage}
        alt='머그컵 팝업'
        width={300}
        height={300}
        objectFit='contain'
      />
      {/* <Button>X 오늘 하루 보지 않기</Button> */}
      <ExtraLink onClick={doNotSeeToday}>오늘 하루 보지 않기</ExtraLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 51px;

  width: 100%;
  height: 100%;
`;

const ExtraLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 36px;
  background-color: gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  cursor: pointer;
  vertical-align: middle;
  font-size: 14px;

  transition: background-color 0.25s;
  :hover {
    background-color: #363636;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 4px;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #6b6b6b;

  &:hover {
    background-color: #eee;
  }
`;

export default EventPopup;
