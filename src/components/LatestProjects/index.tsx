import { Link } from 'react-router-dom';

import { LatestProjectsCard } from '../reusable/LatestProjectsCard';
import { SectionTitle } from '../reusable/SectionTitle';

import { LatestProjectsContainer } from './styles';

export function LatestProjects() {
  return (
    <LatestProjectsContainer>
      <SectionTitle
        title='Últimos projetos'
      />

      <section>
        <LatestProjectsCard
          title='Projeto 1'
          type='Website'
          slug='teste'
          img='https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital.png'
        />

        <LatestProjectsCard
          title='Projeto 1'
          type='Website'
          slug='teste'
          img='https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital.png'
        />

        <LatestProjectsCard
          title='Projeto 1'
          type='Website'
          slug='teste'
          img='https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital.png'
        />
      </section>

      <button type='button'>
        <Link to='/projetos'>
          Ver todos os projetos
        </Link>
      </button>
    </LatestProjectsContainer>
  );
}