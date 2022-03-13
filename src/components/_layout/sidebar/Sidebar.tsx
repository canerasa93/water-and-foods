// Import React
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Store
import { getCompanies } from 'src/store/actions/companies/getCompanies';
import { getTags } from 'src/store/actions/tags/getTags';
import { RootState } from 'src/store/store';

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

  // Handle Brands Checkbox Change
  const handleBrandsChange = (value: boolean, id: string) => {
    console.log(id + ':' + value);
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
      <SidebarCard {...filterData} />

      {/* BRANDS */}
      <SidebarCard title={'BRANDS'} scrollable={true} data={getCompaniesData} handleOnChange={handleBrandsChange} />

      {/* TAGS */}
      <SidebarCard title={'TAGS'} scrollable={true} data={getTagsData} />
    </StyledSidebar>
  );
}

export default Sidebar;
