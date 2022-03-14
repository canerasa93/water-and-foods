// Import React
import { useSelector } from 'react-redux';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amount/amountUtil';

// Import Store
import { RootState } from 'src/store/store';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';

// Import Styled Components
import {
  StyledHeader,
  StyledHeaderCenter,
  StyledHeaderRight,
  StyledLogo,
  StyledBasketTotalPrice
} from './_headerStyle';

// Import Components
import Container from '../container/Container';
import CustomIcon from 'src/components/custom-icon/CustomIcon';

function Header() {
  // Store Variables
  const getBasketDataTotal = useSelector((state: RootState) => state?.basketReducer?.success?.total);

  return (
    <StyledHeader>
      <Container>
        <StyledHeaderCenter>
          <StyledLogo href={'/'} rel="noreferrer" />
        </StyledHeaderCenter>
        <StyledHeaderRight>
          <CustomIcon name={ICON_LIST.BASKET} status={ICON_STATUS.WHITE} />
          <StyledBasketTotalPrice>{getFormattedAmount(getBasketDataTotal)}</StyledBasketTotalPrice>
        </StyledHeaderRight>
      </Container>
    </StyledHeader>
  );
}

export default Header;
