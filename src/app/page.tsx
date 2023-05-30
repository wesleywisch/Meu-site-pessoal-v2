"use client"
// /* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { HomeHero } from '../components/HomeHero';
import { Knowledge } from '../components/Knowledge';
import { LatestProjects } from '../components/LatestProjects';

import { api } from '../lib/axios';

import { ProjectType } from '../types/ProjectType';

import { HomeContainer } from './styles';

export default function Home() {
  const [latestProjects, setLatestProjects] = useState<ProjectType[]>([])

  async function getDataApi() {
    const response = await api.get('/getLatestProjects')
    setLatestProjects(response.data)
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
    getDataApi()
  }, [])

  return (
    <>
      <HomeContainer data-testid='container' className='home'>
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