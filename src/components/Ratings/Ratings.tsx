import { getCurrentRatings } from './utils';
import css from './ratings.module.scss';

interface IProps {
  ratings: number;
}

const Ratings = ({ ratings }: IProps) => {
  return <div className={css.ratings}>{getCurrentRatings(ratings)}</div>;
};

export default Ratings;
