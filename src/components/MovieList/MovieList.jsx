import CastLoader from 'components/CastLoader/CastLoader';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  TrdListItem,
  TrendingList,
  TrendingMovieLink,
} from './MovieListStyled';

const MovieList = ({ tranding, loading }) => {
  const location = useLocation();
  return (
    <>
      {loading ? (
        <CastLoader />
      ) : (
        <TrendingList>
          {tranding.map(({ id, title, name }) => {
            return (
              <TrdListItem key={id}>
                <TrendingMovieLink
                  to={`movies/${id}`}
                  state={{ from: location }}
                >
                  {title || name}
                </TrendingMovieLink>
              </TrdListItem>
            );
          })}
        </TrendingList>
      )}
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  tranding: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};
