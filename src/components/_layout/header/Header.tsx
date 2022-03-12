// Import Styled Components
import Container from '../container/Container';
import { StyledHeader, StyledHeaderCenter, StyledHeaderRight, StyledLogo } from './_headerStyle';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderCenter>
          <StyledLogo href={'/'} rel="noreferrer" />
        </StyledHeaderCenter>
        <StyledHeaderRight>test</StyledHeaderRight>
      </Container>
    </StyledHeader>
  );
}

export default Header;
