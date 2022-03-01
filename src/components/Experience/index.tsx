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
          title="Certificado do curso de HTML | CSS | Java Script"
          description='
            Essa foi a minha primeira jornada em um curso aonde eu aprendi com o professor Igor, HTML, CSS e Javascript.
          '
          titleButton='Visualizar credencial'
          linkButton='https://programadorbr.com/certificado/DVWBWW12HT33599'
        />

        <ExperienceCard
          year={2021}
          title="Certificado do curso de Firebase | jQuery | Bootstrap"
          description='
            Indo mais afundo aprendi um dos banco de dados noSql(firebase), um framework CSS(Bootstrap).
          '
          titleButton='Visualizar credencial'
          linkButton='https://programadorbr.com/certificado/DVWBWW12FI33599'
        />

        <ExperienceCard
          year={2021}
          title="Certificado do curso de NodeJs | MongoDB"
          description='
            Indo rumo ao Back-end aprendi NodeJs com o padrão MVC com ejs. e também construindo uma api com NodeJs e como banco de dados o MongoDB.
          '
          titleButton='Visualizar credencial'
          linkButton='https://programadorbr.com/certificado/DVWBWW12NO33599'
        />

        <ExperienceCard
          year={2021}
          title="Certificado do curso da Trilha ReactJs"
          description='
            Voltando ao Front-end, aprendo mais e mais sobre esse mundo com o React, onde tivemos teste unitários, integração com api de pagamento e muito mais.
          '
          titleButton='Visualizar credencial'
          linkButton='https://app.rocketseat.com.br/api/certificates/pdf/0de8e222-e9fd-4663-ba43-7e268e7278a9'
        />
      </section>
    </ExperienceContainer>
  );
}