import React from 'react';
import NavBar, { NavBarProps } from './index';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';

export default {
  title: 'components/NavBar',
  component: NavBar,
  argTypes: {},
} as Meta;

const Template: Story<NavBarProps> = (args) => {
  return (
    <Container>
      <NavBar {...args} />
    </Container>
  );
};

const Container = styled.div``;

export const basic = Template.bind({});
basic.args = {};
