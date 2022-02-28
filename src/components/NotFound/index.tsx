import { Link } from "react-router-dom";

import { NotFoundContainer } from './styles';

export function NotFound() {
  return (
    <NotFoundContainer>
      <h2>Página não encontrada</h2>

      <p>Não encontramos a página que você queria.</p>

      <button>
        <Link to='/'>Início</Link>
      </button>
    </NotFoundContainer>
  )
}