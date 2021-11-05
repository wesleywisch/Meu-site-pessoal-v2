import React, { useState } from "react";

import { Container, Card } from './styles';

import { Modal } from "../Modal";
import { Title } from "../Title";

import { PortfolioJson } from '../../json/Portfolio';

type Props = {
  id: number,
  img1: string,
  img2: string,
  img3: string,
  paragrafo: string,
  linkRepo: string,
  linkOnline: string,
}

export function Portfolio() {
  let item3: Props[] = PortfolioJson;
  
  const [modalOpen, setModalOpen] = useState(false);
  const [item2, setItem2] = useState<Props[]>([]);


  function openModal(id: number) {
    setModalOpen(true);
    let itemFiltered = item3.filter(i => i.id === id);
    setItem2(itemFiltered);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Container id="portfolio">
      <Title
        title="Portfólio"
        fontSize={3}
        size="rem"
        BorderColor="#fff"
        BorderSize={15}
      />

      {PortfolioJson.map((item, key) => (
        <Card
          key={key}
          onClick={() => openModal(item.id)}
          src={item.img1}
        />
      ))}

      {modalOpen && <Modal modalOpen={modalOpen} closeModal={closeModal} data={item2[0]} />}
    </Container>
  );
}