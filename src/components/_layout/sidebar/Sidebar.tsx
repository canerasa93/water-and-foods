// Import React
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Utils
import { removeAccents } from 'src/common/utils/string/stringUtils';
import {
  countByKey,
  getUniqueListBy,
  sortAscByKey,
  sortDateAscByKey,
  sortDateDescByKey,
  sortDescByKey
} from 'src/common/utils/array/arrayUtils';

// Import Store
import { getCompanies } from 'src/store/actions/companies/getCompanies';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';
import Tags from './Tags';

function Sidebar() {
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

  // Store Variables
  const dispatch = useDispatch();
  const getCompaniesData = useSelector((state: RootState) => state?.companiesReducer?.success);
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);
  const getProductsDataOrigin = useSelector((state: RootState) => state?.productsReducer?.success?.origin);

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
          page: getMainStoreData.filterParams.page,
          sorting: getMainStoreData.filterParams.sorting
        }
      }
    });
  };

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
          page: getMainStoreData.filterParams.page,
          sorting: id
        }
      }
    });
  };

  // Calculate Brand Counters
  const calculateBrandCounters = () => {
    getCompaniesData[0].count = filterProductOriginByTab(getMainStoreData?.filterParams?.filterButton).length;

    getCompaniesData?.map((brandItem, index) => {
      const count: number = countByKey(getProductsData, 'manufacturer', brandItem.id);
      index !== 0 && (getCompaniesData[index].count = count);
    });
  };

  

  // Get Companies on Load Action
  useEffect(() => {
    !getCompaniesData && dispatch(getCompanies());
  }, [getCompaniesData]);

  // Run Brand Counters
  useEffect(() => {
    getCompaniesData && getProductsData && calculateBrandCounters();
  }, [getCompaniesData, getProductsData]);

  

  return (
    <StyledSidebar>
      {/* SORTING */}
      <SidebarCard {...filterData} title="SORTING" handleOnChange={(_, id: string) => handleFilterRadioChange(id)} />

      {/* BRANDS */}
      <SidebarCard
        title={'BRANDS'}
        scrollable={true}
        data={getCompaniesData}
        handleOnChange={(value: boolean, id: string) => handleFilterCheckboxChange(value, id, 'brands')}
      />

      {/* TAGS */}
      <Tags onChange={handleFilterCheckboxChange} filterProductOriginByTab={filterProductOriginByTab}/>
      
    </StyledSidebar>
  );
}

export default Sidebar;
