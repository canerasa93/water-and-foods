import * as types from 'src/store/action-types/types';

const initialState = {
  success: []
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case types.BASKET_CREATE:
      return {
        ...state,
        success: [...state.success, action.payload]
      };
    case types.BASKET_UPDATE:
      return {
        success: action.payload
      };
    case types.BASKET_DELETE:
      return {
        success: action.payload
      };
    default:
      return state;
  }
}
