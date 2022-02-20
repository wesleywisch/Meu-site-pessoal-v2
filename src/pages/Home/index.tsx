/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import { HomeHero } from '../../components/HomeHero';
import { Experience } from '../../components/Experience';
import { LatestProjects } from '../../components/LatestProjects';
import { Knowledge } from '../../components/Knowledge';
import { ContactForm } from '../../components/ContactForm';
import { Footer } from '../../components/Footer';

import { HomeContainer } from './styles';

type getLatestProjectsApiPrismicProps = {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

export function Home() {
  const [latestProjects, setLatestProjects] = useState<getLatestProjectsApiPrismicProps[]>([]);

  const prismic = getPrismicClient();

  useEffect(() => {
    async function getProjectsApiPrismic() {
      try {
        const projectResponse = await prismic.query(
          [Prismic.Predicates.at('document.type', 'projeto')],
          { orderings: '[document.first_publication_date desc]' },
        );

        const latestProjectFormated = projectResponse.results.map(project => ({
          slug: project.uid as string,
          title: project.data.title as string,
          type: project.data.type as string,
          description: project.data.description as string,
          link: project.data.link.url as string,
          thumbnail: project.data.thumbnail.url as string,
        }));

        setLatestProjects(latestProjectFormated);
      }
      catch (err) {
        console.log(err)  // por enquanto deixar console depois adicionar o toast
      }
    }

    getProjectsApiPrismic();
  }, []);

  return (
    <>
      <HomeContainer>
        <div>
          <HomeHero />
          <Experience />
          <LatestProjects latestProjects={latestProjects} />
          <Knowledge />
          <ContactForm />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}