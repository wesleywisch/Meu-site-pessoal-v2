export type VisualizationProjectType = {
  slug: string;
  title: string;
  type: string;
  description: string;
  projetoGithub?: string;
  projetoOnline?: string;
  techs: [
    text: string,
  ];
  thumbnail: string;
  createdAt: string;
  updateAt: string;
}