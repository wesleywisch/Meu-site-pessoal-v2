import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import { NavLink } from './NavLink';

import { HeaderContainer, HeaderName, MobileIcon, HeaderNav } from './styles';

type HeaderProps = {
  toggle: () => void;
}

export function Header({ toggle }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderName>
        <Link to='/'>
          <h1>Wesley Wisch</h1>
        </Link>
      </HeaderName>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <HeaderNav>
        <ul>
          <NavLink title='Home' path='/' />
          <NavLink title='Projetos' path='/projetos' includes />
        </ul>
      </HeaderNav>
    </HeaderContainer>
  )
}