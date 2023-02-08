import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import Home from "./index";

describe('Experience component', () => {
  it('Checking if the homepage is rendering correctly', () => {
    render(
      <ThemeProvider theme={colors}>
        <Home />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    expect(screen.getByTestId('container')).toHaveClass('home');
  });
});