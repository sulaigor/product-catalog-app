import { MAX_RATINGS } from './const';

export const getCurrentRatings = (ratingsPercent: number): string =>
  `${Number(((ratingsPercent / 100) * MAX_RATINGS).toFixed(1))} / ${MAX_RATINGS}`;
