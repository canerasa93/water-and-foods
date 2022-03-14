// Import Utils
import { getUniqueListBy, isArray } from 'src/common/utils/array/arrayUtils';

// Import Types
import * as types from '../../action-types/types';

type TagsCardType = {
  name: string;
  title: string;
  id: string;
  price: number;
  tags: Array<string>;
};

// Calculate Tags Counters
const calculateTagsCounters = (tag, productData) => {
  let tagDataCount = 0;

  productData?.map((product) => {
    if (product?.tags?.includes(tag)) {
      tagDataCount = tagDataCount + 1;
    }
  });

  return tagDataCount;
};

//This function makes tag data from all products
const createTagsData = (data: Array<TagsCardType>, selectedTags) => {
  let result: Array<Record<string, string | number>> = [];

  const dataAll = [
    {
      name: 'all_tags',
      label: 'All',
      id: 'all_tags',
      count: 5
    }
  ];

  if (data && isArray(data)) {
    data?.map((product: TagsCardType) => {
      if (product && isArray(product?.tags) && product?.tags?.length) {
        product?.tags?.map((tag: string) => {
          result?.push({
            name: tag,
            label: tag,
            id: tag,
            count: calculateTagsCounters(tag, selectedTags)
          });
        });
      }
    });
  }
  result = [...dataAll, ...result];

  const removeDuplicates = getUniqueListBy(result, 'name');

  return removeDuplicates;
};

export const getTags = (value, selectedTags) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  dispatch({
    type: types.TAGS_SUCCESS,
    payload: createTagsData(value, selectedTags)
  });
};
