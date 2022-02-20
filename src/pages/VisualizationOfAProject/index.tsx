import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPrismicClient } from '../../services/prismic';

import { BannerProject } from '../../components/reusable/BannerProject';
import { LoadingScreen } from '../../components/LoadingScreen';

import { VisualizationOfAProjectContainer } from './styles';

type getVisualizationProjectProps = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

export function VisualizationOfAProject() {
  const [loading, setLoading] = useState(false);
  const [visualizationProject, setVisualizationProject] = useState({} as getVisualizationProjectProps);

  const { slugParams } = useParams();

  const prismic = getPrismicClient();

  useEffect(() => {
    async function getProjectsApiPrismic() {
      try {
        const visualizationProjectResponse = await prismic.getByUID('projetos', String(slugParams), {});

        const VisualizationProject = {
          slug: visualizationProjectResponse.uid as string,
          title: visualizationProjectResponse.data.title as string,
          type: visualizationProjectResponse.data.type as string,
          description: visualizationProjectResponse.data.description as string,
          link: visualizationProjectResponse.data.link.url as string,
          thumbnail: visualizationProjectResponse.data.thumbnail.url as string,
        }

        setVisualizationProject(VisualizationProject);
      }
      catch (err) {
        console.log(err); // por enquanto deixar console depois adicionar o toast
      }
      finally {
        setLoading(false);
      }
    }

    getProjectsApiPrismic();
  }, []);

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <VisualizationOfAProjectContainer>
      <BannerProject
        title={visualizationProject.title}
        type={visualizationProject.type}
        imgUrl={visualizationProject.thumbnail}
      />

      <div className='content'>
        <p>{visualizationProject.description}</p>

        <button type='button'>
          <a href={visualizationProject.link}>Ver projeto online</a>
        </button>
      </div>
    </VisualizationOfAProjectContainer>
  );
}