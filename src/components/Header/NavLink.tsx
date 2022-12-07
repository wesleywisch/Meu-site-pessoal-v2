import { useRouter } from 'next/router';
import Link from 'next/link';

import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
  toggle?: () => void;
  includes?: boolean;
}

export function NavLink({ title, path, toggle, includes = false }: NavLinkProps) {
  const location = useRouter();

  function verifyIfActive() {
    if (includes) {
      return location.pathname.includes(path);
    }

    return path === location.pathname;
  }

  const isActive = verifyIfActive();

  return (
    <NavLinkContainer isActive={isActive} onClick={toggle}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  );
}