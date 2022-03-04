import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { LatestProjectsCard } from "./index";

const latestProjects = {
  title: 'Games',
  slug: 'Games',
  type: 'Website',
  img: 'teste.png',
}

describe('LatestProjectsCard component', () => {
  it('Checking that the names appear on screen, and that the button takes you to the correct screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <MemoryRouter initialEntries={['/projetos', `/${latestProjects.slug}`]}>
          <LatestProjectsCard
            title={latestProjects.title}
            slug={latestProjects.slug}
            type={latestProjects.type}
            img={latestProjects.img}
          />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('# Games')).toBeInTheDocument();
    expect(screen.getByText('- Website')).toBeInTheDocument();
    expect(screen.getByText('Ver mais')).toHaveAttribute('href', `/projetos/${latestProjects.slug}`);
  });
});