import "@testing-library/jest-dom";
import { render } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { LoadingScreen } from "./index";

describe('LoadingScreen component', () => {
  it('Checking if it displays on screen correctly', () => {
    render(
        <ThemeProvider theme={colors}>
          <LoadingScreen />
        </ThemeProvider>
    );
  });
});