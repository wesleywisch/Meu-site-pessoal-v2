import { ExperienceCardContainer } from './styles';

type ExperienceCardProps = {
  year: number;
  title: string;
  description: string;
  titleButton?: string;
  linkButton?: string;
}

export function ExperienceCard({ year, title, description, titleButton, linkButton }: ExperienceCardProps) {
  function handleOpenView(link: string | undefined) {
    window.open(link);
  }

  return (
    <ExperienceCardContainer data-aos="fade-up">
      <div>
        <h3>{year}</h3>
        <h4>{title}</h4>
        <p>{description}</p>

        {titleButton && (
          <button onClick={() => handleOpenView(linkButton)}>
            <a target="_blank" rel="noreferrer" href={linkButton}>{titleButton}</a>
          </button>
        )}
      </div>
    </ExperienceCardContainer>
  );
}