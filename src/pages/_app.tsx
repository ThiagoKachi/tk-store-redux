import { AppProps } from 'next/app';
import Head from 'next/head';
import NextProgress from 'next-progress';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TKstore</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <NextProgress options={{ showSpinner: false }} color="#FCA8AC" />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
