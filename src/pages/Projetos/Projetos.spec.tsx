import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Projetos } from "./index";

describe('Experience component', () => {
  it('Checking if the projetos page is rendering correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <Projetos />
      </ThemeProvider>
    );
  });
});