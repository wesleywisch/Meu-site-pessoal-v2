import styled from "styled-components";

const Container = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BorderBottom = styled.div`
  height: 4px;
  margin-top: 10px;
`;

type TitleProps = {
  title: string;
  color?: string;
  fontSize: number;
  size: 'rem' | 'px' | 'em';
  BorderColor?: string;
  BorderSize?: number;
};

export function Title({ 
  title, 
  color = '#fff', 
  fontSize = 1, 
  size = 'rem', 
  BorderColor = "#000", 
  BorderSize = 10 
}: TitleProps){
  return(
    <Container style={{ color: color, fontSize: `${fontSize}${size}` }}>
      {title}

      <BorderBottom style={{ backgroundColor: BorderColor, width: `${BorderSize}%` }} />
    </Container>
  );
}