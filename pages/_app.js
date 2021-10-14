import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { ProfileTabIndexProvider } from '../store/profile-tab-index-context';
import { TopicsProvider } from '../store/topic-context';
import MainNavigation from '../components/layout/MainNavigation';

function MyApp({ Component, pageProps }) {
  return (
    <TopicsProvider>
      <ProfileTabIndexProvider>
        <Head>
          <title>Disquiet Makerlog Prototype</title>
        </Head>
        <MainNavigation />
        <Component {...pageProps} />
      </ProfileTabIndexProvider>
    </TopicsProvider>
  );
}

export default MyApp;
