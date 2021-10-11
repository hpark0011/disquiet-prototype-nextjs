import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { ProfileTabIndexProvider } from '../store/profile-tab-index-context';

function MyApp({ Component, pageProps }) {
  return (
    <ProfileTabIndexProvider>
      <Layout>
        <Head>
          <title>Disquiet Makerlog Prototype</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ProfileTabIndexProvider>
  );
}

export default MyApp;
