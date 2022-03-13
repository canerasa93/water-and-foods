// Import React
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Store
import { getCompanies } from 'src/store/actions/companies/getCompanies';
import { getTags } from 'src/store/actions/tags/getTags';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

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
  const getTagsData = useSelector((state: RootState) => state?.tagsReducer?.success);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

  // Handle Checkbox Change on Filter
  const handleFilterCheckboxChange = (value: boolean, id: string, filterName: string) => {
    let data = getMainStoreData.filterParams[`${filterName}`];
    if (value) {
      data = [...data, ...[id]];
    } else {
      data = data?.filter((b) => b !== id);
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

  // Get Companies on Load Action
  useEffect(() => {
    !getCompaniesData && dispatch(getCompanies());
  }, [getCompaniesData]);

  useEffect(() => {
    getProductsData && dispatch(getTags(getProductsData));
  }, [getProductsData]);

  return (
    <StyledSidebar>
      {/* SORTING */}
      <SidebarCard {...filterData} title="SORTING" />

      {/* BRANDS */}
      <SidebarCard
        title={'BRANDS'}
        scrollable={true}
        data={getCompaniesData}
        handleOnChange={(value: boolean, id: string) => handleFilterCheckboxChange(value, id, 'brands')}
      />

      {/* TAGS */}
      <SidebarCard
        title={'TAGS'}
        scrollable={true}
        data={getTagsData}
        handleOnChange={(value: boolean, id: string) => handleFilterCheckboxChange(value, id, 'tags')}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
