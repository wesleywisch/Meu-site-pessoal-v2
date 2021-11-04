import React from "react";

import { Header } from '../components/Header';
import { Sobre } from '../components/Sobre';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';
import { Contato } from '../components/Contato';

type Props = {
  toggleTheme: () => void;
}

export function Home({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Sobre />
      <Portfolio />
      <Skills />
      <Contato />
    </>
  );
}