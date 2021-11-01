import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { useTheme } from './hooks/useTheme';

import { Header } from './components/Header'
import { Sobre } from './components/Sobre';
import { Portfolio } from './components/Portfolio';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Sobre />
      <Portfolio />
    </ThemeProvider>
  );
};