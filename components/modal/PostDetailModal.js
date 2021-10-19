import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import PostDetailContent from './PostDetailContent';

const PostDetailModal = ({ isModalOpen, makerlogId }) => {
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onClosePostDetailModal = (e) => {
    e.preventDefault();
    router.back();
  };

  const modalContent = isModalOpen && (
    <ModalOverlay onClick={onClosePostDetailModal}>
      <ModalWrapper>
        <div className='modal-container'>
          <PostDetailContent
            makerlogId={makerlogId}
            onClosePostDetailModal={onClosePostDetailModal}
          />
        </div>
      </ModalWrapper>
    </ModalOverlay>
  );

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

  .modal-container {
    display: flex;
    flex-direction: column;
    width: 960px;
    justify-content: center;
    position: relative;
    padding-top: 32px;
    padding-bottom: 56px;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

export default PostDetailModal;
