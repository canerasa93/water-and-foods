// Import Styled Components
import { StyledBasketWrapper, StyledBasketTotalPrice } from './_basketStyle';

// Import Components
import BasketItem from './BasketItem';
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

function Basket() {
  return (
    <StyledBasketWrapper>
      <BasketItem />
      <BasketItem />
      <BasketItem />

      <StyledBasketTotalPrice>{getFormattedAmount(39.97)}</StyledBasketTotalPrice>
    </StyledBasketWrapper>
  );
}

export default Basket;
