import CastLoader from 'components/CastLoader/CastLoader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReview } from 'services/movieApi';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await requestMovieReview(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error, 'There has been a mistake');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <section>
      {isLoading ? (
        <CastLoader />
      ) : (
        <>
          {reviews.map(({ id, author, content }) => {
            return (
              <div>
                <li key={id}>
                  <h3>Author: {author}</h3>
                  <p>{content}</p>
                </li>
              </div>
            );
          })}
        </>
      )}
      {!reviews.length && <p>There are no reviews for this film yet.</p>}
    </section>
  );
};

export default MovieReviews;
