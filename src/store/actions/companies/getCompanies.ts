// Imnport Axios
import axios from 'axios';

// Import Types
import * as types from '../../action-types/types';

export const getCompanies = () => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios
    .get('http://localhost:3010/companies', {
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
