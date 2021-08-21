import { IProduct } from 'models/Product';

export interface IReducerState {
  products: IProduct[] | null;
  totalCount: number;
  loading: boolean;
}
