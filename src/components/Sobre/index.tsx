import React from "react";

import { Container, ContainerParagrafo, Paragrafo } from './styles';

import { Title } from "../Title";

export function Sobre() {
  return (
    <Container id="sobre">
      <Title
        title="Sobre"
        fontSize={3}
        size="rem"
        BorderColor="#fff"
        BorderSize={15}
      />

      <ContainerParagrafo>
        <Paragrafo>
          Eu me chamo Wesley tenho 17 anos, atualmente sou desenvolvedor Front-End web. Estou em busca da minha primeira oportunidade de emprego como desenvolvedor Front-End, e moro em Canarana-MT
        </Paragrafo>

        <Paragrafo>
          Meu primeiro contato com a programação foi em fevereiro de 2021 com JavaScript, desde então venho cada vez mais me aprofundando nessa área, conhecendo novas tecnologias e aprimorando os meus conhecimentos.
        </Paragrafo>
      </ContainerParagrafo>
    </Container>
  );
}