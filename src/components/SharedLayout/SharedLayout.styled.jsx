import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = styled(AppBar)`
  position: sticky;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  background-color: #000;
`;

export const Link = styled(NavLink)`
  &:active {
    color: orange;
  }
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;
