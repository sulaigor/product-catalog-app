import { IProduct } from 'models/Product';
import { ReducerFunctionType } from 'types/reducer';
import { LOAD_PRODUCTS, SET_PRODUCTS } from './actionTypes';
import { IReducerState } from './types';

const productsReducer: ReducerFunctionType<IReducerState> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload?.newProducts,
      };

    case LOAD_PRODUCTS:
      return {
        ...state,
        products: [...(state.products as IProduct[]), ...payload?.newProducts],
      };

    default:
      return state;
  }
};

export default productsReducer;
