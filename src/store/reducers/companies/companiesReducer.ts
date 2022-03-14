import * as types from 'src/store/action-types/types';

const initialState = {
  success: null,
  failed: null
};

export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case types.COMPANIES_SUCCESS:
      return {
        success: action.payload,
        failed: null
      };
    case types.COMPANIES_FAIL:
      return {
        success: null,
        failed: action.payload
      };
    default:
      return state;
  }
}
