import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesSearchList = styled.ul`
list-style: none;
margin: 15px 0;
padding: 0;
`;

export const MoviesSearchItem = styled.li`
padding: 5px 10px;
max-width: 380px;
transition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);
&:hover{
    transform: scale(1.1);
}
 &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MoviesSearchLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: #ab47bc;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
max-width: 100%;
width: 150px;
padding: 5px;
border-radius: 7px;
border: 1px solid #1F305E;
`

export const SearchBtn = styled.button`
padding: 5px;
border: none;
border-radius: 7px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
cursor: pointer;
transition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);
&:hover{
    transform: scale(1.1);
}
`