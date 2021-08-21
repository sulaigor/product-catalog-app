import { IProduct } from 'models/Product';
import { ReducerFunctionType } from 'types/reducer';
import { LOAD_PRODUCTS, SET_LOADING, SET_PRODUCTS, SET_TOTAL_COUNT, UNSET_LOADING } from './actionTypes';
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

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: payload?.newTotalCount,
      };

    default:
      return state;
  }
};

export default productsReducer;
