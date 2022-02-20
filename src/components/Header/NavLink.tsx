import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
  toggle?: () => void;
  includes?: boolean;
}

export function NavLink({ title, path, toggle, includes = false }: NavLinkProps) {
  const location = useLocation();

  function verifyIfActive() {
    if (includes) {
      return location.pathname.includes(path);
    }

    return path === location.pathname;
  }

  const isActive = verifyIfActive();

  return (
    <NavLinkContainer isActive={isActive} onClick={toggle}>
      <Link to={path}>{title}</Link>
    </NavLinkContainer>
  );
}