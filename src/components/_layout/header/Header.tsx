// Import Components
import SvgBasket from 'src/components/icons/Basket';
import Container from '../container/Container';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Styled Components
import {
  StyledHeader,
  StyledHeaderCenter,
  StyledHeaderRight,
  StyledLogo,
  StyledBasketTotalPrice
} from './_headerStyle';



function Header() {
  // Variables
  const totalPrice = getFormattedAmount(39.97);

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderCenter>
          <StyledLogo href={'/'} rel="noreferrer" />
        </StyledHeaderCenter>
        <StyledHeaderRight>
          <SvgBasket />
          <StyledBasketTotalPrice>{totalPrice}</StyledBasketTotalPrice>
        </StyledHeaderRight>
      </Container>
    </StyledHeader>
  );
}

export default Header;
