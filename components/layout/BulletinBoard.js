import styled from 'styled-components';
import NewsLetter from './NewsLetter';
import TrendingProducts from './TrendingProducts';
import Footer from './Footer';

const BulletinBoard = ({ trendingProducts }) => {
  return (
    <BulletinBoardContainer>
      <NewsLetter />
      <TrendingProducts trendingProducts={trendingProducts} />
      <Footer />
    </BulletinBoardContainer>
  );
};

const BulletinBoardContainer = styled.div`
  position: fixed;
  min-width: 264px;
  max-width: 264px;
`;

export default BulletinBoard;
