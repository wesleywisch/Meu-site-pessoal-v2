import { ExperienceCardContainer } from './styles';

type ExperienceCardProps = {
  year: number;
  title: string;
  description: string;
}

export function ExperienceCard({ year, title, description }: ExperienceCardProps) {
  return(
    <ExperienceCardContainer>
      <div>
        <h3>{year}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </ExperienceCardContainer>
  );
}