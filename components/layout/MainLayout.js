import styled from 'styled-components';
import Categories from './Categories';
import NewsLetter from './NewsLetter';
import TrendingProducts from './TrendingProducts';
import Footer from './Footer';

const MainLayout = ({ children, trendingProducts }) => {
  return (
    <MainLayoutContainer>
      <div className='topics'>
        <Categories />
      </div>
      <div className='content'>{children}</div>
      <div className='bulletin-board'>
        <div className='sticky-wrapper'>
          <NewsLetter />
          <TrendingProducts trendingProducts={trendingProducts} />
          <Footer />
        </div>
      </div>
    </MainLayoutContainer>
  );
};

const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  width: 100%;
  height: 100vh;
  margin: auto;
  max-width: 1120px;
  position: relative;
  z-index: 0;
  column-gap: 32px;

  .topics {
    position: relative;
    min-width: 160px;
    max-width: 160px;
  }

  .content {
    padding-top: 4px;
    width: 100%;
  }

  .bulletin-board {
    position: relative;
  }

  .sticky-wrapper {
    position: fixed;
    max-width: 264px;
  }
`;

export default MainLayout;
