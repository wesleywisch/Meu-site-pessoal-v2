import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Sidebar } from "./index";

describe('Sidebar component', () => {
  it('Checking that route names appear on screen and lead to other screens', () => {
    render(
      <MemoryRouter initialEntries={['/', '/projetos']}>
        <ThemeProvider theme={colors}>
          <Sidebar isOpen={false} toggle={() => false} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Projetos')).toHaveAttribute('href', '/projetos');
  });
});