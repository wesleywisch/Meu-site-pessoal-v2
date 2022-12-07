/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as prismic from '@prismicio/client';
import { toast } from 'react-toastify';

import { client } from '../../services/prismic';

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

  // useEffect(() => {
  //   async function getProjectsApiPrismic() {
  //     try {
  //       setLoading(true);
  //       const projectResponse = await client.get({
  //         predicates: prismic.predicate.at('document.type', 'projeto'),
  //         orderings: ['document.first_publication_date desc'],
  //       })

  //       const projectFormated = projectResponse.results.map(project => ({
  //         slug: project.uid as string,
  //         title: project.data.title as string,
  //         type: project.data.type as string,
  //         thumbnail: project.data.thumbnail.url as string,
  //       }));

  //       setProjects(projectFormated);
  //       setLoading(false);
  //     }
  //     catch (err) {
  //       toast.warn('Não foi possível carregar as informações. Tente novamente');
  //     }
  //   }

  //   getProjectsApiPrismic();
  // }, []);

  return (
    <ProjetosContainer>
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