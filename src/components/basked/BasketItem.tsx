// Import React
import { useDispatch, useSelector } from 'react-redux';

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

// Import Store
import { basketItemControl } from 'src/store/actions/basket/basketItemControl';
import { removeFromBasket } from 'src/store/actions/basket/removeFromBasket';
import { RootState } from 'src/store/store';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Components
import CustomIcon from '../custom-icon/CustomIcon';

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
  const getBasketData = useSelector((state: RootState) => state?.basketReducer?.success?.data);

  // Descrease Basket Item
  const decrease = () => {
    let isValueBiggerThenOne = false;

    getBasketData?.find((item) => {
      if (item.id === props.id) {
        if (item.inventory > 1) {
          isValueBiggerThenOne = true;
        } else {
          isValueBiggerThenOne = false;
        }
      }
    });

    if (isValueBiggerThenOne) {
      dispatch(basketItemControl(id, 'decrease'));
    } else {
      dispatch(removeFromBasket(id));
    }
  };

  // Increase Basket Item
  const increase = () => {
    dispatch(basketItemControl(id, 'increase'));
  };

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
