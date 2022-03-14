// Import Types
import * as types from '../../action-types/types';

export const basketItemControl = (id, type) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  if (type === 'decrease') {
    dispatch({
      type: types.BASKET_DECREASE,
      payload: id
    });
  } else if (type === 'increase') {
    dispatch({
      type: types.BASKET_INCREASE,
      payload: id
    });
  }
};
