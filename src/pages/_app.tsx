import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Petz - Seu pet center de estimação</title>
        <link rel="shortcut icon" href="/img/petz.png" />
        <link rel="apple-touch-icon" href="/img/petz.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Seu pet center de estimação" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
