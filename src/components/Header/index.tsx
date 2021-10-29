import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { Container, HeaderContainer, Navegacao } from './styles';

type Props = {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <HeaderContainer>
        <h1>Wesley Wisch</h1>

        <Navegacao>
          <ul>
            <li>PORTFÓLIO</li>
            <li>SOBRE</li>
            <li>TECNOLOGIAS</li>
            <li>CONTATO</li>
          </ul>
        </Navegacao>


      </HeaderContainer>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={25}
        width={50}
        handleDiameter={20}
        offHandleColor="#000"
        offColor="#fff"
        onColor="#121214"
      />
    </Container>
  );
}