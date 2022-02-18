import { ProjectsCard } from '../../components/reusable/ProjectsCard';

import { ProjetosContainer } from './styles';

export function Projetos() {
  return (
    <ProjetosContainer>
      <div>
        <ProjectsCard
          title='Projeto 01'
          type='Website'
          slug='teste'
          imgUrl='https://intl-blog.imgix.net/wp-content/uploads/2019/08/gerenciador-de-projetos-gratis-BR-Capterra-Header.png?auto=format%2Cenhance'
        />

        <ProjectsCard
          title='Projeto 01'
          type='Website'
          slug='teste'
          imgUrl='https://intl-blog.imgix.net/wp-content/uploads/2019/08/gerenciador-de-projetos-gratis-BR-Capterra-Header.png?auto=format%2Cenhance'
        />

        <ProjectsCard
          title='Projeto 01'
          type='Website'
          slug='teste'
          imgUrl='https://intl-blog.imgix.net/wp-content/uploads/2019/08/gerenciador-de-projetos-gratis-BR-Capterra-Header.png?auto=format%2Cenhance'
        />

        <ProjectsCard
          title='Projeto 01'
          type='Website'
          slug='teste'
          imgUrl='https://intl-blog.imgix.net/wp-content/uploads/2019/08/gerenciador-de-projetos-gratis-BR-Capterra-Header.png?auto=format%2Cenhance'
        />
      </div>
    </ProjetosContainer>
  );
}