// Import React
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

// Import Utils
import { countByKey } from 'src/common/utils/array/arrayUtils';

// Import Store
import { getCompanies } from 'src/store/actions/companies/getCompanies';
import { RootState } from 'src/store/store';

interface BrandsProps {
  filterProductOriginByTab: (val) => Array<Record<any, any>>;
  onChange: (value, id, type) => void;
}

function Brands(props: BrandsProps) {
  // Desctruct Props
  const { onChange, filterProductOriginByTab } = props;

  // Store Variables
  const dispatch = useDispatch();
  const getCompaniesData = useSelector((state: RootState) => state?.companiesReducer?.success);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);

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
    <SidebarCard
      title={'BRANDS'}
      scrollable={true}
      data={getCompaniesData}
      handleOnChange={(value: boolean, id: string) => onChange(value, id, 'brands')}
    />
  );
}

export default Brands;
