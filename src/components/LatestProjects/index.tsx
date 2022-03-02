import { Link } from 'react-router-dom';

import { LoadingScreen } from '../LoadingScreen';
import { LatestProjectsCard } from '../reusable/LatestProjectsCard';
import { SectionTitle } from '../reusable/SectionTitle';

import { LatestProjectsContainer } from './styles';

type getLatestProjectsApiPrismicProps = {
  slug: string;
  title: string;
  type: string;
  thumbnail: string;
}

type LatestProjectsProps = {
  latestProjects: getLatestProjectsApiPrismicProps[];
}

export function LatestProjects({ latestProjects }: LatestProjectsProps) {
  return (
    <LatestProjectsContainer>
      <SectionTitle
        title='Últimos projetos'
      />

      <section>
        {latestProjects.length === 0 && (
          <div className='carrying'>
            <p><LoadingScreen /> Carregando...</p>
          </div>
        )}

        {latestProjects.slice(0, 3).map((project, key) => (
          <LatestProjectsCard
            key={key}
            title={project.title}
            type={project.type}
            slug={project.slug}
            img={project.thumbnail}
          />
        ))}
      </section>

      <button type='button'>
        <Link to='/projetos'>
          Ver todos os projetos
        </Link>
      </button>
    </LatestProjectsContainer>
  );
}