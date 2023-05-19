import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { NavLinkContainer } from './styles';

type NavLinkProps = {
  title: string;
  path: string;
  toggle?: () => void;
  includes?: boolean;
}

export function NavLink({ title, path, toggle, includes = false }: NavLinkProps) {
  const location = usePathname();

  function verifyIfActive() {
    if (includes) {
      return location.includes(path);
    }

    return path === location;
  }

  const isActive = verifyIfActive();

  return (
    <NavLinkContainer
      data-testid={`${title === 'Home' ? 'linkHome' : 'linkProject'}`}
      isActive={isActive}
      onClick={toggle}
    >
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  );
}