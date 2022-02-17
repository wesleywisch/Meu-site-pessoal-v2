import { HomeHero } from '../../components/HomeHero';
import { Experience } from '../../components/Experience';
import { LatestProjects } from '../../components/LatestProjects';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeHero />
        <Experience />
        <LatestProjects />
      </div>
    </HomeContainer>
  );
}