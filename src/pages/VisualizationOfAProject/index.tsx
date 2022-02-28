/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
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
  techs: [
    text: string,
  ];
  thumbnail: string;
  createdAt: string;
  updateAt: string;
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
          techs: visualizationProjectResponse.data.techs,
          thumbnail: visualizationProjectResponse.data.thumbnail.url as string,
          createdAt: visualizationProjectResponse.data.createdat as string,
          updateAt: visualizationProjectResponse.data.updateat as string,
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

  function handleOpenLink(link: string) {
    window.open(link);
  }

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
            arrowLeft={<IoMdArrowRoundBack />}
          />

          {visualizationProject.createdAt && (
            <div className="date">
              <p>
                {new Date(visualizationProject.createdAt).toLocaleDateString()}
                {visualizationProject.updateAt && ` | Atualizada em ${new Date(visualizationProject.updateAt).toLocaleDateString()}`}
              </p>
            </div>
          )}

          <section className='content'>
            <h2>Descrição:</h2>

            <p>{visualizationProject.description}</p>

            {visualizationProject.techs && (
              <section className="tech">
                <h2>Tecnologias utilizadas: </h2>

                <ul>
                  {visualizationProject.techs.map((tech, key) => {
                    type teste = {
                      text?: string;
                    }

                    const { text } = tech as teste;

                    return (
                      <li key={key}>
                        {text}
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}

            <button type='button' onClick={() => handleOpenLink(visualizationProject.link)}>
              {String(visualizationProject.link).includes('github') ? (
                <a 
                  target='_blank' 
                  rel='noreferrer' 
                  href={visualizationProject.link}
                  >
                    <AiOutlineGithub className='github' size={26} color="#AFB5BB" />Ver projeto no github
                </a>
              ) : (
                <a 
                  target='_blank' 
                  rel='noreferrer' 
                  href={visualizationProject.link}
                  >
                    Ver projeto online <BsFillArrowRightCircleFill className='sites' size={26} />
                </a>
              )}
            </button>
          </section>
        </>
      )}
    </VisualizationOfAProjectContainer>
  );
}