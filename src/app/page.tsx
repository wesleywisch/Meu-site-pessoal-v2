"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { HomeHero } from '../components/HomeHero';
import { Knowledge } from '../components/Knowledge';

import { HomeContainer } from './styles';

// type getLatestProjectsApiPrismicProps = {
//   slug: string;
//   title: string;
//   type: string;
//   thumbnail: string;
// }

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <>
      <HomeContainer data-testid='container' className='home'>
        <div>
          <HomeHero />
          <Experience />
          {/* <LatestProjects latestProjects={latestProjects} /> */}
          <Knowledge />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}