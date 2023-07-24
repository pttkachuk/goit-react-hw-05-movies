import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 15px;
 box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 10px 0 10px 10px;
`;

export const Image = styled.img`
display: block;
  width: 270px;
`;

export const MovieInfo = styled.div`
  width: 500px;
  text-align: justify;
`;

export const ExtraInfoSection = styled.div`
text-align: center;
margin-left: auto;
margin-right:auto;
`;

export const InfoTitle = styled.h2`
margin: 0;
padding: 0;
`;

export const InfoSectionList = styled.ul`
list-style: none;
padding: 0;
`;

export const InfoLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: #ab47bc;
  }
`;

export const InfoListItem = styled.li`
padding: 5px 10px;
transition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);
&:hover{
    transform: scale(1.1);
}
 &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MovieDesc = styled.ul`
list-style: none;
padding: 0;
`;

export const MovieDescItem = styled.li`
padding-top:5px;
`;

export const Score = styled.p`
font-weight: 500;
margin: 0;
padding: 0;
`;

export const Owerview = styled.p`
margin: 0;
padding-top: 10px;
`;

export const Genres = styled.p`
font-style: italic;
margin: 0;
padding-top: 10px;
`;

export const BackButton = styled.button`
  border-radius: 6px;
  padding: 7px 10px;
  border: transparent;
  outline: none;
  margin-left: 10px;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);
  background-color: #6CB4EE;
  color: white;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    background-color: #5072A7;
  }
`;