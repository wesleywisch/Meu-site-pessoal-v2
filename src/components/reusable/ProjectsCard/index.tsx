import { Link } from 'react-router-dom';

import { ProjectsCardContainer } from './styles';

type ProjectsCardProps = {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function ProjectsCard({ title, type, imgUrl, slug }: ProjectsCardProps) {
  return (
    <ProjectsCardContainer imgUrl={imgUrl} data-aos="zoom-in" data-testid='url'>
      <Link data-testid='linkProject' to={`/projetos/${slug}`}>
        <div className='overlay'></div>

        <section>
          <h2>{title}</h2>
          <p>{type}</p>
        </section>
      </Link>
    </ProjectsCardContainer>
  );
}