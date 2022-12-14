import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='format-detection' content='telephone=no' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='modal-root' />
        </body>
      </Html>
    );
  }
}
