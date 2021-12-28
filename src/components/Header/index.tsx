import { useEffect, useState, useContext } from "react";

import { ThemeContext } from 'styled-components';

import { animateScroll as scroll } from 'react-scroll';

import Switch from 'react-switch';

import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from './styles';

type HeaderProps = {
  toggleTheme: () => void;
  toggle: () => void;
}

export function Header({ toggleTheme, toggle }: HeaderProps) {
  const { title } = useContext(ThemeContext);

  const [scrollNav, setScrollNav] = useState(false);

  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  function toggleHome() {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Wesley Wisch</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                Profile
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="aboutMe"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                AboutMe
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="resume"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                Resume
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="contactMe"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                ContactMe
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
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
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}