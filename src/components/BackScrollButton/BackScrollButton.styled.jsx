import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;

  z-index: 100;

  opacity: 0.6;
  color: #fc1503;
  background-color: transparent;
  cursor: pointer;

  transition: opacity 0.3s ease;

  @media screen and (min-width: 1200px) {
    bottom: 50px;
    right: 50px;
  }

  &:hover,
  &:focus {
    opacity: 1;
    box-shadow: 0 0 10px #fc140334;
  }

  &.hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;
  fill: currentColor;
`;
