import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ModalPortal from './ModalPortal';
import { customScrollbarStyle } from 'styles/globalStyles';

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
  footerText?: string;
  backgroundColor?: string;
}

const Modal = ({
  children,
  open,
  onClose,
  title,
  footerText,
  backgroundColor = '#ffffff',
}: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [open]);

  if (!open) return null;

  return (
    <ModalPortal>
      <Container role='dialog' onClick={(e) => e.stopPropagation()}>
        <BackDrop onClick={onClose} />
        <Wrapper backgroundColor={backgroundColor}>
          <ModalHead>
            <Title>{title}</Title>
            <CloseButton
              type='button'
              backgroundColor={backgroundColor}
              onClick={onClose}
            >
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
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </CloseButton>
          </ModalHead>
          <ModalBody>
            <Content>{children}</Content>
          </ModalBody>
          <ModalFooter>
            <By>
              by <From>{footerText} 😄</From>
            </By>
          </ModalFooter>
        </Wrapper>
      </Container>
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

const Container = styled.div`
  position: fixed;
  inset: 0px;
  animation: ${fadeIn} 0.25s;
`;

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  z-index: -1;

  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  animation: ${fadeIn} 0.25s;
`;

const Wrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 40px);
  max-width: 600px;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
`;

const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 0 2rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.bp.sm}) {
    font-size: 1rem;
  }
`;

const ModalBody = styled.div`
  flex: 1 1 0%;
  padding: 0 2rem;
  max-height: 300px;
  overflow-y: auto;

  ${customScrollbarStyle}
`;

const ModalFooter = styled.div`
  border-top: 1px solid #868e96;
  padding: 1rem 2rem 1rem 2rem;
`;

const By = styled.p`
  color: #55575a;
`;
const From = styled.span`
  font-weight: 600;
  padding-left: 0.3rem;
  color: #333333;
`;

const Content = styled.p`
  margin: 0px 0px 1.5rem;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 1.075rem;
  line-height: 1.5;
  /* height: 5rem; */
  display: -webkit-box;
  /* -webkit-line-clamp: 5; // 5번째 줄부터 ellipsis 적용 */
  -webkit-box-orient: vertical;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  color: #333333;
`;

const CloseButton = styled.button<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background: rgb(0, 0, 0, 0);
  border-radius: 50%;
  border: none;
  color: #606060;
  width: 36px;
  height: 36px;
  transition: background-color 0.25s;

  &:hover {
    filter: brightness(0.9);
    background-color: ${(props) => props.backgroundColor};
  }
`;

export default Modal;
