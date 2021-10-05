import { ContentCutSharp } from '@mui/icons-material';
import styled from 'styled-components';
import ArrowRightCircle from '../../assets/icons/arrow_right_circle.svg';

const CardBodyBody = ({ content }) => {
  return (
    <Container>
      <div className='content'>
        {content}
        {/* 이전 가설은 사이트 사용자가 많아지면 포스트가 많아질 것이라는 거였는데
        생각보다 포스트가 많지 않다. 몇가지 이유가 있는 것 같다.
        <br />
        <br />
        1) 완벽한 제품을 올려야 된다는 생각때문에 MVP나 아직 개발이 덜 된
        프로덕트를 공유하는데 부담을 느낀다. (사용자 피드백)
        <br />
        2) 우리가 홍보한 네트워크 안에서 올릴 만한 사람들은 이미 다 올렸다. 신규
        채널에 홍보를 해야된다. (추측)
        <br />
        3) 업데이트한 프로덕트를 올려도 되는지 잘 모르겠다. (사용자 피드백)
        <br />
        <br />
        포스트가 많지 않은 문제를 해결하기 위해 2가지 방향성을 정했다. 첫째는,
        컨텐츠 크리에이터의 니즈에 초점을 맞추는 것. 둘째는, 메이커들이 컨텐츠를
        만드는 부담이 적고 니즈를 더 자주 느끼는 포스트 유형을 만드는 것.
        <br />
        구체적인 포스트 유형을 고민하기 위해서 앞으로 Priminary Research와
        사용자 리서치를 할 계획이다. Priminary Research에서는 Twitter, Medium,
        Brunch, Facebook, LinkedIn 등 현재 메이커들이 어떤 내용의 컨텐츠를 많이
        만드는지 볼 것이고 Secondary Research에서는 메이커들이 컨텐츠를
        포스팅하는 동기를 파악할 계획이다. */}
      </div>
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

    &:hover {
      background-color: #fdfdfd;
    }
  }
`;

const ArrowRightCircleIcon = styled(ArrowRightCircle)``;

export default CardBodyBody;
