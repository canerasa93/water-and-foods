// Import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Styled Components
import { StyledBasketWrapper, StyledBasketTotalPrice } from './_basketStyle';

// Import Store
import { updateTotalPrice } from 'src/store/actions/basket/updateTotalPrice';
import { RootState } from 'src/store/store';

// Import Components
import BasketItem from './BasketItem';
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

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
      {getBasketData?.data?.length
        ? getBasketData?.data?.map((item) => <BasketItem key={item?.id} {...item} />)
        : 'Sepetinizde ürün bulunmamaktadır!'}

      {getBasketData?.data?.length ? (
        <StyledBasketTotalPrice>{getFormattedAmount(getBasketData?.total)}</StyledBasketTotalPrice>
      ) : null}
    </StyledBasketWrapper>
  );
}

export default Basket;
