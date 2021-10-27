import * as React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { setup } from 'twind';
import { asyncVirtualSheet, getStyleTagProperties } from 'twind/server';
import twindConfig from '../twind.config';

const sheet = asyncVirtualSheet();

setup({ ...twindConfig, sheet });

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    sheet.reset();
    const initialProps = await Document.getInitialProps(ctx);
    const { id, textContent } = getStyleTagProperties(sheet);
    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    };

    return {
      ...initialProps,
      styles: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...initialProps.styles,
        React.createElement(`style`, styleProps),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="shortcut icon" href="https://assets.dogegram.xyz/favicon.ico" />
        
        <meta name="title" content="Dogegram"/>
        <meta name="description" content="The new, sleek, and noice social media platform!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://dogegram.xyz/"/>
        <meta property="og:title" content="Dogegram"/>
        <meta property="og:description" content="The new, sleek, and noice social media platform!"/>
        <meta property="twitter:url" content="https://dogegram.xyz/"/>
        <meta property="twitter:title" content="Dogegram"/>
        <meta property="twitter:description" content="The new, sleek, and noice social media platform!"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
