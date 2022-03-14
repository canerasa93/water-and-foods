// Import React
import { useDispatch } from 'react-redux';

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
import { basketItemControl } from 'src/store/actions/basket/basketItemControl';

interface BasketItem {
  name: string;
  title: string;
  id: string;
  price: number;
  inventory: number;
}

function BasketItem(props) {
  // Desctruct Props
  const { name, price, id, inventory } = props;

  // Store Variables
  const dispatch = useDispatch();

  // Descrease Basket Item
  const decrease = () => {
    dispatch(basketItemControl(id, 'decrease'))
  }

   // Increase Basket Item
   const increase = () => {
    dispatch(basketItemControl(id, 'increase'))
  }

  return (
    <StyledBasketItemWrapper>
      {/* Texts */}
      <StyledBasketItemContent>
        <StyledBasketItemTitle>{name}</StyledBasketItemTitle>
        <StyledBasketItemPrice>{getFormattedAmount(price)}</StyledBasketItemPrice>
      </StyledBasketItemContent>
      {/* Controls */}
      <StyledBasketItemControls>
        <StyledBasketItemTrigger onClick={() => decrease()}>
          <CustomIcon name={ICON_LIST.MINUS} size={ICON_SIZES.XSMALL} />
        </StyledBasketItemTrigger>
        <StyledBasketItemCounter>{inventory}</StyledBasketItemCounter>
        <StyledBasketItemTrigger onClick={() => increase()}>
          <CustomIcon name={ICON_LIST.PLUS} size={ICON_SIZES.XSMALL} />
        </StyledBasketItemTrigger>
      </StyledBasketItemControls>
    </StyledBasketItemWrapper>
  );
}

export default BasketItem;
