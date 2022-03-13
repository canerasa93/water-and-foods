import * as types from '../action-types/types';

const initialState = {
  isLoading: false,
  success: null,
  failed: null
};

export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case types.COMPANIES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.COMPANIES_SUCCESS:
      return {
        isLoading: false,
        success: action.payload,
        failed: null
      };
    case types.COMPANIES_FAIL:
      return {
        isLoading: false,
        success: null,
        failed: action.payload
      };
    default:
      return state;
  }
}
