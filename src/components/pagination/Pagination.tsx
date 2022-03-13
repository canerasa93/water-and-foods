// Import Styled Components
import {
  StyledPaginationWrapper,
  StyledPaginationContainer,
  StyledPaginationControl,
  StyledPaginationList,
  StyledControlLabel,
  StyledPaginationNumber,
  StyledPaginationDots
} from './_paginationStyle';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';

// Import Components
import CustomIcon from '../custom-icon/CustomIcon';
import { ICON_SIZES } from 'src/common/constants/icon/iconSizes';
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';
import { Fragment } from 'react';

function Pagination() {
  return (
    <StyledPaginationWrapper>
      <StyledPaginationContainer>
        <StyledPaginationControl>
          <CustomIcon name={ICON_LIST.ARROW_PREV} size={ICON_SIZES.SMALL} status={ICON_STATUS.PRIMARY} />
          <StyledControlLabel primary>Prev</StyledControlLabel>
        </StyledPaginationControl>

        <StyledPaginationList>
          <Fragment>
            <StyledPaginationNumber>1</StyledPaginationNumber>
            <StyledPaginationNumber active>2</StyledPaginationNumber>
            <StyledPaginationNumber>3</StyledPaginationNumber>
            <StyledPaginationNumber>4</StyledPaginationNumber>
          </Fragment>
          <Fragment>
            <StyledPaginationDots>...</StyledPaginationDots>
          </Fragment>
          <Fragment>
            <StyledPaginationNumber>17</StyledPaginationNumber>
            <StyledPaginationNumber>18</StyledPaginationNumber>
            <StyledPaginationNumber>19</StyledPaginationNumber>
            <StyledPaginationNumber>20</StyledPaginationNumber>
          </Fragment>
        </StyledPaginationList>

        <StyledPaginationControl>
          <StyledControlLabel>Next</StyledControlLabel>
          <CustomIcon name={ICON_LIST.ARROW_NEXT} size={ICON_SIZES.SMALL} status={ICON_STATUS.SECONDARY} />
        </StyledPaginationControl>
      </StyledPaginationContainer>
    </StyledPaginationWrapper>
  );
}

export default Pagination;
