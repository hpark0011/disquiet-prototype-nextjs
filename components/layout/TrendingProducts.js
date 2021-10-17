import styled from 'styled-components';
import Image from 'next/image';

const TrendingProducts = ({ trendingProducts }) => {
  return (
    <Container>
      <div className='label'>🔥 실시간 트렌딩 프로덕트</div>
      <div className='border-box'>
        {trendingProducts.map((product) => {
          const { id, rank, productTitle, thumbnailImage } = product;
          return (
            <div key={id} className='trending-product'>
              <div className='rank'>{rank}</div>
              <div className='thumbnail'>
                <Image
                  src={thumbnailImage.url}
                  alt={productTitle}
                  width='40'
                  height='40'
                />
              </div>
              <div className='product-title'>{productTitle}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .label {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    color: #303030;
    margin-bottom: 14px;
  }

  .border-box {
    padding: 4px;
    background-color: #fff;
    border-radius: 1rem;
  }

  .trending-product {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 6px 8px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f7;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    }
  }

  .rank {
    font-size: 14px;
    color: #8e8e8e;
    margin-right: 0.5rem;
    font-family: 'Helvetica Neue', Helvetica;
  }

  .thumbnail {
    width: 32px;
    height: 32px;
    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
    margin-right: 8px;
    border-radius: 10px;
    overflow: hidden;
  }

  .product-title {
    font-size: 13px;
    font-weight: 500;
    line-height: 1em;
  }
`;

export default TrendingProducts;
