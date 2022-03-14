import * as types from 'src/store/action-types/types';

const initialState: any = {
  success: {
    data: [],
    total: 0
  }
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case types.BASKET_CREATE:
      return {
        ...state,
        success: {
          ...state.success,
          data: [...state.success.data, { ...action.payload, inventory: 1 }],
          
        }
      };
    case types.BASKET_INCREASE:
      return {
        ...state,
        success: {
          ...state.success,
          data: state.success.data.map((product: any) =>
            product.id === action.payload ? { ...product, inventory: product?.inventory + 1 } : product
          )
        }
      };
    case types.BASKET_DECREASE:
      return {
        ...state,
        success: {
          ...state.success,
          data: state.success.data.map((product: any) =>
            product.id === action.payload
              ? {
                  ...product,
                  inventory: product.inventory !== 1 ? product.inventory - 1 : 1
                }
              : product
          )
        }
      };
    case types.BASKET_TOTAL_PRICE_UPDATE:
      return {
        ...state,
        success: {
          ...state.success,
          total: action.payload
        }
      };
    default:
      return state;
  }
}
