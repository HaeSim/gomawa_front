import { ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import globalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

// emotion 관련 이슈
// https://howdy-blog-v2.vercel.app/storybook/setting-emotion

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Story />
    </ThemeProvider>
  ),
];
