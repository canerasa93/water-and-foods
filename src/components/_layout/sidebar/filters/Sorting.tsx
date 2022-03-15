// Import React
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

// Import Utils
import { sortAscByKey, sortDateAscByKey, sortDateDescByKey, sortDescByKey } from 'src/common/utils/array/arrayUtils';

// Import Store
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

interface SortingProps {}

function Sorting(props: SortingProps) {
  // Desctruct Props
  const {} = props;

  // Store Variables
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

  // Variables
  const [filterData] = useState({
    title: 'SORTING',
    scrollable: false,
    data: [
      {
        name: 'sorting_radios',
        label: 'Price low to high',
        id: 'lth'
      },
      {
        name: 'sorting_radios',
        label: 'Price high to low',
        id: 'htl'
      },
      {
        name: 'sorting_radios',
        label: 'New to old',
        id: 'nto'
      },
      {
        name: 'sorting_radios',
        label: 'Old to new',
        id: 'otn'
      }
    ]
  });

  // Handle Checkbox Change on Filter
  const handleFilterRadioChange = (id: string) => {
    if (id === filterData.data[0].id) {
      //Price low to high
      sortAscByKey(getProductsData, 'price');
    } else if (id === filterData.data[1].id) {
      //Price high to low
      sortDescByKey(getProductsData, 'price');
    } else if (id === filterData.data[2].id) {
      // New to old
      sortDateAscByKey(getProductsData, 'added');
    } else {
      // Old to new
      sortDateDescByKey(getProductsData, 'added');
    }

    dispatch({
      type: types.SUCCESS,
      payload: {
        filterParams: {
          filterButton: getMainStoreData.filterParams.filterButton,
          brands: getMainStoreData.filterParams.brands,
          tags: getMainStoreData.filterParams.tags,
          sorting: id
        }
      }
    });
  };

  return (
    <SidebarCard {...filterData} title="SORTING" handleOnChange={(_, id: string) => handleFilterRadioChange(id)} />
  );
}

export default Sorting;
