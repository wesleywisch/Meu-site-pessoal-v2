import React, { useState } from "react";

import { Container, Card } from './styles';

import { Modal } from "../Modal";

export function Portfolio(){
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return(
    <Container>
      <Card 
        onClick={openModal} 
        src="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1403647406" 
      />

      {modalOpen && <Modal modalOpen={modalOpen} closeModal={closeModal} />}
    </Container>
  );
}