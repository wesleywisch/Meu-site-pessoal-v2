import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { NotFound } from "./index";

describe('LatestProjects component', () => {
  it('Checking page not found screen', () => {
    render(
      <ThemeProvider theme={colors}>
        <NotFound />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(screen.getByText('Não encontramos a página que você queria.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Início'));
    expect(mockRouter.asPath).toEqual('/')
  });
});