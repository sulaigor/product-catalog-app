import { IProduct } from 'models/Product';
import { IReducerAction } from 'types/reducer';
import { LOAD_PRODUCTS, SET_LOADING, SET_PRODUCTS, SET_TOTAL_COUNT, UNSET_LOADING } from './actionTypes';

export const setProductsAction = (newProducts: IProduct[]): IReducerAction => ({
  type: SET_PRODUCTS,
  payload: { newProducts },
});

export const loadProductsAction = (newProducts: IProduct[]): IReducerAction => ({
  type: LOAD_PRODUCTS,
  payload: { newProducts },
});

export const setLoadingAction = (): IReducerAction => ({
  type: SET_LOADING,
});

export const unsetLoadingAction = (): IReducerAction => ({
  type: UNSET_LOADING,
});

export const setTotalCountAction = (newTotalCount: number): IReducerAction => ({
  type: SET_TOTAL_COUNT,
  payload: { newTotalCount },
});
