// Import React
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { getProducts } from 'src/store/actions/products/getProducts';
import { setMobileFilter } from 'src/store/actions/mobile-controls/setMobileFilter';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';
import { ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Styled Components
import { StyledProductTopLine, StyledFilterMobileTrigger } from './_homeGlobalStyle';

// Import Components
import FilterButtons from 'src/components/filter-buttons/FilterButtons';
import ContentBox from 'src/components/content-box/ContentBox';
import ProductList from 'src/components/product-list/ProductList';
import Pagination from 'src/components/pagination/Pagination';
import CustomIcon from 'src/components/custom-icon/CustomIcon';

let PageSize = 16;

function Home() {
  // Variables
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState();

  // Store Variables
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);
  const getMobileFilter = useSelector((state: RootState) => state?.mobileControlsReducer?.success?.filter);

  // Current Data for Pagination
  const currentData = () => {
    let result;

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    result = getProductsData && getProductsData?.slice(firstPageIndex, lastPageIndex);

    setCurrentPageData(result);
  };

  // Mobile on Filter Click
  const handleMobileFilter = () => {
    dispatch(setMobileFilter(!getMobileFilter));
  };

  useEffect(() => {
    // Get Products on Load
    dispatch(getProducts());

    // Set Default Filter Parameters
    dispatch({
      type: types.SUCCESS,
      payload: {
        filterParams: {
          filterButton: 'mug',
          brands: [],
          tags: [],
          sorting: 'lth'
        }
      }
    });
  }, []);

  useEffect(() => {
    currentData();
  }, [getProductsData, currentPage, getMainStoreData]);

  return (
    <Fragment>
      {/* Top Filter */}
      <StyledProductTopLine>
        <StyledFilterMobileTrigger onClick={() => handleMobileFilter()}>
          <CustomIcon name={ICON_LIST.FILTER} status={ICON_STATUS.PRIMARY} size={ICON_SIZES.SMALL} />
        </StyledFilterMobileTrigger>
        <FilterButtons />
      </StyledProductTopLine>

      {/* Page Content */}
      <ContentBox>
        <ProductList data={currentPageData} />
      </ContentBox>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalCount={getProductsData?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Fragment>
  );
}

export default Home;
