import * as types from 'src/store/action-types/types';

const initialState = {
  success: null
};

export default function typesReducer(state = initialState, action) {
  switch (action.type) {
    case types.TYPES_SUCCESS:
      return {
        success: action.payload
      };
    default:
      return state;
  }
}
