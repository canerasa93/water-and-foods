// Import Styled Components
import { StyledProductList } from './_productListStyle';

// Import Components
import ProductCard from '../product-card/ProductCard';

export type ProductCardData = {
  price: number;
  title: string;
  id: string;
};

interface ProductListProps {
  data: Array<ProductCardData>;
}

ProductList.defaultProps = {
  data: []
};

function ProductList(props: ProductListProps) {
  // Desctruct Props
  const { data } = props;

  return (
    <StyledProductList>
      {data?.map((item, index) => {
        return <ProductCard {...item} key={item?.id + index} />;
      })}
    </StyledProductList>
  );
}

export default ProductList;
