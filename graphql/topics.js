import { gql } from 'graphql-request';

export const GET_TOPICS = gql`
  query {
    topics {
      id
      topicName
      displayOrder
      queryString
    }
  }
`;
