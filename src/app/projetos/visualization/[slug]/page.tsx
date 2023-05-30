"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import { BannerProject } from '../../../../components/reusable/BannerProject';
import { LoadingScreen } from '../../../../components/LoadingScreen';

import { VisualizationProjectType } from '../../../../types/VisualizationProjectType';

import { api } from '../../../../lib/axios';

import { VisualizationOfAProjectContainer } from './styles';

type Props = {
  params: {
    slug: string;
  }
}

export default function VisualizationOfAProject({ params }: Props) {
  const slug = params.slug

  const [loading, setLoading] = useState(true);
  const [visualizationProject, setVisualizationProject] = useState({} as VisualizationProjectType);

  function handleOpenLink(link?: string) {
    window.open(link);
  }

  async function getDataApi() {
    const response = await api.get('/getOneProject', {
      params: { slug }
    })
    console.log(response.data)
    setVisualizationProject(response.data)
    setLoading(false);
  }

  useEffect(() => {
    getDataApi()
  }, [])

  return (
    <VisualizationOfAProjectContainer>
      {loading === true ? (
        <div className='carrying'>
          <LoadingScreen /> <p>Carregando...</p>
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
            <div data-aos="fade-right" className="date">
              <p>
                {new Date(visualizationProject.createdAt).toLocaleDateString()}
                {visualizationProject.updateAt && ` | Atualizada em ${new Date(visualizationProject.updateAt).toLocaleDateString()}`}
              </p>
            </div>
          )}

          <section className='content'>
            <h2 data-aos="fade-right">Descrição:</h2>

            <p data-aos="zoom-in">{visualizationProject.description}</p>

            {visualizationProject.techs && (
              <section className="tech">
                <h2 data-aos="fade-right">Tecnologias utilizadas: </h2>

                <ul>
                  {visualizationProject.techs.map((tech, key) => {
                    type teste = {
                      text?: string;
                    }

                    const { text } = tech as teste;

                    return (
                      <li key={key} data-aos="zoom-in">
                        {text}
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}

            <div className="buttonLink">
              {visualizationProject.projetoOnline && (
                <button type='button' onClick={() => handleOpenLink(visualizationProject.projetoOnline)}>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={visualizationProject.projetoOnline}
                  >
                    Ver projeto online <BsFillArrowRightCircleFill className='sites' size={26} />
                  </a>
                </button>
              )}

              {visualizationProject.projetoGithub && (
                <button type='button' onClick={() => handleOpenLink(visualizationProject.projetoGithub)}>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={visualizationProject.projetoGithub}
                  >
                    <AiOutlineGithub className='github' size={26} color="#AFB5BB" />Ver projeto no github
                  </a>
                </button>
              )}
            </div>
          </section>
        </>
      )}
    </VisualizationOfAProjectContainer>
  );
}