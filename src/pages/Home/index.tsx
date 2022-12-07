/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import * as prismic from '@prismicio/client';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { client } from '../../services/prismic';

import { HomeHero } from '../../components/HomeHero';
import { Experience } from '../../components/Experience';
import { LatestProjects } from '../../components/LatestProjects';
import { Knowledge } from '../../components/Knowledge';
import { Footer } from '../../components/Footer';

import { HomeContainer } from './styles';
import { toast } from 'react-toastify';

type getLatestProjectsApiPrismicProps = {
  slug: string;
  title: string;
  type: string;
  thumbnail: string;
}

export function Home() {
  const [latestProjects, setLatestProjects] = useState<getLatestProjectsApiPrismicProps[]>([]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  // useEffect(() => {
  //   async function getProjectsApiPrismic() {
  //     try {
  //       const projectResponse = await client.get({
  //         predicates: prismic.predicate.at('document.type', 'projeto')
  //       });

  //       const latestProjectFormated = projectResponse.results.map(project => ({
  //         slug: project.uid as string,
  //         title: project.data.title as string,
  //         type: project.data.type as string,
  //         thumbnail: project.data.thumbnail.url as string,
  //       }));

  //       setLatestProjects(latestProjectFormated);
  //     }
  //     catch (err) {
  //       toast.warn('Não foi possível carregar as informações do últimos projetos. Tente novamente');
  //     }
  //   }

  //   getProjectsApiPrismic();
  // }, []);

  return (
    <>
      <HomeContainer>
        <div>
          <HomeHero />
          <Experience />
          <LatestProjects latestProjects={latestProjects} />
          <Knowledge />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}