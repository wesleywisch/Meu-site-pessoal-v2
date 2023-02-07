import Link from "next/link";

import { NotFoundContainer } from './styles';

export function NotFound() {
  return (
    <NotFoundContainer>
      <h2>Página não encontrada</h2>

      <p>Não encontramos a página que você queria.</p>

      <button>
        <Link href='/'>Início</Link>
      </button>
    </NotFoundContainer>
  )
}