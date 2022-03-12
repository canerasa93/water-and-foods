// Import Constants
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Styled Components
import {
  StyledProductCard,
  StyledProductCardImgWrapper,
  StyledProductCardImg,
  StyledProductPrice,
  StyledProductTitle,
  StyledProductCardFigure
} from './_productCardStyle';

// Import Components
import Button from '../button/Button';
import { BUTTON_SIZES, BUTTON_TYPES } from 'src/common/constants/button/buttonConstants';

function ProductCard() {
  return (
    <StyledProductCard>
      {/* Product Image */}
      <StyledProductCardImgWrapper>
        <StyledProductCardFigure>
          <StyledProductCardImg src="https://cdn.getir.com/product/62027c5488f0422d9d19ae30_tr_1646806460006.jpeg" alt="Space Shuttle" />
        </StyledProductCardFigure>
      </StyledProductCardImgWrapper>
      {/* Product Price */}
      <StyledProductPrice>{getFormattedAmount(14.99)}</StyledProductPrice>
      {/* Product Title */}
      <StyledProductTitle>Gorgeous Office Mug</StyledProductTitle>

      {/* Basket Button */}
      <Button label="GLOBAL.CTA.BUTTONS.ADD" display={BUTTON_TYPES.BLOCK} size={BUTTON_SIZES.SMALL} />
    </StyledProductCard>
  );
}

export default ProductCard;
