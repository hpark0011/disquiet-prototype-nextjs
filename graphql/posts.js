import { gql } from 'graphql-request';

export const GET_TRENDING_PRODUCTS = gql`
  query {
    trendingProducts {
      id
      rank
      productTitle
      thumbnailImage {
        id
        url
      }
    }
  }
`;
