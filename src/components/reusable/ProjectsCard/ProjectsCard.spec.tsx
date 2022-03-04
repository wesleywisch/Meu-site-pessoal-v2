import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { ProjectsCard } from "./index";

const projectsCard = {
  title: 'Games',
  slug: 'Games',
  type: 'Website',
  imgUrl: 'imagemAleatoria.png',
}

describe('ProjectsCard component', () => {
  it('Checking that the names appear on screen, and that the button takes you to the correct screen', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={colors}>
        <MemoryRouter initialEntries={['/projetos', `/${projectsCard.slug}`]}>
          <ProjectsCard
            title={projectsCard.title}
            slug={projectsCard.slug}
            type={projectsCard.type}
            imgUrl={projectsCard.imgUrl}
          />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Website')).toBeInTheDocument();
    expect(getByTestId('linkProject')).toHaveAttribute('href', `/projetos/${projectsCard.slug}`);
  });
});