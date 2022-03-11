// Imnport Axios
import axios from 'axios';

// Import Types
import * as types from '../../action-types/types';

export const test = () => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios
    .get('https://jsonplaceholder.typicode.com/todos/1', {
      headers: config.headers
    })
    .then((res) => {
      // success: response payload
      dispatch({
        type: types.SUCCESS,
        payload: res
      });
    })
    .catch((err) => {
      // fail: response payload
      dispatch({
        type: types.FAIL,
        payload: err
      });
    });
};
