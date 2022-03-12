// Import Styled Components
import { StyledSidebarRight } from './_sidebarStyle';

// Import Basket
import Basket from 'src/components/basked/Basket';

function SidebarRight() {
  return (
    <StyledSidebarRight>
      <Basket />
    </StyledSidebarRight>
  );
}

export default SidebarRight;
