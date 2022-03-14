// Import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { getTags } from 'src/store/actions/tags/getTags';
import { RootState } from 'src/store/store';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

interface TagsProps {
  onChange: (value, id, type) => void;
}

function Tags(props: TagsProps) {
  // Desctruct Props
  const { onChange } = props;

  // Store Variables
  const dispatch = useDispatch();
  const getTagsData = useSelector((state: RootState) => state?.tagsReducer?.success);
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);

  // Get Tags on Load Action
  useEffect(() => {
    getProductsData && dispatch(getTags(getProductsData, getProductsData));
  }, [getProductsData]);

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
