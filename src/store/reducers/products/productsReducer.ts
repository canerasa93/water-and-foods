import * as types from 'src/store/action-types/types';

const initialState = {
  isLoading: false,
  success: null,
  failed: null
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCT_LIST_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.PRODUCT_LIST_SUCCESS:
      return {
        isLoading: false,
        success: action.payload,
        failed: null
      };
    case types.PRODUCT_LIST_FAIL:
      return {
        isLoading: false,
        success: null,
        failed: action.payload
      };
    default:
      return state;
  }
}
