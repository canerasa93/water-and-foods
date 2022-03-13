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
  const { price, title, id } = props;

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
          label="GLOBAL.CTA.BUTTONS.ADD"
          display={BUTTON_TYPES.BLOCK}
          size={BUTTON_SIZES.SMALL}
          handleOnClick={() => console.log('id: ', id)}
        />
      </StyledCardBottomWrapper>
    </StyledProductCard>
  );
}

export default ProductCard;
