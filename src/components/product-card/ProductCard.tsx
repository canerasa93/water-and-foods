// Import Constants
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Styled Components
import {
  StyledProductCard,
  StyledProductCardImgWrapper,
  StyledProductCardImg,
  StyledProductPrice,
  StyledProductTitle
} from './_productCardStyle';

// Import Components
import Button from '../button/Button';
import { BUTTON_SIZES, BUTTON_TYPES } from 'src/common/constants/button/buttonConstants';

function ProductCard() {
  return (
    <StyledProductCard>
      {/* Product Image */}
      <StyledProductCardImgWrapper>
        <StyledProductCardImg />
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
