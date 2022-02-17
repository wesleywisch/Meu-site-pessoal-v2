import { HomeHero } from '../../components/HomeHero';
import { Experience } from '../../components/Experience';
import { LatestProjects } from '../../components/LatestProjects';
import { Knowledge } from '../../components/Knowledge';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeHero />
        <Experience />
        <LatestProjects />
        <Knowledge />
      </div>
    </HomeContainer>
  );
}