// Imnport Axios
import axios from 'axios';

// Import Types
import * as types from '../../action-types/types';

// Import Utils
import { isArray, sortAscByKey } from 'src/common/utils/array/arrayUtils';

//This function analyze incoming data and analyze according to needs (re-format data for filters)
const reFormatProducts = (data: Array<Record<string, string | number>>) => {
  let result: Array<Record<string, string | number>> = [];

  if (data && isArray(data)) {
    data?.map((product: Record<string, string | number>) => {
      result?.push({
        name: product?.slug,
        title: product?.name,
        id: product?.slug,
        price: Number(product.price),
        tags: product?.tags,
        itemType: product?.itemType,
        manufacturer: product?.manufacturer,
        added: product?.added,
        inventory: 0
      });
    });
  }

  return sortAscByKey([...result], 'price');
};

export const getProducts = () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios
    .get(`${process.env.REACT_APP_API_URL}/items`, {
      headers: config.headers
    })
    .then((res) => {
      // success: response payload
      // Dispatch Products

      dispatch({
        type: types.PRODUCT_LIST_SUCCESS,
        payload: reFormatProducts(res?.data)
      });
    })
    .catch((err) => {
      // fail: response payload
      dispatch({
        type: types.PRODUCT_LIST_FAIL,
        payload: err
      });
    });
};
