import { SectionTitleContainer } from './styles';

type SectionTitleProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;

}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <SectionTitleContainer data-aos="fade-right">
      <h2>#{title}</h2>

      {description && 
        <p>{description}</p>
      }
    </SectionTitleContainer>
  );
}