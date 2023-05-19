"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';

import { ProjectsCard } from '../../components/reusable/ProjectsCard';
import { LoadingScreen } from '../../components/LoadingScreen';

import { ProjetosContainer } from './styles';

type getProjectsApiPrismicProps = {
  slug: string;
  title: string;
  type: string;
  thumbnail: string;
}

export default function Projetos() {
  const [projects, setProjects] = useState<getProjectsApiPrismicProps[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <ProjetosContainer data-testid="container" className='projects'>
      {loading && (
        <div className='carrying'>
          <LoadingScreen /> <p>Carregando...</p>
        </div>
      )}

      <div>
        {projects.map((project, key) => (
          <ProjectsCard
            key={key}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </div>
    </ProjetosContainer>
  );
}