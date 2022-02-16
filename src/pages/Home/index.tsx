import { HomeHero } from '../../components/HomeHero';
import { Experience } from '../../components/Experience';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeHero />
        <Experience />
      </div>
    </HomeContainer>
  );
}