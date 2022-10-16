import { Meta } from '@storybook/react';
import React from 'react';

import CountUp from './CountUp';

export default {
  title: 'components/Landing/CountUp',
  component: CountUp,
  argTypes: {
    end: {
      description: '[Essential] Target number',
    },
    start: {
      description: '[Optional] Start number',
    },
    duration: {
      description: '[Optional] Total time taken',
    },
    fontSize: {
      description: '[Optional] font size',
    },
    fontWeight: {
      description: '[Optional] font weight',
    },
    color: {
      description: '[Optional] font color',
    },
  },
} as Meta;

const Template = (
  args: JSX.IntrinsicAttributes & {
    end: number;
    start?: number;
    duration?: number;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
  },
) => <CountUp {...args} />;

export const Default = Template.bind({});

Default.args = {
  end: 1000,
  start: 0,
  duration: 1000,
};

export const Strong = Template.bind({});

Strong.args = {
  end: 1000,
  start: 0,
  duration: 1000,
  fontSize: 2.0,
  fontWeight: 800,
  color: 'red',
};
