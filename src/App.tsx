import { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Modal from 'react-modal';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { useTheme } from './hooks/useTheme';

import { Header } from './components/Header';

import { Home } from './pages/Home';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light);
  const [isOpen, setIsOpen] = useState(false);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} toggle={toggle} />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
};