import Modal from './Modal';
import CreateMakerLog from '../form/CreateMakerLog';
import SelectPost from '../common/SelectPost';
import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateNewPostModal = ({ isModalOpen, onCloseModal }) => {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(1);

  const closeModalWithPage = () => {
    router.push('/');
    onCloseModal();
    setPageCount(1);
  };

  return (
    <Modal isModalOpen={isModalOpen} onCloseModal={closeModalWithPage}>
      {pageCount === 1 ? (
        <SelectPost pageCount={pageCount} setPageCount={setPageCount} />
      ) : null}
      {pageCount === 2 ? (
        <CreateMakerLog
          pageCount={pageCount}
          setPageCount={setPageCount}
          onCloseModal={closeModalWithPage}
        />
      ) : null}
    </Modal>
  );
};

export default CreateNewPostModal;
