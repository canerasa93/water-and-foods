// Import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import {
  StyledBasketWrapper,
  StyledBasketTotalPrice,
  StyledNullBasket,
  StyledNullBasketTitle,
  StyledNullBasketSubTitle
} from './_basketStyle';

// Import Store
import { updateTotalPrice } from 'src/store/actions/basket/updateTotalPrice';
import { RootState } from 'src/store/store';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';
import { ICON_SIZES } from 'src/common/constants/icon/iconSizes';

// Import Components
import BasketItem from './BasketItem';
import CustomIcon from 'src/components/custom-icon/CustomIcon';

function Basket() {
  // Store Variables
  const dispatch = useDispatch();
  const getBasketData = useSelector((state: RootState) => state?.basketReducer?.success);

  const calculateTotalPrice = () => {
    let calculatedData = 0;

    getBasketData?.data?.map((basketData) => {
      calculatedData = calculatedData + basketData?.inventory * basketData?.price;
    });

    dispatch(updateTotalPrice(calculatedData));
  };

  useEffect(() => {
    getBasketData?.data && getBasketData?.data.length && calculateTotalPrice();
  }, [getBasketData?.data]);

  return (
    <StyledBasketWrapper>
      {getBasketData?.data?.length ? getBasketData?.data?.map((item) => <BasketItem key={item?.id} {...item} />) : null}

      <StyledNullBasket visible={getBasketData?.data?.length <= 0}>
        <CustomIcon name={ICON_LIST.BASKET} status={ICON_STATUS.SECONDARY} size={ICON_SIZES.XLARGE} />
        <StyledNullBasketTitle>Your cart is currently empty</StyledNullBasketTitle>
        <StyledNullBasketSubTitle>Add items to your cart to order</StyledNullBasketSubTitle>
      </StyledNullBasket>

      {getBasketData?.data?.length ? (
        <StyledBasketTotalPrice>{getFormattedAmount(getBasketData?.total)}</StyledBasketTotalPrice>
      ) : null}
    </StyledBasketWrapper>
  );
}

export default Basket;
