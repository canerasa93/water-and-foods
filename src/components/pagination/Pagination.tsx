// Import React
import { Fragment } from 'react';

import { usePagination, DOTS } from './usePagination';

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

const Pagination = (props) => {
  // Desctruct Props
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <StyledPaginationWrapper>
      <StyledPaginationContainer>
        <StyledPaginationControl onClick={onPrevious} disabled={currentPage === 1}>
          <CustomIcon name={ICON_LIST.ARROW_PREV} size={ICON_SIZES.SMALL} status={ICON_STATUS.PRIMARY} />
          <StyledControlLabel primary>Prev</StyledControlLabel>
        </StyledPaginationControl>

        <StyledPaginationList>
          {paginationRange?.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <Fragment key={pageNumber + '-' + index}>
                  <StyledPaginationDots>&#8230;</StyledPaginationDots>
                </Fragment>
              );
            }

            return (
              <StyledPaginationNumber
                key={pageNumber + '-' + index}
                onClick={() => onPageChange(pageNumber)}
                active={pageNumber === currentPage}
              >
                {pageNumber}
              </StyledPaginationNumber>
            );
          })}
        </StyledPaginationList>

        <StyledPaginationControl onClick={onNext} disabled={currentPage === lastPage}>
          <StyledControlLabel>Next</StyledControlLabel>
          <CustomIcon name={ICON_LIST.ARROW_NEXT} size={ICON_SIZES.SMALL} status={ICON_STATUS.SECONDARY} />
        </StyledPaginationControl>
      </StyledPaginationContainer>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
