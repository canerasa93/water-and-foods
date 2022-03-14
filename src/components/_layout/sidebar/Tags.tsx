// Import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Utils
import { countByFind } from 'src/common/utils/array/arrayUtils';

// Import Store
import { getTags } from 'src/store/actions/tags/getTags';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

interface TagsProps {
  filterProductOriginByTab: (val) => Array<Record<any, any>>;
  onChange: (value, id, type) => void;
}

function Tags(props: TagsProps) {
  // Desctruct Props
  const { filterProductOriginByTab, onChange } = props;

  // Store Variables
  const dispatch = useDispatch();
  const getTagsData = useSelector((state: RootState) => state?.tagsReducer?.success);
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

  // Calculate Tags Counters
  const calculateTagsCounters = () => {
    let tagsDataWithCount: any = [];

    getTagsData?.map((tagItem, index) => {
      const count: number = countByFind(getProductsData, 'tags', tagItem.label);

      tagsDataWithCount[index] = {
        name: getTagsData[index].name,
        label: getTagsData[index].label,
        id: getTagsData[index].id,
        count: count
      };
    });

    let allTagsCount = 0;
    filterProductOriginByTab(getMainStoreData?.filterParams?.filterButton)?.map((product) => {
      product.tags.length > 0 && allTagsCount++;
    });

    tagsDataWithCount[0].count = allTagsCount;

    dispatch({
      type: types.TAGS_SUCCESS,
      payload: tagsDataWithCount
    });
  };

  // Get Tags on Load Action
  useEffect(() => {
    getProductsData && dispatch(getTags(getProductsData));
  }, [getProductsData]);

  // Run Tag Counters
  useEffect(() => {
    getProductsData && getMainStoreData && getTagsData && calculateTagsCounters();
  }, [getMainStoreData, getTagsData, getProductsData]);

  return (
    <SidebarCard
      title={'TAGS'}
      scrollable={true}
      data={getTagsData}
      handleOnChange={(value: boolean, id: string) => onChange(value, id, 'tags')}
    />
  );
}

export default Tags;
