// Imnport Axios
import axios from 'axios';

// Import Types
import * as types from '../../action-types/types';

// Import Utils
import { isArray } from 'src/common/utils/array/arrayUtils';

// This function analyze incoming data and analyze according to needs (re-format data for filters)
const reFormatBrandsData = (data) => {
  const dataAll = [
    {
      name: 'all',
      label: 'All',
      id: 'all',
      count: 5
    }
  ];
  let result: Array<Record<string, string | number>> = [];

  if (data && isArray(data)) {
    data?.map((company) => {
      result?.push({
        name: company?.slug,
        label: company?.name,
        id: company?.slug,
        count: 0
      });
    });
  }

  return [...dataAll, ...result];
};

export const getCompanies = () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios
    .get(`${process.env.REACT_APP_API_URL}/companies`, {
      headers: config.headers
    })
    .then((res) => {
      // success: response payload
      dispatch({
        type: types.COMPANIES_SUCCESS,
        payload: reFormatBrandsData(res.data.companies)
      });
    })
    .catch((err) => {
      // fail: response payload
      dispatch({
        type: types.COMPANIES_FAIL,
        payload: err
      });
    });
};
