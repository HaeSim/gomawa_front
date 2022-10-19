import React, { useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import { useArgs } from '@storybook/client-api';
import Modal, { ModalProps } from './index';

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    children: {
      table: { disable: true },
    },
    onClose: {
      action: 'close Event',
    },
    backgroundColor: {
      type: 'string',
    },
  },
} as Meta;

// Basic
const BasicTemplate: Story<ModalProps> = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const openModal = useCallback(() => {
    updateArgs({ open: true });
  }, []);

  const closeModal = useCallback(() => {
    updateArgs({ open: false });
  }, []);

  return (
    <TemplateContainer>
      <h1>Basic Modal</h1>
      <br />
      <button onClick={openModal}>Open Modal</button>
      <Modal {...args} open={open} onClose={closeModal}>
        <ModalContent>Modal Contents</ModalContent>
      </Modal>
    </TemplateContainer>
  );
};

export const basic = BasicTemplate.bind({});
basic.args = {
  open: false,
};

const TemplateContainer = styled.div`
  background-color: white;
  width: 50%;
  height: 100vh;
`;

const ModalContent = styled.div`
  width: 100%;
`;
