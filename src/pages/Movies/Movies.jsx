import { ToastContainer, toast } from 'react-toastify';
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
    const query = event.target.movie.value;
    if (!query) {
      toast('Enter please a movie name');
    }
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!movieName) {
        return;
      }
      setIsLoading(true);
      try {
        const movies = await requestMoviesByName(movieName);
        setMovies(movies.result);
      } catch (error) {
        console.log(error);
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
          name="movie"
          placeholder="Enter the movie name..."
          autoComplete="off"
          defaultValue={movieName}
        />
        <button type="submit">Search</button>
      </form>
      <ToastContainer />
      <>
        {isLoading && <CastLoader />}
        {movies && (
          <ul>
            {movies.map(({ id, title, name }) => {
              return (
                <li key={id}>
                  <NavLink to={`${id}`} state={{ from: location }}></NavLink>
                  {title || name}
                </li>
              );
            })}
          </ul>
        )}
      </>
    </div>
  );
};

export default Movies;
