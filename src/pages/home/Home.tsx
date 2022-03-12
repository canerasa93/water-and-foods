// Import React
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { RootState } from 'src/store/store';
import { test } from 'src/store/actions/test/test';

// Import Components
import FilterButtons from 'src/components/filter-buttons/FilterButtons';
import ContentBox from 'src/components/content-box/ContentBox';
import ProductList from 'src/components/product-list/ProductList';

function Home() {
  // Store Variables
  const dispatch = useDispatch();

  const testdata = useSelector((state: RootState) => state?.globalReducer?.success?.data.companies);

  useEffect(() => {
    dispatch(test());
  }, []);

  useEffect(() => {
    console.log('testdata', testdata);
  }, [testdata]);

  return (
    <Fragment>
      <FilterButtons />
      <ContentBox>
        <ProductList
          data={[
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' },
            { title: 'Test' }
          ]}
        />
      </ContentBox>
    </Fragment>
  );
}

export default Home;
