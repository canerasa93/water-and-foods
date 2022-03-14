import * as types from 'src/store/action-types/types';

const initialState = {
  success: []
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case types.BASKET_CREATE:
      return {
        ...state,
        success: [...state.success, { ...action.payload, inventory: 1 }]
      };
    case types.BASKET_INCREASE:
      console.log('state: ', state);
      return {
        ...state,
        success: state.success.map((product: any) =>
          product.id === action.payload ? { ...product, inventory: product?.inventory + 1 } : product
        )
      };
    case types.BASKET_DECREASE:
      return {
        ...state,
        success: state.success.map((product: any) =>
          product.id === action.payload
            ? {
                ...product,
                inventory: product.inventory !== 1 ? product.inventory - 1 : 1
              }
            : product
        )
      };
    case types.BASKET_DELETE:
      return {
        success: action.payload
      };
    default:
      return state;
  }
}
