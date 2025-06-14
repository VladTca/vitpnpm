import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 250px;
  height: 32px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
      z-index: -1;
      transition: ${theme.animation.transition};
    }
  }

  &::before {
    content: " ";
    display: inline-block;
    height: 10px;
    background-color: ${theme.colors.accent};
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
