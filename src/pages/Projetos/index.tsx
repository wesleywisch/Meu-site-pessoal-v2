/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Prismic from '@prismicio/client';
import { toast } from 'react-toastify';

import { getPrismicClient } from '../../services/prismic';

import { ProjectsCard } from '../../components/reusable/ProjectsCard';
import { LoadingScreen } from '../../components/LoadingScreen';

import { ProjetosContainer } from './styles';

type getProjectsApiPrismicProps = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

export function Projetos() {
  const [projects, setProjects] = useState<getProjectsApiPrismicProps[]>([]);
  const [loading, setLoading] = useState(false);

  const prismic = getPrismicClient();

  useEffect(() => {
    async function getProjectsApiPrismic() {
      try {
        setLoading(true);
        const projectResponse = await prismic.query(
          [Prismic.Predicates.at('document.type', 'projeto')],
          { orderings: '[document.first_publication_date desc]' },
        );

        const projectFormated = projectResponse.results.map(project => ({
          slug: project.uid as string,
          title: project.data.title as string,
          type: project.data.type as string,
          description: project.data.description as string,
          link: project.data.link.url as string,
          thumbnail: project.data.thumbnail.url as string,
        }));

        setProjects(projectFormated);
      }
      catch (err) {
        toast.error('Não foi possível carregar as informações. Tente novamente');
      }
      finally {
        setLoading(false);
      }
    }

    getProjectsApiPrismic();
  }, []);

  return (
    <ProjetosContainer>
      {loading && (
        <div className='carrying'>
          <p><LoadingScreen /> Carregando...</p>
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