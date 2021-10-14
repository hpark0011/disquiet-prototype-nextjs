import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => {
    return setIsModalOpen(false);
  };

  return [isModalOpen, onOpenModal, onCloseModal];
};

export default useModal;
