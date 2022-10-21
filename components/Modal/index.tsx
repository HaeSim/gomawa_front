import React from 'react';
import styled from '@emotion/styled';
import ModalPortal from './ModalPortal';

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  backgroundColor?: string;
}

const Modal = ({
  children,
  open,
  onClose,
  backgroundColor = '#ffffff',
}: ModalProps) => {
  if (!open) return null;
  return (
    <ModalPortal>
      <Container role='dialog' onClick={(e) => e.stopPropagation()}>
        <BackDrop />
        <ModalBody backgroundColor={backgroundColor}>
          <button type='button' onClick={onClose}>
            Close Modal
          </button>
          <ContentWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
        </ModalBody>
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

const ModalBody = styled.div<{ backgroundColor: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid rgb(0, 0, 0);
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 32px;
`;

const ContentWrapper = styled.div`
  flex: 1 1 0%;
`;

const Content = styled.p`
  margin: 0px 0px 1.5rem;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  /* height: 5rem; */
  display: -webkit-box;
  -webkit-line-clamp: 5; // 5번째 줄부터 ellipsis 적용
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #495057;
`;

export default Modal;
