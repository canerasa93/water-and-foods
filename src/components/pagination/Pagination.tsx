// Import Styled Components
import {
  StyledPaginationWrapper,
  StyledPaginationContainer,
  StyledPaginationControl,
  StyledPaginationList,
  StyledControlLabel
} from './_paginationStyle';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';

// Import Components
import CustomIcon from '../custom-icon/CustomIcon';
import { ICON_SIZES } from 'src/common/constants/icon/iconSizes';
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';

function Pagination() {
  return (
    <StyledPaginationWrapper>
      <StyledPaginationContainer>
        <StyledPaginationControl>
          <CustomIcon name={ICON_LIST.ARROW_PREV} size={ICON_SIZES.SMALL} status={ICON_STATUS.PRIMARY} />
          <StyledControlLabel primary>Prev</StyledControlLabel>
        </StyledPaginationControl>

        <StyledPaginationList>list</StyledPaginationList>

        <StyledPaginationControl>
          <StyledControlLabel>Next</StyledControlLabel>
          <CustomIcon name={ICON_LIST.ARROW_NEXT} size={ICON_SIZES.SMALL} status={ICON_STATUS.SECONDARY} />
        </StyledPaginationControl>
      </StyledPaginationContainer>
    </StyledPaginationWrapper>
  );
}

export default Pagination;
