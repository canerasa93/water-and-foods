// Import Types
import * as types from '../../action-types/types';

export const setMobileFilter = (value) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  dispatch({
    type: types.MOBILE_FILTER,
    payload: value
  });
};
