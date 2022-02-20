import { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { useTheme } from './hooks/useTheme';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import { Home } from './pages/Home';
import { Projetos } from './pages/Projetos';
import { VisualizationOfAProject } from './pages/VisualizationOfAProject';

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
      <Sidebar toggleTheme={toggleTheme} isOpen={isOpen} toggle={toggle} />
      <Header toggleTheme={toggleTheme} toggle={toggle} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/projetos/:slugParams' element={<VisualizationOfAProject />} />
      </Routes>
    </ThemeProvider>
  );
};