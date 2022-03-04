import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { NotFound } from "./index";

describe('LatestProjects component', () => {
  it('Checking page not found screen', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={colors}>
          <NotFound />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(screen.getByText('Não encontramos a página que você queria.')).toBeInTheDocument();
    expect(getByText('Início')).toHaveAttribute('href', '/');
  });
});