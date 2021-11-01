import React from "react";

import ModalCustom from 'react-modal';

import { Title } from "../Title";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
}

export function Modal({ closeModal, modalOpen }: Props) {
  return (
    <ModalCustom
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title
        title="Teste"
        fontSize={1}
        size="rem"
      />

      <button
        type="button" 
        onClick={closeModal} 
        className="react-modal-close"
      >Fechar</button>
    </ModalCustom>
  );
}