import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Home } from "./index";

describe('Experience component', () => {
  it('Checking if the homepage is rendering correctly', () => {
    render(
      <MemoryRouter initialEntries={['/', '/projetos']}>
        <ThemeProvider theme={colors}>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
  });
});