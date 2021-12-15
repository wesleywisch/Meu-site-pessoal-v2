import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useTheme } from './hooks/useTheme';

import { Github } from './components/Github';

import { Home } from './pages/Home';
import { Header } from './components/Header';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home toggleTheme={toggleTheme} />
          </Route>

          <Route exact path="/github">
            <Header github={true} toggleTheme={toggleTheme} />
            <Github />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};