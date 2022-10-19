import React from 'react';
import Card, { CardProps } from './index';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => {
  return (
    <Container>
      <Card {...args}>Hello</Card>
    </Container>
  );
};

const Container = styled.div``;

export const card = Template.bind({});
card.args = {};
