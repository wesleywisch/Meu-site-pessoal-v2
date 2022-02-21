import { KnowledgeCardContainer } from './styles';

type KnowledgeCardProps = {
  title: string;
  icon: React.ReactNode;
  colorIcon: string;
}

export function KnowledgeCard({ title, icon, colorIcon }: KnowledgeCardProps) {
  return (
    <KnowledgeCardContainer colorIcon={colorIcon} data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </KnowledgeCardContainer>
  );
}