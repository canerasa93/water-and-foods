// Import React
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { getProducts } from 'src/store/actions/products/getProducts';
import { RootState } from 'src/store/store';

// Import Components
import FilterButtons from 'src/components/filter-buttons/FilterButtons';
import ContentBox from 'src/components/content-box/ContentBox';
import ProductList from 'src/components/product-list/ProductList';
import Pagination from 'src/components/pagination/Pagination';
import { arrayToPaginate } from 'src/common/utils/array/arrayUtils';

function Home() {
  // Store Variables
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <FilterButtons />
      <ContentBox>
        <ProductList data={ arrayToPaginate(getProductsData, 16)?.[0]} />
      </ContentBox>

      <Pagination />
    </Fragment>
  );
}

export default Home;
