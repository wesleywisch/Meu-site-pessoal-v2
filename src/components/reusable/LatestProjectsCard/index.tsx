import Link from 'next/link';

import { AiOutlineRightCircle } from 'react-icons/ai';

import { LatestProjectsCardContainer } from './styles';

type LatestProjectsCardProps = {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function LatestProjectsCard({ title, type, slug, img }: LatestProjectsCardProps) {
  return (
    <LatestProjectsCardContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay"></div>

        <div className="text">
          <h3># {title}</h3>
          <p>- {type}</p>
        </div>
      </section>

      <button type='button'>
        <Link href={`/projetos/${slug}`}>
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </LatestProjectsCardContainer>
  );
}