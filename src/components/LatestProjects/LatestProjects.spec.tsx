import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { LatestProjects } from "./index";

describe('LatestProjects component', () => {
  it('Checking if the section title appears on screen and if the loading also appears on screen', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={colors}>
          <LatestProjects latestProjects={[]} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('#Últimos projetos')).toBeInTheDocument();
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
    expect(getByText('Carregando...')).toBeInTheDocument();
  });

  it('Checking if the button takes you to the other screen', () => {
    render(
      <MemoryRouter initialEntries={['/projetos']}>
        <ThemeProvider theme={colors}>
          <LatestProjects latestProjects={[]} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Ver todos os projetos')).toHaveAttribute('href', '/projetos');
  })
});