import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import CastLoader from 'components/CastLoader/CastLoader';
import { requestMovieById } from 'services/movieApi';
import blank_profile from '../../components/Cast/blank_profile.jpg';
import {
  MovieCard,
  Wrapper,
  Image,
  MovieInfo,
  ExtraInfoSection,
  InfoSectionList,
  InfoLink,
  InfoListItem,
  MovieDesc,
  MovieDescItem,
  Score,
  Owerview,
  Genres,
  BackButton,
} from './MovieDetailStyled';

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
        console.log(error.message);
      } finally {
        seIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const handleBackBtn = () => {
    navigate(location.state.from);
  };

  const imgSRC = movie?.poster_path
    ? IMAGEURL + movie?.poster_path
    : blank_profile;
  const userScore = Math.round(Number(movie?.vote_average) * 10);
  const movieGenres = movie?.genres.map(genre => genre.name).join(' ');
  const releaseDate = movie?.release_date.slice(0, 4);

  return (
    <>
      <Wrapper>
        {location.state?.from && (
          <BackButton onClick={handleBackBtn}>Go Back</BackButton>
        )}
        {isLoading || !movie ? (
          <CastLoader />
        ) : (
          <MovieCard>
            <Image src={`${imgSRC}`} alt={movie?.title} />
            <MovieInfo>
              <h2>
                {movie?.title} {releaseDate && `(${releaseDate})`}
              </h2>
              <MovieDesc>
                <MovieDescItem>
                  {' '}
                  {userScore > 0 && <Score>User Score: {userScore}%</Score>}
                </MovieDescItem>
                <MovieDescItem>
                  <Owerview>{movie?.overview}</Owerview>
                </MovieDescItem>
                <MovieDescItem>
                  <Genres>Genres: {movieGenres || ' - '}</Genres>
                </MovieDescItem>
              </MovieDesc>
            </MovieInfo>
            <ExtraInfoSection>
              <h2>Additional information</h2>
              <div>
                <InfoSectionList>
                  <InfoListItem>
                    <InfoLink to="cast" state={{ from: location.state?.from }}>
                      {' '}
                      Cast
                    </InfoLink>
                  </InfoListItem>
                  <li>
                    <InfoLink
                      to="reviews"
                      state={{ from: location.state?.from }}
                    >
                      Reviews
                    </InfoLink>
                  </li>
                </InfoSectionList>
              </div>
            </ExtraInfoSection>
          </MovieCard>
        )}
      </Wrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
