// Import Styled Components
import {
  StyledBasketItemWrapper,
  StyledBasketItemTitle,
  StyledBasketItemPrice,
  StyledBasketItemContent,
  StyledBasketItemControls,
  StyledBasketItemTrigger,
  StyledBasketItemCounter
} from './_basketStyle';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';
import { ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Components
import CustomIcon from '../custom-icon/CustomIcon';

function BasketItem() {
  return (
    <StyledBasketItemWrapper>
      {/* Texts */}
      <StyledBasketItemContent>
        <StyledBasketItemTitle>Gorgeous Office Mug</StyledBasketItemTitle>
        <StyledBasketItemPrice>{getFormattedAmount(14.99)}</StyledBasketItemPrice>
      </StyledBasketItemContent>
      {/* Controls */}
      <StyledBasketItemControls>
        <StyledBasketItemTrigger>
          <CustomIcon name={ICON_LIST.MINUS} size={ICON_SIZES.XSMALL} />
        </StyledBasketItemTrigger>
        <StyledBasketItemCounter>1</StyledBasketItemCounter>
        <StyledBasketItemTrigger>
          <CustomIcon name={ICON_LIST.PLUS} size={ICON_SIZES.XSMALL} />
        </StyledBasketItemTrigger>
      </StyledBasketItemControls>
    </StyledBasketItemWrapper>
  );
}

export default BasketItem;
