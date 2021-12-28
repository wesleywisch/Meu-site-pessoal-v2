import { useContext } from "react";

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from './styles';

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
  toggleTheme: () => void;
}

export function Sidebar({ isOpen, toggle, toggleTheme }: SidebarProps) {
  const { title } = useContext(ThemeContext);

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
          >
            Profile
          </SidebarLink>

          <SidebarLink
            to="aboutMe"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
          >
            AboutMe
          </SidebarLink>

          <SidebarLink
            to="resume"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
          >
            Resume
          </SidebarLink>

          <SidebarLink
            to="contactMe"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
          >
            ContactMe
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
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
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}