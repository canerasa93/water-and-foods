// Import React
import { Fragment } from 'react';

// Import Components
import FilterButtons from 'src/components/filter-buttons/FilterButtons';
import ContentBox from 'src/components/content-box/ContentBox';
import ProductList from 'src/components/product-list/ProductList';
import Pagination from 'src/components/pagination/Pagination';

function Home() {
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

      <Pagination />
    </Fragment>
  );
}

export default Home;
