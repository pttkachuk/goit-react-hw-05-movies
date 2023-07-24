import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { requestMoviesByName } from 'services/movieApi';
import CastLoader from 'components/CastLoader/CastLoader';
import {
  MoviesSearchItem,
  MoviesSearchList,
  MoviesSearchLink,
  Form,
  Input,
  SearchBtn,
} from './MoviesStyled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const movieName = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.children.search.value;
    if (!searchQuery) {
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!movieName) {
        return;
      }
      setIsLoading(true);
      try {
        const moviesData = await requestMoviesByName(movieName);
        setMovies(moviesData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieName]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Enter the movie name..."
          autoComplete="off"
          autoFocus
          defaultValue={movieName}
          required
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
      <>
        {isLoading && <CastLoader />}
        <MoviesSearchList>
          {movies &&
            movies.map(movie => {
              return (
                <MoviesSearchItem key={movie.id}>
                  <MoviesSearchLink
                    to={`${movie.id}`}
                    state={{ from: location }}
                  >
                    {' '}
                    {movie.title || movie.name}
                  </MoviesSearchLink>
                </MoviesSearchItem>
              );
            })}
        </MoviesSearchList>
      </>
    </div>
  );
};

export default Movies;
