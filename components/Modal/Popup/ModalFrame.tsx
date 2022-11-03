import React from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import ModalPortal from '../ModalPortal';

type Props = {
  children: any;
  setOnModal: any;
};
const ModalFrame = ({ children, setOnModal }: Props) => {
  return (
    <ModalPortal>
      <Background onClick={() => setOnModal(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ConentsWrapper>{children}</ConentsWrapper>
          <CloseButton onClick={() => setOnModal(false)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </CloseButton>
        </ModalContainer>
      </Background>
    </ModalPortal>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  animation: ${fadeIn} 0.25s;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 360px;
  height: 420px;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 5px 5px 10px #0000004d;
  border-radius: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: right;
  z-index: 1;

  animation: ${fadeIn} 0.25s;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background: rgb(0, 0, 0, 0);
  border: none;
  color: #606060;
  width: 36px;
  transition: 0.5s transform;

  &:hover {
    transition: 1s transform;
    transform: scale(1.2);

    color: #da2a1c;
    cursor: pointer;
  }
`;

const ConentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5%;
  color: white;
`;

export default ModalFrame;
