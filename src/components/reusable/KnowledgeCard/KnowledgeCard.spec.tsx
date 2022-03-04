import "@testing-library/jest-dom";
import { FaReact } from 'react-icons/fa';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from "styled-components";
import { colors } from "../../../styles/themes/colors";

import { KnowledgeCard } from "./index";

const knowledge = {
  title: 'React',
  icon: <FaReact />,
  colorIcon: '#61DAFB',
}

describe('KnowledgeCard component', () => {
  it('Checking if the technology name appears on screen and if its color also appears', () => {
    render(
      <ThemeProvider theme={colors}>
        <KnowledgeCard
          title={knowledge.title}
          icon={knowledge.icon}
          colorIcon={knowledge.colorIcon}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('React')).toHaveStyle('color: #61DAFB');
  });
});