import { css } from '@emotion/react';
import reset from 'emotion-reset';

export const customScrollbarStyle = css`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #9f9f9f;
  }
  &::-webkit-scrollbar-button:start {
    background-color: transparent;
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-button:end {
    background-color: transparent;
    width: 0px;
    height: 0px;
  }
`;

const globalStyles = css`
  ${reset}

  :root {
  }

  body {
    ${customScrollbarStyle}
    background-color: #f7f7e5;
  }
`;

export default globalStyles;
