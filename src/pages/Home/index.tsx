import { HomeHero } from '../../components/HomeHero';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div>
        <HomeHero />
      </div>
    </HomeContainer>
  );
}