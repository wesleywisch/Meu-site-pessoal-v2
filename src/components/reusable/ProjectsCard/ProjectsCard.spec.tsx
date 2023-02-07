import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes/next-13";

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { ProjectsCard } from "./index";

const projectsCard = {
  title: 'Games',
  slug: 'Games',
  type: 'Website',
  imgUrl: 'imagemAleatoria.png',
}

mockRouter.useParser(createDynamicRouteParser([
  "/projetos/[slug]",
]));

describe('ProjectsCard component', () => {
  it('Checking that the names appear on screen, and that the button takes you to the correct screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <ProjectsCard
          title={projectsCard.title}
          slug={projectsCard.slug}
          type={projectsCard.type}
          imgUrl={projectsCard.imgUrl}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Website')).toBeInTheDocument();

    mockRouter.push('/projetos/Games');
    expect(mockRouter).toMatchObject({
      pathname: '/projetos/[slug]',
      query: { slug: 'Games' }
    });
  });
});