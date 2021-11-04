import React from 'react';

import { Title } from '../Title';

import { Container } from './styles';

export function Contato() {
  return (
    <Container id="contato">
      <Title
        title="Contato"
        fontSize={3}
        size="rem"
        BorderColor="#fff"
        BorderSize={15}
      />
    </Container>
  );
}