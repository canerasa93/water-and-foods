import * as types from '../action-types/types';

const initialState = {
  isLoading: false,
  success: null,
  failed: null
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.SUCCESS:
      return {
        isLoading: false,
        success: action.payload,
        failed: null
      };
    case types.FAIL:
      return {
        isLoading: false,
        success: null,
        failed: action.payload
      };
    default:
      return state;
  }
}
