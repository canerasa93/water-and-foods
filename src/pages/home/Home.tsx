// Import React
import { Fragment, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { getProducts } from 'src/store/actions/products/getProducts';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Utils
// import { arrayToPaginate } from 'src/common/utils/array/arrayUtils';

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
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return getProductsData && getProductsData?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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

  return (
    <Fragment>
      <FilterButtons />
      <ContentBox>
        <ProductList data={currentData} />
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
