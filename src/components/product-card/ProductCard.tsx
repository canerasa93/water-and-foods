// Import React
import { useDispatch, useSelector } from 'react-redux';

// Import Constants
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Styled Components
import {
  StyledProductCard,
  StyledProductCardImgWrapper,
  StyledProductCardImg,
  StyledProductPrice,
  StyledProductTitle,
  StyledProductCardFigure,
  StyledCardBottomWrapper
} from './_productCardStyle';

// Import Store
import { basketItemControl } from 'src/store/actions/basket/basketItemControl';
import { addToBasket } from 'src/store/actions/basket/addToBasket';
import { RootState } from 'src/store/store';

// Import Components
import Button from '../button/Button';
import { BUTTON_SIZES, BUTTON_TYPES } from 'src/common/constants/button/buttonConstants';

interface ProductCardProps {
  price: number;
  title: string;
  id: string;
}

function ProductCard(props: ProductCardProps) {
  // Desctruct Props
  const { price, title } = props;

  // Store Variables
  const dispatch = useDispatch();
  const getBasketData = useSelector((state: RootState) => state?.basketReducer?.success?.data);

  // Add Basket Button Click
  const handleAddBasket = () => {
    const isAdded = getBasketData.find((item) => item.id === props.id);
    if (isAdded) {
      dispatch(basketItemControl(props.id, 'increase'));
    } else {
      dispatch(addToBasket(props));
    }
  };

  return (
    <StyledProductCard>
      {/* Product Image */}
      <StyledProductCardImgWrapper>
        <StyledProductCardFigure>
          <StyledProductCardImg
            src="https://cdn.getir.com/product/62027c5488f0422d9d19ae30_tr_1646806460006.jpeg"
            alt={title}
          />
        </StyledProductCardFigure>
      </StyledProductCardImgWrapper>
      {/* Product Price */}
      <StyledProductPrice>{getFormattedAmount(price)}</StyledProductPrice>
      {/* Product Title */}
      <StyledCardBottomWrapper>
        <StyledProductTitle>{title}</StyledProductTitle>

        {/* Basket Button */}
        <Button
          label={'GLOBAL.CTA.BUTTONS.ADD'}
          display={BUTTON_TYPES.BLOCK}
          size={BUTTON_SIZES.SMALL}
          handleOnClick={() => handleAddBasket()}
        />
      </StyledCardBottomWrapper>
    </StyledProductCard>
  );
}

export default ProductCard;
