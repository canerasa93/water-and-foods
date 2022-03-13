import * as types from '../action-types/types';

const initialState = {
  success: null
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case types.TAGS_SUCCESS:
      return {
        success: action.payload
      };
    default:
      return state;
  }
}
