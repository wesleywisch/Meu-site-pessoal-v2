import { BannerProjectContainer } from './styles';

type BannerProjectProps = {
  title: string;
  type: string;
  imgUrl: string;
}

export function BannerProject({ title, type, imgUrl }: BannerProjectProps) {
  return(
    <BannerProjectContainer imgUrl={imgUrl}>
      <div className="overlay"></div>

      <section>
        <h2>{title}</h2>
        <h3>{type}</h3>
      </section>
    </BannerProjectContainer>
  );
}