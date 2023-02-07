import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes/next-13";

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { LatestProjectsCard } from "./index";

const latestProjects = {
  title: 'Games',
  slug: 'Games',
  type: 'Website',
  img: 'teste.png',
}

mockRouter.useParser(createDynamicRouteParser([
  "/projetos/[slug]",
]));

describe('LatestProjectsCard component', () => {
  it('Checking that the names appear on screen, and that the button takes you to the correct screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <LatestProjectsCard
          title={latestProjects.title}
          slug={latestProjects.slug}
          type={latestProjects.type}
          img={latestProjects.img}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('# Games')).toBeInTheDocument();
    expect(screen.getByText('- Website')).toBeInTheDocument();

    mockRouter.push('/projetos/Games');
    expect(mockRouter).toMatchObject({
      pathname: '/projetos/[slug]',
      query: { slug: 'Games' }
    });
  });
});