"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { ProjectsCard } from '../../components/reusable/ProjectsCard';
import { LoadingScreen } from '../../components/LoadingScreen';

import { ProjectType } from '../../types/ProjectType';
import { api } from '../../lib/axios';

import { ProjetosContainer } from './styles';

export default function Projetos() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  async function getDataApi() {
    const response = await api.get('/getAllProjects')
    setProjects(response.data)
    setLoading(false);
  }

  useEffect(() => {
    getDataApi()
  }, [])

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