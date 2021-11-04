import React, { useState } from "react";

import { Container, Card } from './styles';

import { Modal } from "../Modal";
import { Title } from "../Title";

export function Portfolio(){
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return(
    <Container id="portfolio">
      <Title 
        title="Portfólio"
        fontSize={3}
        size="rem" 
        BorderColor="#fff"
        BorderSize={15}
      />

      {/* <Card 
        onClick={openModal} 
        src="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1403647406" 
      /> */}

      {modalOpen && <Modal modalOpen={modalOpen} closeModal={closeModal} />}
    </Container>
  );
}