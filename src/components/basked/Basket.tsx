// Import React
import { useSelector } from 'react-redux';

// Import Styled Components
import { StyledBasketWrapper, StyledBasketTotalPrice } from './_basketStyle';

// Import Store
import { RootState } from 'src/store/store';

// Import Components
import BasketItem from './BasketItem';
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

function Basket() {
  // Store Variables
  const getBasketData = useSelector((state: RootState) => state?.basketReducer?.success);

  return (
    <StyledBasketWrapper>
      {getBasketData?.length
        ? getBasketData?.map((item) => <BasketItem key={item?.id} {...item} />)
        : 'Sepetinizde ürün bulunmamaktadır!'}

      {getBasketData?.length ? <StyledBasketTotalPrice>{getFormattedAmount(39.97)}</StyledBasketTotalPrice> : null}
    </StyledBasketWrapper>
  );
}

export default Basket;
