import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { requestMoviesByName } from 'services/movieApi';
import CastLoader from 'components/CastLoader/CastLoader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const movieName = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.children.search.value;
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter the movie name..."
          autoComplete="off"
          defaultValue={movieName}
        />
        <button type="submit">Search</button>
      </form>
      <>
        {isLoading && <CastLoader />}
        <ul>
          {movies &&
            movies.map(movie => {
              return (
                <li key={movie.id}>
                  <NavLink to={`${movie.id}`} state={{ from: location }}>
                    {' '}
                    {movie.title || movie.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </>
    </div>
  );
};

export default Movies;
