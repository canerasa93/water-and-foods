// Import React
import { Fragment, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

// Import Store
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Constants
import { ICON_LIST } from 'src/common/constants/icon/iconList';

// Import Components
import CustomIcon from '../custom-icon/CustomIcon';
import { ICON_SIZES } from 'src/common/constants/icon/iconSizes';
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';
import { ProductCardData } from '../product-list/ProductList';

interface PaginationProps {
  data: Array<ProductCardData>;
}

function Pagination(props: PaginationProps) {
  // Desctruct Props
  const { data } = props;

  // Store Variables
  const dispatch = useDispatch();
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

  // Handle Change Pagination
  const handleChangePagination = (value) => {
    dispatch({
      type: types.SUCCESS,
      payload: {
        filterParams: {
          filterButton: getMainStoreData.filterParams.filterButton,
          brands: getMainStoreData.filterParams.brands,
          tags: getMainStoreData.filterParams.tags,
          page: value,
          sorting: getMainStoreData.filterParams.id
        }
      }
    });
  };

  // Render Numbers Function
  const renderNumbers = (): ReactNode => {
    let firstFourthNumbers: Array<number> = [];
    let lastFourthNumbers: Array<number> = [];
    const totalPages: number = Math.round(data?.length / 16);

    for (let index = 0; index < totalPages; index++) {
      if (index + 1 <= 4) {
        firstFourthNumbers.push(index + 1);
      }

      if (index + 1 >= totalPages - 3) {
        lastFourthNumbers.push(index + 1);
      }
    }

    return (
      <StyledPaginationList>
        <Fragment>
          {firstFourthNumbers &&
            firstFourthNumbers?.map((item) => (
              <StyledPaginationNumber
                key={item}
                onClick={() => handleChangePagination(item)}
                active={getMainStoreData?.filterParams?.page === item}
              >
                {item}
              </StyledPaginationNumber>
            ))}
        </Fragment>
        {totalPages > 4 && (
          <Fragment>
            <StyledPaginationDots>...</StyledPaginationDots>
          </Fragment>
        )}

        <Fragment>
          {totalPages > 4 &&
            lastFourthNumbers &&
            lastFourthNumbers?.map((item) => (
              <StyledPaginationNumber
                key={item}
                onClick={() => handleChangePagination(item)}
                active={getMainStoreData?.filterParams?.page === item}
              >
                {item}
              </StyledPaginationNumber>
            ))}
        </Fragment>
      </StyledPaginationList>
    );
  };

  return (
    <StyledPaginationWrapper>
      <StyledPaginationContainer>
        <StyledPaginationControl>
          <CustomIcon name={ICON_LIST.ARROW_PREV} size={ICON_SIZES.SMALL} status={ICON_STATUS.PRIMARY} />
          <StyledControlLabel primary>Prev</StyledControlLabel>
        </StyledPaginationControl>

        {renderNumbers()}

        <StyledPaginationControl>
          <StyledControlLabel>Next</StyledControlLabel>
          <CustomIcon name={ICON_LIST.ARROW_NEXT} size={ICON_SIZES.SMALL} status={ICON_STATUS.SECONDARY} />
        </StyledPaginationControl>
      </StyledPaginationContainer>
    </StyledPaginationWrapper>
  );
}

export default Pagination;
