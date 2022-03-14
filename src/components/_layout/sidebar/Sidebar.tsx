// Import React
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Utils
import { removeAccents } from 'src/common/utils/string/stringUtils';
import { getUniqueListBy } from 'src/common/utils/array/arrayUtils';

// Import Store
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Components
import Tags from './filters/Tags';
import Brands from './filters/Brands';
import Sorting from './filters/Sorting';

function Sidebar() {
  // Store Variables
  const dispatch = useDispatch();
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);
  const getProductsDataOrigin = useSelector((state: RootState) => state?.productsReducer?.success?.origin);
  const getMobileFilter = useSelector((state: RootState) => state?.mobileControlsReducer?.success?.filter);

  // Get Filtered Data from Selected Tab
  const filterProductOriginByTab = (filterParam) => {
    const filtered = getProductsDataOrigin?.filter((item) => item?.itemType === filterParam);

    return filtered;
  };

  // Base Filter Function For Checkboxes
  const filterFunction = (filterName, filteredData, id, value) => {
    const currentTabData = filterProductOriginByTab(getMainStoreData?.filterParams?.filterButton);
    let currentFilterParams = value
      ? [...getMainStoreData?.filterParams?.[`${filterName}`], ...[id]]
      : getMainStoreData?.filterParams?.[`${filterName}`];

    if (!value) {
      currentFilterParams = currentFilterParams.filter((i) => i !== id);
    }

    if (id !== 'all' && id !== 'all_tags') {
      currentFilterParams?.map((param) => {
        currentTabData?.map((productItem) => {
          if (filterName === 'brands') {
            if (removeAccents(productItem?.manufacturer) === removeAccents(param)) {
              filteredData.push(productItem);
            }
          } else if (filterName === 'tags') {
            productItem?.tags?.map((tagItem) => {
              if (removeAccents(tagItem) === removeAccents(param)) {
                filteredData.push(productItem);
              }
            });
          }
        });
      });
    }
  };

  // Main Filter Function For Checkboxes
  const makeFilter = (filterName, id, value) => {
    let filteredData: Array<Record<string, string | number | Array<string>>> = [];

    // Filter
    filterFunction(filterName, filteredData, id, value);

    dispatch({
      type: types.PRODUCT_LIST_UPDATE,
      payload: getUniqueListBy(filteredData, 'name')
    });
  };

  // Handle Checkbox Change on Filter
  const handleFilterCheckboxChange = (value: boolean, id: string, filterName: string) => {
    let data = getMainStoreData.filterParams[`${filterName}`];

    if (id !== 'all' && id !== 'all_tags') {
      if (value) {
        data = [...data, ...[id]];
        data = data?.filter((b) => b !== 'all' && b !== 'all_tags');
      } else {
        data = data?.filter((b) => b !== id);

        if (!data.length) {
          data = filterName === 'brands' ? [...data, ...['all']] : [...data, ...['all_tags']];
        }
      }

      // Run Filter for Checkbox
      makeFilter(filterName, id, value);
    }
    dispatch({
      type: types.SUCCESS,
      payload: {
        filterParams: {
          filterButton: getMainStoreData.filterParams.filterButton,
          brands: filterName === 'brands' ? data : getMainStoreData.filterParams.brands,
          tags: filterName === 'tags' ? data : getMainStoreData.filterParams.tags,
          sorting: getMainStoreData.filterParams.sorting
        }
      }
    });
  };

  return (
    <StyledSidebar mobileActiveFilters={getMobileFilter}>
      {/* SORTING */}
      <Sorting />

      {/* BRANDS */}
      <Brands onChange={handleFilterCheckboxChange} filterProductOriginByTab={filterProductOriginByTab} />

      {/* TAGS */}
      <Tags onChange={handleFilterCheckboxChange} />
    </StyledSidebar>
  );
}

export default Sidebar;
