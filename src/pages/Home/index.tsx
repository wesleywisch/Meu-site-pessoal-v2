import { HomeHero } from '../../components/HomeHero';
import { Experience } from '../../components/Experience';
import { LatestProjects } from '../../components/LatestProjects';
import { Knowledge } from '../../components/Knowledge';
import { ContactForm } from '../../components/ContactForm';

import { HomeContainer } from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <HomeHero />
          <Experience />
          <LatestProjects />
          <Knowledge />
          <ContactForm />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}