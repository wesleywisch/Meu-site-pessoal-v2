import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { NavLink } from './NavLink';

import { HeaderContainer, HeaderName, HeaderNav, HeaderSwitch } from './styles';

type HeaderProps = {
  toggleTheme: () => void;
  toggle: () => void;
}

export function Header({ toggleTheme, toggle }: HeaderProps) {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderName>
        <h1>Wesley Wisch</h1>
      </HeaderName>

      <HeaderNav>
        <ul>
          <NavLink title='Home' path='/' />
          <NavLink title='Projetos' path='/projetos' />
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