// Import React
import { useState } from 'react';

// Import Styled Components
import {
  StyledSidebarCardTitle,
  StyledSidebarCard,
  StyledSidebarCardBox,
  StyledSidebarCardBoxContainer
} from './_sidebarCardStyle';

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
}

SidebarCard.defaultProps = {
  search: false,
  data: [],
  scrollable: true
};

function SidebarCard(props: SidebarCardProps) {
  // Variables
  const [searchData, setSearchData] = useState('');

  // Desctruct Props
  const { title, scrollable, data } = props;

  const staticSearch = () => {
    if (data && data?.length && isArray(data)) {
      const filter = data?.filter((filterItem) =>
        [filterItem?.label]?.some((item) => !!item && removeAccents(item.toString())?.includes(removeAccents(searchData)))
      );

      return filter?.length ? filter : searchData ? [] : data;
    } else {
      return [];
    }
  };

  const handleCheckboxChange = (value, name, index) => {
    if (index <= 0 && value === 'all') {
      console.log('name:', name);
    }
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
            staticSearch()?.map((item, index) => {
              return scrollable ? (
                <Checkbox
                  count={Number(item?.count)}
                  id={item?.id.toString()}
                  name={title}
                  label={item?.label.toString()}
                  defaultChecked={index <= 0 && true}
                  handleOnChange={(value, name) => handleCheckboxChange(value, name, index)}
                  key={item?.id}
                />
              ) : (
                <Radio
                  id={item?.id.toString()}
                  name={title}
                  label={item?.label.toString()}
                  defaultChecked={index <= 0 && true}
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
