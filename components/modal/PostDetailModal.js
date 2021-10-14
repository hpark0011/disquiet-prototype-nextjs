import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRouter } from 'next/router';
import CardHeader from '../post/CardHeader';
import PostController from '../post/PostController';
import UpvoteButtonSmall from '../post/UpvoteButtonSmall';
import AuthorInfo from '../post/AuthorInfo';
import CommentSection from '../comment/CommentSection';
import { useInView } from 'react-intersection-observer';

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  user,
  tags,
  upvote,
  content,
  title,
  date,
  currentPageRoute,
}) => {
  const { ref, inView } = useInView();
  const [isBrowser, setIsBrowser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onClosePostDetailModal = (e) => {
    e.preventDefault();
    router.push(currentPageRoute, undefined, { shallow: false });
    setIsModalOpen(false);
    setIsBrowser(false);
  };

  const modalContent = isModalOpen ? (
    <ModalOverlay onClick={onClosePostDetailModal}>
      <ModalWrapper>
        <div className='modal-container'>
          <div className='modal-header' ref={ref}>
            <CardHeader
              noMargin={true}
              lightFont={true}
              user={user}
              date={date}
            />
            <StyledCloseRoundedIcon onClick={onClosePostDetailModal} />
          </div>
          <div className='modal-wrapper' onClick={(e) => e.stopPropagation()}>
            <PostController inView={inView} />
            <div className='modal-body-content'>
              {title ? <div className='title'>{title}</div> : ''}
              <div className='content-header'>
                <div className='tags-wrapper'>
                  {tags.map((tag) => {
                    const { id, label, slug } = tag;
                    return (
                      <div key={id} className={`tag ${label}`}>
                        {label}
                      </div>
                    );
                  })}
                </div>
                <UpvoteButtonSmall upvote={upvote} />
              </div>
              <div className='content'>{content}</div>
              <AuthorInfo user={user} />
              <CommentSection />
            </div>
          </div>
        </div>
      </ModalWrapper>
    </ModalOverlay>
  ) : null;

  console.log('modal content:::', !!modalContent);

  // if (!!modalContent) {
  //   return ReactDOM.createPortal(
  //     modalContent,
  //     document.getElementById('modal-root')
  //   );
  // } else {
  //   return null;
  // }

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: saturate(180%) blur(7px);
  -webkit-tap-highlight-color: transparent;
  overflow: scroll;

  .sticky-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    width: 960px;
    justify-content: center;
    position: relative;
    padding-top: 32px;
    padding-bottom: 56px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
  }

  .modal-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 960px;
    height: auto;
    border-radius: 24px;
    padding: 16px 16px 40px 16px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    align-items: center;
  }

  .modal-body-header {
    display: flex;
    margin-bottom: 40px;
    width: 100%;
    position: sticky;
    top: 12px;
  }

  .modal-body-content {
    margin-top: 0px;
    width: 640px;
    justify-content: center;
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .tags-wrapper {
    display: flex;
  }

  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 1em;
    padding: 6px 10px 4px 10px;
    border-radius: 20px;
    background-color: #f5f5f7;
    color: #707070;
    margin-right: 6px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag.MVP {
    background-color: #eaf2fd;
    color: #2f80ed;
  }

  .tag.마일스톤 {
    background-color: #fff1ec;
    color: #fe7644;
  }

  .tag.문제발견 {
    background-color: #fdeded;
    color: #ea4746;
  }

  .tag.아이디어 {
    background-color: #f0eeff;
    color: #6d55ff;
  }

  .tag.인사이트 {
    background-color: #fffaf0;
    color: #fdcd66;
  }

  .title {
    font-size: 28px;
    color: #000;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .content {
    font-size: 16px;
    line-height: 1.72em;
    word-break: keep-all;
    margin-bottom: 32px;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

const StyledCloseRoundedIcon = styled(CloseRoundedIcon)`
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #e5e5e8;
  color: #707070;
  cursor: pointer;
  position: relative;
  padding: 2px;
  box-sizing: content-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(16px);
  border-radius: 2rem;
`;

export default Modal;
