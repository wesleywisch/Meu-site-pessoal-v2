/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

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
        setLoading(true);
        const visualizationProjectResponse = await prismic.getByUID('projeto', String(slugParams), {});

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
        toast.error('Não foi possível carregar as informações. Tente novamente');
      }
      finally {
        setLoading(false);
      }
    }

    getProjectsApiPrismic();
  }, []);

  return (
    <VisualizationOfAProjectContainer>
      {loading === true ? (
        <div className='carrying'>
          <p><LoadingScreen /> Carregando...</p>
        </div>
      ) : (
        <>
          <BannerProject
            title={visualizationProject.title}
            type={visualizationProject.type}
            imgUrl={visualizationProject.thumbnail}
          />

          <div className='content'>
            <p>{visualizationProject.description}</p>

            <button type='button'>
              {String(visualizationProject.link).includes('github') ? (
                <a href={visualizationProject.link}><AiOutlineGithub className='github' size={26} color="#AFB5BB" />Ver projeto no github</a>
              ) : (
                <a href={visualizationProject.link}>Ver projeto online <BsFillArrowRightCircleFill className='sites' size={26} /></a>
              )}
            </button>
          </div>
        </>
      )}
    </VisualizationOfAProjectContainer>
  );
}