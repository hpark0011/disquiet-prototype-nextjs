import { ContentCutSharp } from '@mui/icons-material';
import styled from 'styled-components';
import ArrowRightCircle from '../../assets/icons/arrow_right_circle.svg';

const CardBodyBody = ({ content }) => {
  return (
    <Container>
      <div className='content'>{content}</div>
      <button className='more-button'>
        <div className='text'>...더보기</div>
        <ArrowRightCircleIcon />
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.6em;
    max-height: calc(21px * 8);
    word-break: keep-all;
    overflow: hidden;
    background: -webkit-linear-gradient(
      -90deg,
      #636363 75%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .more-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 3px 4px 3px 8px;
    border-radius: 10px;
    box-sizing: content-box;

    .text {
      font-size: 13px;
      line-height: 1em;
      color: #6d55ff;
    }
  }
`;

const ArrowRightCircleIcon = styled(ArrowRightCircle)``;

export default CardBodyBody;
