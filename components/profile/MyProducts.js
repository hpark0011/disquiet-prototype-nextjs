import styled from 'styled-components';
import { Fragment } from 'react';

const MyProducts = ({ myProducts }) => {
  return (
    <MyProductsContainer>
      <TabContainer>
        <div className='column-headers-wrapper'>
          <div className='column-header'>프로덕트</div>
          <div className='column-header'>상태</div>
          <div className='column-header'>업로드일</div>
        </div>
        <div className='divider' />
        <div className='table-items-wrapper'>
          {myProducts.map((product, i) => {
            const { url_slug, name, thumbnail, is_approved, approved_at } =
              product;
            return (
              <Product key={i}>
                <ProductItemWrapper
                  className={is_approved ? null : 'disabled'}
                  onClick={() => onProductItemClick(url_slug)}
                >
                  <TableItem className='productItem'>
                    <div className='productThumbnail' />
                    {name}
                  </TableItem>
                </ProductItemWrapper>
                <TableItem>
                  {is_approved ? '✅ 리뷰완료' : '🔎 리뷰중'}
                </TableItem>
                <TableItem>3월 26일</TableItem>
                <TableItem className='lastItem'>
                  <EditButton onClick={() => onProductEditClick(url_slug)}>
                    수정하기
                  </EditButton>
                </TableItem>
              </Product>
            );
          })}
        </div>
      </TabContainer>
    </MyProductsContainer>
  );
};

const Product = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-column-gap: 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-sizing: content-box;
  width: 100%;
  padding: 0px 8px;

  &:hover {
    background-color: #fdfdfd;
  }
`;

const MyProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const TabContainer = styled.div`
  font-size: 13px;
  line-height: 1rem;
  color: #8e8e8e;

  .column-headers-wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-column-gap: 0.5rem;
  }

  .column-header {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }

  .divider {
    background: #e5e5e7;
    height: 1px;
    margin: 0.75rem 0 1rem 0;
    width: 100%;
  }

  .table-items-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const TableItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  &.productItem {
    font-size: 14px;
    color: #000;
    font-weight: 500;
  }
  &.lastItem {
    justify-content: flex-end;
  }

  .productThumbnail {
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    margin: 0;
    margin-right: 0.75rem;
    background-color: #e0e0e0;
  }
`;

const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem 0.5rem;
  font-size: 12px;
  line-height: 1em;
  color: #6d55ff;
  background: #e2ddff;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #6e55ff;
    color: #fff;
  }
`;

const ProductItemWrapper = styled.div`
  text-decoration: none;
  margin: 4px 0;
  padding: 4px;
  border-radius: 0.75rem;
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  /* &:hover {
    background-color: #fdfdfd;
    cursor: pointer;
    &.disabled {
      cursor: default;
      background-color: transparent;
    }
  } */
`;

const NoUploads = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: #c4c4c4;
  font-size: 14px;
  text-align: center;
  .emoji {
    font-size: 2rem;
  }
`;

export default MyProducts;
