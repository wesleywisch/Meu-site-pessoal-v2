import { useContext } from "react";

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { NavLink } from '../Header/NavLink';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
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
          <NavLink title="Home" path="/" toggle={toggle} />
          <NavLink title="Projetos" path="/projetos" toggle={toggle} />
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