import * as types from 'src/store/action-types/types';

const initialState = {
  success: {
    origin: null,
    filtered: null
  },
  failed: null
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        success: {
          origin: action.payload,
          filtered: action.payload
        },
        failed: null
      };
    case types.PRODUCT_LIST_UPDATE:
      return {
        ...state,
        success: {
          origin: state.success.origin,
          filtered: action.payload
        },
        failed: null
      };
    case types.PRODUCT_LIST_FAIL:
      return {
        success: {
          origin: null,
          filtered: null
        },
        failed: action.payload
      };
    default:
      return state;
  }
}
