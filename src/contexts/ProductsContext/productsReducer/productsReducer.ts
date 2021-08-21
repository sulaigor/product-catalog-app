import { ReducerFunctionType } from 'types/reducer';
import { IReducerState } from './types';

const productsReducer: ReducerFunctionType<IReducerState> = (state, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default productsReducer;
