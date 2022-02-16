import { ExperienceCard } from '../reusable/ExperienceCard';
import { SectionTitle } from '../reusable/SectionTitle';

import { ExperienceContainer } from './styles';

export function Experience() {
  return (
    <ExperienceContainer>
      <SectionTitle
        title='1 ano'
        description='de cursos extracurriculares'
      />

      <section>
        <ExperienceCard
          year={2021}
          title="Curso 1"
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam neque asperiores maiores vitae aut eaque?'
        />

        <ExperienceCard
          year={2021}
          title="Curso 2"
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam neque asperiores maiores vitae aut eaque?'
        />

        <ExperienceCard
          year={2021}
          title="Curso 3"
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam neque asperiores maiores vitae aut eaque?'
        />

        <ExperienceCard
          year={2021}
          title="Curso 4"
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam neque asperiores maiores vitae aut eaque?'
        />
      </section>
    </ExperienceContainer>
  );
}