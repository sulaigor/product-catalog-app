import { IProduct } from 'models/Product';
import { IReducerAction } from 'types/reducer';
import { LOAD_PRODUCTS, SET_PRODUCTS } from './actionTypes';

export const setProductsAction = (newProducts: IProduct[]): IReducerAction => ({
  type: SET_PRODUCTS,
  payload: { newProducts },
});

export const loadProductsAction = (newProducts: IProduct[]): IReducerAction => ({
  type: LOAD_PRODUCTS,
  payload: { newProducts },
});
