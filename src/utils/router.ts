import { PRODUCT_DETAIL_PARAMS, PRODUCT_DETAIL_PATH } from 'const/screenPaths';

export const getProductDetailPath = (productId: string): string =>
  PRODUCT_DETAIL_PATH.replace(PRODUCT_DETAIL_PARAMS, productId);
