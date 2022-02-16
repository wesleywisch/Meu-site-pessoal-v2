import { SectionTitleContainer } from './styles';

type SectionTitleProps = {
  title: string;
  description?: string | React.ReactNode;

}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      <h2>#{title}</h2>

      {description && 
        <p>{description}</p>
      }
    </SectionTitleContainer>
  );
}