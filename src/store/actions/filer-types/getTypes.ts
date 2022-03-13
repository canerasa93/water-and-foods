// Import Utils
import { getUniqueListBy, isArray } from 'src/common/utils/array/arrayUtils';

// Import Types
import * as types from '../../action-types/types';

type TypeCardType = {
  name: string;
  title: string;
  id: string;
  price: number;
  tags: Array<string>;
  itemType: string;
};

//This function makes tag data from all products
const createTypeData = (data: Array<TypeCardType>) => {
  let result: Array<Record<string, string>> = [];

  if (data && isArray(data)) {
    data?.map((product: TypeCardType) => {
      result?.push({
        title: product?.itemType
      });
    });
  }

  const removeDuplicates = getUniqueListBy(result, 'title');

  return removeDuplicates;
};

export const getTypes = (value) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  dispatch({
    type: types.TYPES_SUCCESS,
    payload: createTypeData(value)
  });
};
