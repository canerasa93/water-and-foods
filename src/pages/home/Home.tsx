// Import React
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { getProducts } from 'src/store/actions/products/getProducts';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Utils
import { arrayToPaginate } from 'src/common/utils/array/arrayUtils';

// Import Components
import FilterButtons from 'src/components/filter-buttons/FilterButtons';
import ContentBox from 'src/components/content-box/ContentBox';
import ProductList from 'src/components/product-list/ProductList';
import Pagination from 'src/components/pagination/Pagination';

function Home() {
  // Store Variables
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.filtered);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

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
          page: 1,
          sorting: 'lth'
        }
      }
    });
  }, []);

  return (
    <Fragment>
      <FilterButtons />
      <ContentBox>
        <ProductList data={arrayToPaginate(getProductsData, 16)?.[getMainStoreData?.filterParams?.page]} />
      </ContentBox>

      <Pagination data={getProductsData} />
    </Fragment>
  );
}

export default Home;
