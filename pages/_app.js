import '../styles/globals.css';
import Head from 'next/head';
import { ProfileTabIndexProvider } from '../store/profile-tab-index-context';
import { FeedTabProvider } from '../store/feed-tab-context';
import { TopicsProvider } from '../store/topic-context';
import { MakerlogTagsProvider } from '../store/makerlog-tag-context';
import { MakerlogContextProvider } from '../store/makerlog-context';
import MainNavigation from '../components/layout/MainNavigation';

function MyApp({ Component, pageProps }) {
  return (
    <MakerlogContextProvider>
      <MakerlogTagsProvider>
        <TopicsProvider>
          <FeedTabProvider>
            <ProfileTabIndexProvider>
              <Head>
                <title>Disquiet Makerlog Prototype</title>
              </Head>
              <MainNavigation />
              <Component {...pageProps} />
            </ProfileTabIndexProvider>
          </FeedTabProvider>
        </TopicsProvider>
      </MakerlogTagsProvider>
    </MakerlogContextProvider>
  );
}

export default MyApp;
