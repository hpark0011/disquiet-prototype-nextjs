import styled from 'styled-components';
import CardBodyBody from '../post/CardBodyBody';

const MyCard = () => {
  return (
    <MyCardContainer>
      <CardBodyBody />
    </MyCardContainer>
  );
};

const MyCardContainer = styled.div`
  display: flex;
`;

export default MyCard;
