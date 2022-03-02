import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { colors } from '../../styles/themes/colors';
import { Footer } from './index';

describe('Footer component', () => {
  it('Returning to the top is it rendering to the screen?', () => {
    const { getByText } = render(<ThemeProvider theme={colors}><Footer /></ThemeProvider>);

    const footerBackTop = screen.getByText('Voltar ao topo');

    expect(footerBackTop).toBeInTheDocument();
    expect(getByText('Voltar ao topo')).toBeInTheDocument();
  });

  it('Checking if the links have their respective attributes', () => {
    const { getByTestId } = render(<ThemeProvider theme={colors}><Footer /></ThemeProvider>);

    expect(getByTestId('email')).toHaveAttribute('href','mailto:wesley_wisch@hotmail.com');
    expect(getByTestId('github')).toHaveAttribute('href','https://github.com/wesleywisch');
    expect(getByTestId('linkedim')).toHaveAttribute('href','https://www.linkedin.com/in/wesley-wisch/');
  });
});