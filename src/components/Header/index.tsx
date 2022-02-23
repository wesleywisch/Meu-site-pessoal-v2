import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { NavLink } from './NavLink';

import { HeaderContainer, HeaderName, MobileIcon, HeaderNav, HeaderSwitch } from './styles';

import { FaBars } from 'react-icons/fa';

type HeaderProps = {
  toggleTheme: () => void;
  toggle: () => void;
}

export function Header({ toggleTheme, toggle }: HeaderProps) {
  const { title } = useContext(ThemeContext);

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

      <HeaderSwitch>
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
      </HeaderSwitch>
    </HeaderContainer>
  )
}