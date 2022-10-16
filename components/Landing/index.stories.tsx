import React from 'react';
import { Meta } from '@storybook/react';
import Landing from '.';

export default {
  title: 'components/Landing',
  component: Landing,
  argTypes: {},
} as Meta;

const Template = () => {
  return <Landing />;
};

export const All = Template.bind({});

All.args = {};
