import CastLoader from 'components/CastLoader/CastLoader';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const MovieList = ({ tranding, loading }) => {
    const location = useLocation();
    return (
        <>
            {loading ? (<CastLoader />) : (<ul>
                {tranding.map(({ id, title, name }) => {
                    <li key={id}>
                        <NavLink to={`movies/${id}`} state={{ from: location }} >
                            {title || name}
                        </NavLink>
                    </li>
                })}
            </ul>
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