import React from 'react';
import styled from '@emotion/styled';
import { IoMdClose } from 'react-icons/io';
import ModalPortal from './ModalPortal';

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
  if (!open) return null;
  return (
    <ModalPortal>
      <Container role='dialog' onClick={(e) => e.stopPropagation()}>
        <BackDrop />
        <Wrapper backgroundColor={backgroundColor}>
          <ModalHead>
            <Title>{title}</Title>
            <CloseButton
              type='button'
              backgroundColor={backgroundColor}
              onClick={onClose}
            >
              <IoMdClose size={24} />
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

const Container = styled.div`
  position: fixed;
  inset: 0px;
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
`;

const Wrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 120px);
  max-width: 600px;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 16px 32px;
`;

const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const ModalBody = styled.div`
  flex: 1 1 0%;
`;

const ModalFooter = styled.div`
  padding: 0.5rem 0;
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
