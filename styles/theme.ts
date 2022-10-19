// theme interface는 여기서 선언.
declare module '@emotion/react' {
  export interface Theme {
    primaryColor: string;
    bp: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
  }
}

// 미디어 쿼리에서는 css 변수를 사용할 수 없다.
// https://intrepidgeeks.com/tutorial/do-you-want-to-use-css-variables-in-the-media-query-declaration-try-this
export const breakPoint = {
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};

const theme = {
  primaryColor: '#000000',
  bp: {
    xxl: `${breakPoint.xxl}px`,
    xl: `${breakPoint.xl}px`,
    lg: `${breakPoint.lg}px`,
    md: `${breakPoint.md}px`,
    sm: `${breakPoint.sm}px`,
  },
};

export default theme;
