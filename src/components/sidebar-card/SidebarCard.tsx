// Import React
import { useState } from 'react';
import { useSelector } from 'react-redux';

// Import Styled Components
import {
  StyledSidebarCardTitle,
  StyledSidebarCard,
  StyledSidebarCardBox,
  StyledSidebarCardBoxContainer
} from './_sidebarCardStyle';

// Import Store
import { RootState } from 'src/store/store';

// Import Utils
import { isArray } from 'src/common/utils/array/arrayUtils';
import { removeAccents } from 'src/common/utils/string/stringUtils';

// Import Components
import TranslatedText from '../translated-text/TranslatedText';
import Input from '../form/input/Input';
import Checkbox from '../form/checkbox/Checkbox';
import Radio from '../form/radio/Radio';

interface SidebarCardProps {
  title: string;
  data: Array<Record<string, string | number>>;
  scrollable?: boolean;
  handleOnChange?: (val: boolean, id: string) => void;
}

SidebarCard.defaultProps = {
  search: false,
  data: [],
  scrollable: true
};

function SidebarCard(props: SidebarCardProps) {
  // Desctruct Props
  const { title, scrollable, data, handleOnChange } = props;

  // Variables
  const [searchData, setSearchData] = useState('');

  // Store Variables
  const getMainStoreData = useSelector((state: RootState) => state?.globalReducer?.success);

  const staticSearch = () => {
    if (data && data?.length && isArray(data)) {
      const filter = data?.filter((filterItem) =>
        [filterItem?.label]?.some(
          (item) => !!item && removeAccents(item.toString())?.includes(removeAccents(searchData))
        )
      );

      return filter?.length ? filter : searchData ? [] : data;
    } else {
      return [];
    }
  };

  const handleCheckboxChange = (value, name) => {
    handleOnChange && handleOnChange(value, name);
  };

  return (
    <StyledSidebarCard>
      <StyledSidebarCardTitle>
        <TranslatedText label={'GLOBAL.SIDEBAR.CARD_TITLES.' + title} />
      </StyledSidebarCardTitle>
      <StyledSidebarCardBox>
        {scrollable && (
          <Input
            placeholder={'GLOBAL.FORM_ELEMENTS.PLACEHOLDERS.' + title}
            name="search"
            handleOnChange={setSearchData}
          />
        )}

        <StyledSidebarCardBoxContainer scrollable={scrollable}>
          {isArray(data) &&
            staticSearch()?.map((item) => {
              return scrollable ? (
                <Checkbox
                  count={Number(item?.count)}
                  id={item?.id?.toString()}
                  name={title}
                  label={item?.label?.toString()}
                  defaultChecked={
                    getMainStoreData &&
                    getMainStoreData?.['filterParams']?.[`${title?.toLowerCase()}`][0] === item?.id?.toString() &&
                    true
                  }
                  handleOnChange={(value, id) => handleCheckboxChange(value, id)}
                  key={item?.id}
                />
              ) : (
                <Radio
                  id={item?.id?.toString()}
                  name={title}
                  label={item?.label?.toString()}
                  defaultChecked={
                    getMainStoreData &&
                    getMainStoreData?.['filterParams']?.[`${title?.toLowerCase()}`] === item?.id?.toString() &&
                    true
                  }
                  handleOnChange={(value, id) => console.log('value + id radio: ', value + ' ' + id)}
                  key={item.id}
                />
              );
            })}
        </StyledSidebarCardBoxContainer>
      </StyledSidebarCardBox>
    </StyledSidebarCard>
  );
}

export default SidebarCard;
