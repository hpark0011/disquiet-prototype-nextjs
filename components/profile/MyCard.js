import styled from 'styled-components';
import CardBodyBody from '../post/CardBodyBody';
import CardBodyFooter from '../post/CardBodyFooter';

const MyCard = ({ title, content }) => {
  return (
    <MyCardContainer>
      <div className='title'>{title}</div>
      <CardBodyBody content={content} />
      <CardBodyFooter />
    </MyCardContainer>
  );
};

const MyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f5f5f7;
  border-radius: 24px;
  padding: 16px;

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 6px;
  }
`;

export default MyCard;
