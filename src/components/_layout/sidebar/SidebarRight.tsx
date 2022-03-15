// Import React
import { useSelector } from 'react-redux';

// Import Styled Components
import { StyledSidebarRight } from './_sidebarStyle';

// Import Store
import { RootState } from 'src/store/store';

// Import Basket
import Basket from 'src/components/basked/Basket';

function SidebarRight() {
  // Store Variables
  const getMobileBasket = useSelector((state: RootState) => state?.mobileControlsReducer?.success?.basket);

  return (
    <StyledSidebarRight mobileActiveBasket={getMobileBasket}>
      <Basket />
    </StyledSidebarRight>
  );
}

export default SidebarRight;
