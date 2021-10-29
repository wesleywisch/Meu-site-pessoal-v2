import { GlobalStyle } from './styles/global';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { Header } from './components/Header'

import { useTheme } from './hooks/useTheme';

export function App() {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};