import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
  toggle?: () => void;
}

export function NavLink({ title, path, toggle }: NavLinkProps) {
  const location = useLocation();

  const isActive = location.pathname === path

  return(
    <NavLinkContainer isActive={isActive} onClick={toggle}>
      <Link to={path}>{title}</Link>
    </NavLinkContainer>
  );
}