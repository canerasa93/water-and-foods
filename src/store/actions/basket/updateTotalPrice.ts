// Import Types
import * as types from '../../action-types/types';

export const updateTotalPrice = (value) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  dispatch({
    type: types.BASKET_TOTAL_PRICE_UPDATE,
    payload: value
  });
};
