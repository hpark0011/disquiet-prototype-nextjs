import styled from 'styled-components';
import SquarePencilIcon from '../../assets/icons/square_and_pencil.svg';
import PlusIcon from '../../assets/icons/plus_icon.svg';
import QuestionMarkBubbleIcon from '../../assets/icons/question_mark_bubble.svg';
import ArrowRightCircle from '../../assets/icons/arrow_right_circle.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SelectPost = ({ pageCount, setPageCount }) => {
  const router = useRouter();

  const onMakerlogClick = () => {
    router.push(router.asPath);
    setPageCount(pageCount + 1);
  };

  return (
    <Container>
      <h2 className='modal-title'>어떤 이야기를 나누고 싶나요?</h2>
      <div className='select-post-wrapper'>
        <div className='select-post' onClick={onMakerlogClick}>
          <SquarePencilIcon />
          메이커일지 기록하기
          <ArrowRightCircle />
        </div>
        <Link href={router.asPath}>
          <a className='select-post'>
            <PlusIcon />
            프로덕트 공유하기
            <ArrowRightCircle />
          </a>
        </Link>
        <Link href={router.asPath}>
          <a className='select-post'>
            <QuestionMarkBubbleIcon />
            커뮤니티에 질문하기
            <ArrowRightCircle />
          </a>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .modal-title {
    font-size: 20px;
    font-weight: 500;
    margin: 4px 0 8px 0;
  }

  .select-post-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .select-post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    background-color: #f5f5f7;
    width: 100%;
    margin-top: 8px;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;

    font-size: 15px;
    color: #707070;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #fcfcfe;
      box-shadow: 0px 0px 8px rgb(0 0 0 / 13%);
    }
  }
`;

export default SelectPost;
