import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Header } from "./index";

describe('Component header', () => {
  it('Check if the names are in the html and are displayed on screen', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={colors}>
          <Header toggle={() => false} />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(getByText('Wesley Wisch').closest('a')).toHaveAttribute('href', '/');
    expect(getByText('Wesley Wisch')).toBeInTheDocument();
    expect(screen.getByText('Wesley Wisch')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
  });
});