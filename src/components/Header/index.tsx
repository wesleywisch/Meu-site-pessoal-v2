import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { Link } from 'react-router-dom';

import { Container, Title, HeaderContainer, Ul, Li, Navegacao } from './styles';
import { BarsProgress } from "../BarsProgress";

import { Link as LinkScroll } from "react-scroll";

type Props = {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext);

  return (
    <>
      <BarsProgress />

      <Container>
        <Title>Wesley Wisch</Title>

        <HeaderContainer>
          <Navegacao>
            <Ul>
              <Li>
                <LinkScroll
                  activeClass="active"
                  to="sobre"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={700}
                  href="#sobre"
                >
                  Sobre
                </LinkScroll>
              </Li>

              <Li>
                <LinkScroll
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={700}
                  href="#portfolio"
                >
                  Portfólio
                </LinkScroll>
              </Li>

              <Li>
                <LinkScroll
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={700}
                  href="#Skills"
                >
                  Skills
                </LinkScroll>
              </Li>

              <Li>
                <LinkScroll
                  activeClass="active"
                  to="contato"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  href="#Contato"
                >
                  Contato
                </LinkScroll>
              </Li>

              <Li className="github"><Link to="/github">Github</Link></Li>
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