import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';

type PropsStyles = {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .5s ease-in-out;
  opacity: ${({ isOpen }: PropsStyles) => isOpen ? '1' : '0'};
  top: ${({ isOpen }) => isOpen ? '0' : '-100%'};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${props => props.theme.colors.white};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${props => props.theme.colors.white};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;