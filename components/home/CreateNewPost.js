import styled from 'styled-components';
import PencilIcon from '../../assets/icons/pencil.svg';
import Link from 'next/link';
import CreateNewPostModal from '../modal/CreateNewPostModal';
import useModal from '../../hook/useModal';

const CreateNewPost = () => {
  const [isModalOpen, onOpenModal, onCloseModal] = useModal();

  return (
    <>
      <Link href='/' as='/create-post' passHref>
        <CreatePostContainer onClick={onOpenModal}>
          <div className='text'>프로덕트 빌딩 과정을 기록해보세요.</div>
          <div className='button-circular'>
            <PencilIcon />
          </div>
        </CreatePostContainer>
      </Link>
      <CreateNewPostModal
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

const CreatePostContainer = styled.a`
  display: flex;
  flex-direction: row;
  background-color: #f5f5f7;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-radius: 32px;
  border: 1px solid #f5f5f7;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid #6d55ff;
    box-shadow: rgb(109 85 255 / 40%) 0px 0px 0px 3px;
    background-color: #f8f9fb;
  }

  .text {
    margin-left: 12px;
    font-size: 14px;
    color: #8e8e8e;
    line-height: 1em;
  }

  .button-circular {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    padding: 1px;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default CreateNewPost;
