import * as types from '../action-types/types';

const initialState = {
  isLoading: false,
  success: null,
  failed: null
};


export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case types.TAGS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.TAGS_SUCCESS:

      return {
        ...state,
        isLoading: false,
        success: action.payload,
        failed: null
      };
    case types.TAGS_FAIL:
      return {
        isLoading: false,
        success: null,
        failed: action.payload
      };
    default:
      return state;
  }
}
