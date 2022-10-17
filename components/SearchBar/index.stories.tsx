import React from 'react';
import SearchBar, { SearchBarProps } from './index';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';

/**
 * Controls에 대한 정보는 해당 컴포넌트의 interface에서 어느정도 정의 할 수 있다.
 * Docs에 description은 아래 export default 객체에서 설정하거나,
 * interface에 주석으로 설정할 수 있다.
 */
export default {
  title: 'components/SearchBar',
  component: SearchBar,
  argTypes: {
    value: {
      type: 'string',
    },
    handleChange: {
      type: 'function',
    },
    handleClick: {
      type: 'function',
    },
    hoverColor: {
      type: 'string',
    },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args) => {
  return (
    <Container>
      <SearchBar {...args} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
`;

export const basic = Template.bind({});
basic.args = {
  handleChange: (e) => {
    console.log(e);
  },
  handleClick: (e) => {
    console.log(e);
  },
  hoverColor: '#ef2a23',
  value: '',
};
