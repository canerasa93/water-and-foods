// Import React
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Constants
import { BUTTON_VARIANTS } from 'src/common/constants/button/buttonConstants';

// Import Store
import { getTypes } from 'src/store/actions/types/getTypes';
import { RootState } from 'src/store/store';
import * as types from 'src/store/action-types/types';

// Import Styled Commponents
import { StyledFilterButtonsWrapper } from './_filterButtonsStyle';

// Import Components
import Button from '../button/Button';

function FilterButtons() {
  // Variables
  const [activeTab, setActiveTab] = useState<string>();

  // Store Variables
  const dispatch = useDispatch();
  const getProductsData = useSelector((state: RootState) => state?.productsReducer?.success?.origin);
  const getTypesData = useSelector((state: RootState) => state?.typesReducer?.success);
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

  // Set Product Filter Function by Selected Active Tab
  const filterProductOriginByTab = (filterParam) => {
    const filtered = getProductsData?.filter((item) => item?.itemType === filterParam);

    dispatch({
      type: types.PRODUCT_LIST_UPDATE,
      payload: filtered
    });
  };

  // Handle Click on Filter
  const filterOnClick = (title) => {
    // Active Key
    setActiveTab(title);

    // Set Global Filter Params to store
    getMainStoreData['filterParams']['filterButton'] = title;
    dispatch({
      type: types.SUCCESS,
      payload: getMainStoreData
    });

    //Apply Filter
    filterProductOriginByTab(title);
  };

  // Get Types from Product Data and set To
  useEffect(() => {
    getProductsData && !getTypesData && dispatch(getTypes(getProductsData));
  }, [getProductsData]);

  // Set Active Tab on Load
  useEffect(() => {
    getTypesData &&
      (setActiveTab(getTypesData?.[0]?.title),
      // Apply Default Filter on Load
      filterProductOriginByTab(getTypesData?.[0]?.title));
  }, [getTypesData]);

  return (
    <StyledFilterButtonsWrapper>
      {getTypesData?.map((filterItem) => {
        return (
          <Button
            translated={false}
            key={filterItem?.title}
            label={filterItem?.title}
            margin="0 10px 0 0"
            variant={activeTab === filterItem?.title ? BUTTON_VARIANTS.PRIMARY : BUTTON_VARIANTS.SECONDARY}
            handleOnClick={() => filterOnClick(filterItem?.title)}
          />
        );
      })}
    </StyledFilterButtonsWrapper>
  );
}

export default FilterButtons;
