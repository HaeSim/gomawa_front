import React, { useState, useCallback } from 'react';

type UseModalType = [boolean, () => void, () => void];

const useModal = (): UseModalType => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return [open, openModal, closeModal];
};

export default useModal;
