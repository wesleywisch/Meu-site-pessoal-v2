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
          title="Certificado do termino de HTML | CSS | Java Script"
          description=''
          titleButton='Visualizar credencial'
          linkButton='https://programadorbr.com/certificado/DVWBWW12HT33599'
        />

        <ExperienceCard
          year={2021}
          title="Certificado do termino de Firebase | jQuery | Bootstrap"
          description=''
          titleButton='Visualizar credencial'
          linkButton='https://programadorbr.com/certificado/DVWBWW12FI33599'
        />

        <ExperienceCard
          year={2021}
          title="Certificado do termino NodeJs | MongoDB"
          description=''
          titleButton='Visualizar credencial'
          linkButton='https://programadorbr.com/certificado/DVWBWW12NO33599'
        />

        <ExperienceCard
          year={2021}
          title="Certificado do termino da Trilha ReactJs"
          description=''
          titleButton='Visualizar credencial'
          linkButton='https://app.rocketseat.com.br/api/certificates/pdf/0de8e222-e9fd-4663-ba43-7e268e7278a9'
        />
      </section>
    </ExperienceContainer>
  );
}