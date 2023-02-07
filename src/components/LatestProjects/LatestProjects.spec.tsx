import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { LatestProjects } from "./index";

describe('LatestProjects component', () => {
  it('Checking if the section title appears on screen and if the loading also appears on screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <LatestProjects latestProjects={[]} />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    expect(screen.getByText('#Últimos projetos')).toBeInTheDocument();
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('Checking if the button takes you to the other screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <LatestProjects latestProjects={[]} />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    fireEvent.click(screen.getByText('Ver todos os projetos'));
    expect(mockRouter.asPath).toEqual('/projetos')
  })
});