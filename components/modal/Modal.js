import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Modal = ({ isModalOpen, onCloseModal, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const handleKeydown = (e) => {
    if (e.key === 'Escape') {
      onCloseModal();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    document.addEventListener('keydown', handleKeydown);
  }, []);

  const modalContent = isModalOpen ? (
    <ModalOverlay onClick={onCloseModal}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <StyledCloseRoundedIcon onClick={onCloseModal} />
        <div className='modal-body-content'>{children}</div>
      </div>
    </ModalOverlay>
  ) : null;

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
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: saturate(180%) blur(7px);
  -webkit-tap-highlight-color: transparent;

  .modal {
    margin-top: -24px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 560px;
    height: auto;
    border-radius: 24px;
    padding: 16px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .modal-body-content {
    margin-top: 0px;
  }
`;

const StyledCloseRoundedIcon = styled(CloseRoundedIcon)`
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #e5e5e8;
  color: #707070;
  cursor: pointer;
  position: absolute;
  padding: 4px;
  box-sizing: content-box;
  top: -8px;
  right: -8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(16px);
  border-radius: 2rem;
`;

export default Modal;
