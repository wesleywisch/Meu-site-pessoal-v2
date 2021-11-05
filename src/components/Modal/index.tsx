import React from "react";

import ModalCustom from 'react-modal';

import { Title } from "../Title";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  data: {
    id: number,
    img1: string,
    img2: string,
    img3: string,
    paragrafo: string,
    linkRepo: string,
    linkOnline: string,
  };
}

export function Modal({ closeModal, modalOpen, data }: Props) {
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

      <p>{data.id}</p>

      <img style={{ width: "54px" }} src={data.img1} alt="" />

      <button
        type="button" 
        onClick={closeModal} 
        className="react-modal-close"
      >Fechar</button>
    </ModalCustom>
  );
}