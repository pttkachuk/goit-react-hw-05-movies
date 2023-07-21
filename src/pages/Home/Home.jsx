import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { requestTrandingMovies } from 'services/movieApi';

const Home = () => {
  const [trendingMovies, setTrandingmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await requestTrandingMovies();
        setTrandingmovies(trendingMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList tranding={trendingMovies} loading={isLoading} />
    </main>
  );
};

export default Home;
