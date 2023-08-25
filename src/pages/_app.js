import { KeycloakProvider } from '@/services/KeycloakProvider';
import Head from 'next/head';
import '../styles/globals.css';


function App({ Component, pageProps }) {
  return (
    <div>

      <Head>
        <title>SimpSite</title>
      </Head>
      <Component {...pageProps} />


    </div>
  );
}

export default App;

