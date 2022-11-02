import styled from '@emotion/styled';
import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <Loadingwrapper>
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        width='100px'
        height='100px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <path
          d='M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50'
          fill='#da2a1c'
          stroke='none'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='1s'
            repeatCount='indefinite'
            keyTimes='0;1'
            values='0 50 51;360 50 51'
          ></animateTransform>
        </path>
      </Svg>
    </Loadingwrapper>
  );
};

export default Loading;

const Loadingwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Svg = styled.svg`
  margin: auto;
  display: block;
  shape-rendering: auto;
`;
