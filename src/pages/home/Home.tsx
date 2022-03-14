// Import React
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { getProducts } from 'src/store/actions/products/getProducts';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Components
import FilterButtons from 'src/components/filter-buttons/FilterButtons';
import ContentBox from 'src/components/content-box/ContentBox';
import ProductList from 'src/components/product-list/ProductList';
import Pagination from 'src/components/pagination/Pagination';

let PageSize = 16;

function Home() {
  // Store Variables
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState();

  const currentData = () => {
    let result;

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    result = getProductsData && getProductsData?.slice(firstPageIndex, lastPageIndex);

    setCurrentPageData(result);
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
      <FilterButtons />
      <ContentBox>
        <ProductList data={currentPageData} />
      </ContentBox>

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
