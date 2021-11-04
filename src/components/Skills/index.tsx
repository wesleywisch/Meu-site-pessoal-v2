import React from 'react';
import { Title } from '../Title';

import { Container } from './styles';

export function Skills() {
  return(
    <Container id="skills">
      <Title 
        title="Skills"
        fontSize={3}
        size="rem"
        BorderColor="#fff"
        BorderSize={15}
      />
    </Container>
  );
}