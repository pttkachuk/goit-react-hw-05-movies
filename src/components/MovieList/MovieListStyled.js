import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingList = styled.ul`
list-style: none;
margin: 15px 0;
padding: 0;
`;

export const TrdListItem = styled.li`
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

export const TrendingMovieLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: #ab47bc;
  }
`;