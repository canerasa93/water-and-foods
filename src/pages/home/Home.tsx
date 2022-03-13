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
import { removeAccents } from 'src/common/utils/string/stringUtils';

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
          filterButton: '',
          brands: ['all'],
          tags: ['all_tags'],
          page: 0,
          sorting: 'lth'
        }
      }
    });
  }, []);

  //   id: "Tasty-River-Mug-1"
  // itemType: "mug"
  // name: "Tasty-River-Mug-1"
  // price: 9.99
  // tags: (3) ['River', 'Fog', 'Rocks']
  // title: "Tasty River Mug"

  const makeFilter = () => {
    let filteredData: Array<Record<string, string | number | Array<string>>> = [];

    console.log('brands: ', getMainStoreData?.filterParams?.brands);

    // Brands Filter
    getMainStoreData?.filterParams?.brands?.map((brand) => {
      if (brand !== 'all') {
        getProductsData?.map((productItem) => {
          if (removeAccents(productItem?.manufacturer) === removeAccents(brand)) {
            filteredData.push(productItem);
          }
        });
      } else {
        getProductsData?.map((productItem) => {
          filteredData.push(productItem);
        });
      }
    });

    console.log('filteredData: ', filteredData);
  };

  useEffect(() => {
    getMainStoreData && getProductsData && makeFilter();
  }, [getMainStoreData]);

  return (
    <Fragment>
      <FilterButtons />
      <ContentBox>
        <ProductList data={arrayToPaginate(getProductsData, 16)?.[getMainStoreData?.filterParams?.page]} />
      </ContentBox>

      <Pagination />
    </Fragment>
  );
}

export default Home;
