import { KnowledgeCardContainer } from './styles';

type KnowledgeCardProps = {
  title: string;
  icon: React.ReactNode;
  colorIcon: string;
}

export function KnowledgeCard({ title, icon, colorIcon }: KnowledgeCardProps) {
  return (
    <KnowledgeCardContainer colorIcon={colorIcon}>
      <p>{title}</p>
      {icon}
    </KnowledgeCardContainer>
  );
}