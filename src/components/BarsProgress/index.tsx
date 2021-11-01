import { useState, } from "react";

import { Container } from './styles';

export function BarsProgress() {
  const [width, setWidth] = useState(0);

  const maxHeight = document.body.scrollHeight - window.innerHeight;

  window.addEventListener('scroll', () => {
    const percentage = (window.scrollY / maxHeight) * 100;

    setWidth(percentage);
  });

  return(
    <Container style={{ width: `${width}%` }} />
  );
}