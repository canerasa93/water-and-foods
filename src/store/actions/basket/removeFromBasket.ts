// Import Types
import * as types from '../../action-types/types';

export const removeFromBasket = (value) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  dispatch({
    type: types.BASKET_DELETE,
    payload: value
  });
};
