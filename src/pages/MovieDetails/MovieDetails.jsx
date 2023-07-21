import { useEffect, useState, Suspense } from 'react';
import {
  Outlet,
  useParams,
  useLocation,
  useNavigate,
  NavLink,
} from 'react-router-dom';
import CastLoader from 'components/CastLoader/CastLoader';
import { requestMovieById } from 'services/movieApi';
import blank_profile from '../../components/Cast/blank_profile.jpg';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, seIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      seIsLoading(true);
      try {
        const movieData = await requestMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log(error);
      } finally {
        seIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const handleBackBtn = () => {
    navigate(location.state.from);
  };

  //const { genres, title, release_date, overview, vote_average, poster_path } =
  // movie;

  const imgSRC = movie?.poster_path
    ? IMAGEURL + movie?.poster_path
    : blank_profile;
  const userScore = Math.round(Number(movie?.vote_average) * 10);
  const movieGenres = movie?.genres.map(genre => genre.name).join(' ');
  const releaseDate = movie?.release_date.slice(0, 4);

  return (
    <>
      <section>
        {location.state?.from && (
          <button onClick={handleBackBtn}>Go Back</button>
        )}
        {isLoading || !movie ? (
          <CastLoader />
        ) : (
          <div>
            <img src={`${imgSRC}`} alt={movie?.title} />
            <div>
              <h2>
                {movie?.title} {releaseDate && `(${releaseDate})`}
              </h2>
              <ul>
                <li> {userScore > 0 && <p>User Score: {userScore}%</p>}</li>
                <li>
                  <p>{movie?.overview}</p>
                </li>
                <li>
                  <p>{movieGenres || ' - '}</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
      <div>
        <h2>Additional information</h2>
        <div>
          <ul>
            <li>
              <NavLink
                to="cast"
                state={{ from: location.state?.from }}
              ></NavLink>
              Cast
            </li>
            <li>
              <NavLink to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
