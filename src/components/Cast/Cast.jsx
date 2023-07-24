import CastLoader from 'components/CastLoader/CastLoader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCredits } from 'services/movieApi';
import blank_profile from './blank_profile.jpg';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const castData = await requestMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <section>
      {isLoading || !cast ? (
        <CastLoader />
      ) : (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => {
            const imgSRC = profile_path
              ? IMAGEURL + profile_path
              : blank_profile;
            return (
              <li key={id}>
                <img src={imgSRC} alt={name} width={200} height={300} />
                <div>
                  <p>
                    <span>{name}</span>
                  </p>
                  <p>
                    <b>Character:</b>
                    <span> {character ? character : 'Unknown'}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {!cast.length && (
        <p>There is no information about the cast of this film yet. Sorry...</p>
      )}
    </section>
  );
};

export default Cast;
