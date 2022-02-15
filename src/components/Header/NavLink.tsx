import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
}

export function NavLink({ title, path }: NavLinkProps) {
  const location = useLocation();

  const isActive = location.pathname === path

  return(
    <NavLinkContainer isActive={isActive}>
      <Link to={path}>{title}</Link>
    </NavLinkContainer>
  );
}