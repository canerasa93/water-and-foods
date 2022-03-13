// Import React
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Store
import { getCompanies } from 'src/store/actions/companies/getCompanies';
import { RootState } from 'src/store/store';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';
import { isArray } from 'src/common/utils/array/arrayUtils';

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
  const [brandsData, setBrandsData] = useState<Array<Record<string, string | number>>>();

  // Store Variables
  const dispatch = useDispatch();
  let getCompaniesData = useSelector((state: RootState) => state?.companiesReducer?.success?.data.companies);

  //This function analyze incoming data and analyze according to needs (re-format data for filters)
  const reFormatFilterData = (data) => {
    const dataAll = [
      {
        name: 'all',
        label: 'All',
        id: 'all',
        count: 5
      }
    ];

    if (data && isArray(data)) {
      let result: Array<Record<string, string | number>> = [];
      data?.map((company) => {
        result?.push({
          name: company?.slug,
          label: company?.name,
          id: company?.slug,
          count: 0
        });
      });

      setBrandsData([...dataAll, ...result]);
    }
  };

  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  useEffect(() => {
    reFormatFilterData(getCompaniesData);

  }, [getCompaniesData]);

  return (
    <StyledSidebar>
      {/* SORTING */}
      <SidebarCard {...filterData} />

      {/* BRANDS */}
      <SidebarCard title={'BRANDS'} scrollable={true} data={brandsData} />

      {/* TAGS */}
      <SidebarCard title={'TAGS'} scrollable={true} data={brandsData} />
    </StyledSidebar>
  );
}

export default Sidebar;
