import { NavLink } from '../Header/NavLink';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
} from './styles';

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <NavLink title="Home" path="/" toggle={toggle} />
          <NavLink title="Projetos" path="/projetos" toggle={toggle} includes />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}