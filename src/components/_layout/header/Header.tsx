// Import Styled Components
import SvgBasket from 'src/components/icons/Basket';
import Container from '../container/Container';
import {
  StyledHeader,
  StyledHeaderCenter,
  StyledHeaderRight,
  StyledLogo,
  StyledBasketTotalPrice
} from './_headerStyle';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderCenter>
          <StyledLogo href={'/'} rel="noreferrer" />
        </StyledHeaderCenter>
        <StyledHeaderRight>
          <SvgBasket />
          <StyledBasketTotalPrice>{'39,97'}</StyledBasketTotalPrice>
        </StyledHeaderRight>
      </Container>
    </StyledHeader>
  );
}

export default Header;
