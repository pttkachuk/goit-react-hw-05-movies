import CastLoader from 'components/CastLoader/CastLoader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReview } from 'services/movieApi';
import { Item, Section, WrapperList } from './MovieReviewsStyled';

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
    <Section>
      {isLoading ? (
        <CastLoader />
      ) : (
        <>
          <WrapperList>
            {reviews.map(review => {
              return (
                <Item key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </Item>
              );
            })}
          </WrapperList>
        </>
      )}
      {!reviews.length && <p>There are no reviews for this film yet.</p>}
    </Section>
  );
};

export default MovieReviews;
