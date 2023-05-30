import Link from 'next/link';

import { LoadingScreen } from '../LoadingScreen';
import { LatestProjectsCard } from '../reusable/LatestProjectsCard';
import { SectionTitle } from '../reusable/SectionTitle';

import { ProjectType } from '../../types/ProjectType';

import { LatestProjectsContainer } from './styles';

type LatestProjectsProps = {
  latestProjects: ProjectType[];
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
            <LoadingScreen /> <p>Carregando...</p>
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
        <Link href='/projetos'>
          Ver todos os projetos
        </Link>
      </button>
    </LatestProjectsContainer>
  );
}