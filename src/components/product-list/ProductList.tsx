// Import Styled Components
import { StyledProductList } from './_productListStyle';

// Import Components
import ProductCard from '../product-card/ProductCard';

interface ProductListProps {
  data: Array<any>;
}

ProductList.defaultProps = {
  data: []
};

function ProductList(props: ProductListProps) {
  // Desctruct Props
  const { data } = props;

  return (
    <StyledProductList>
      {data?.map((item) => {
        return <ProductCard {...item} />;
      })}
    </StyledProductList>
  );
}

export default ProductList;
