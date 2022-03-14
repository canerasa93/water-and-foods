import * as types from '../action-types/types';

const initialState = {
  success: null,
  failed: null
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS:
      return {
        success: action.payload,
        failed: null
      };
    case types.FAIL:
      return {
        success: null,
        failed: action.payload
      };
    default:
      return state;
  }
}
