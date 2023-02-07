import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13';

import { ThemeProvider } from "styled-components";
import { colors } from "../../styles/themes/colors";

import { Sidebar } from "./index";

describe('Sidebar component', () => {
  it('Checking that route names appear on screen and lead to other screens', () => {
    render(
      <ThemeProvider theme={colors}>
        <Sidebar isOpen={false} toggle={() => false} />
      </ThemeProvider>,
      { wrapper: MemoryRouterProvider }
    );

    fireEvent.click(screen.getByText('Home'));
    expect(mockRouter.asPath).toEqual('/')

    fireEvent.click(screen.getByText('Projetos'));
    expect(mockRouter.asPath).toEqual('/projetos')
  });
});