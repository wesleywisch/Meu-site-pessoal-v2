import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { Container, Title, HeaderContainer, Ul, Li, Navegacao } from './styles';
import { BarsProgress } from "../BarsProgress";

type Props = {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext)

  return (
    <>
      <BarsProgress />

      <Container>
        <Title>Wesley Wisch</Title>

        <HeaderContainer>
          <Navegacao>
            <Ul>
              <Li>Sobre</Li>
              <Li>Portfólio</Li>
              <Li>Skills</Li>
              <Li>Contato</Li>
              <Li className="github">Github</Li>
            </Ul>
          </Navegacao>

          <Switch
            className="switch"
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
        </HeaderContainer>
      </Container>
    </>
  );
}