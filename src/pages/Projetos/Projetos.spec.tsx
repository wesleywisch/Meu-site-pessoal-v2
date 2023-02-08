import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import Projetos from "./index.page";

describe('Experience component', () => {
  it('Checking if the projetos page is rendering correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <Projetos />
      </ThemeProvider>
    );

    expect(screen.getByTestId('container')).toHaveClass('projects')
  });
});