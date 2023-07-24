import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 8px 10px;
`;

export const Link = styled(NavLink)`
 padding: 10px 15px;
  border-radius: 7px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #6CB4EE;
    :hover {
      background-color: #5072A7;
    }
  }
  :hover:not(.active) {
    color: #5072A7;
  }
`;