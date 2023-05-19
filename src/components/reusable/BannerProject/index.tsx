import { useRouter } from 'next/navigation';
import { BannerProjectContainer } from './styles';

type BannerProjectProps = {
  title: string;
  type: string;
  imgUrl: string;
  arrowLeft?: string | React.ReactNode;
}

export function BannerProject({ title, type, imgUrl, arrowLeft }: BannerProjectProps) {
  const router = useRouter();

  function handleBack() {
    router.back()
  }

  return (
    <BannerProjectContainer imgUrl={imgUrl}>
      <div className="overlay"></div>

      {arrowLeft && (
        <button onClick={handleBack}>
          {arrowLeft}
        </button>
      )}

      <section>
        <h2 data-aos="fade-right">{title}</h2>
        <h3 data-aos="fade-right">{type}</h3>
      </section>
    </BannerProjectContainer>
  );
}