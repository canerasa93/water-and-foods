import * as types from 'src/store/action-types/types';

const initialState: any = {
  success: {
    basket: false,
    filter: false
  }
};

export default function mobileControlsReducer(state = initialState, action) {
  switch (action.type) {
    case types.MOBILE_BASKET:
      return {
        ...state,
        success: {
          basket: action.payload,
          filter: state.success.filter
        }
      };
    case types.MOBILE_FILTER:
      return {
        ...state,
        success: {
          basket: state.success.basket,
          filter: action.payload
        }
      };
    default:
      return state;
  }
}
