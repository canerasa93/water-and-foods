// Import Styled Components
import {
  StyledSidebarCardTitle,
  StyledSidebarCard,
  StyledSidebarCardBox,
  StyledSidebarCardBoxContainer
} from './_sidebarCardStyle';

// Import Components
import TranslatedText from '../translated-text/TranslatedText';
import Input from '../form/input/Input';

interface SidebarCardProps {
  title: string;
  search?: boolean;
  data?: Array<any>;
  scrollable?: boolean;
}

SidebarCard.defaultProps = {
  search: false,
  data: [],
  scrollable: true
};

function SidebarCard(props: SidebarCardProps) {
  // Desctruct Props
  const { title, scrollable, search } = props;

  return (
    <StyledSidebarCard>
      <StyledSidebarCardTitle>
        <TranslatedText label={'GLOBAL.SIDEBAR.CARD_TITLES.' + title} />
      </StyledSidebarCardTitle>
      <StyledSidebarCardBox>
        {search && <Input placeholder={'GLOBAL.FORM_ELEMENTS.PLACEHOLDERS.' + title} name="search" />}

        <StyledSidebarCardBoxContainer scrollable={scrollable} search={search}>
          test tes ttest te stte sttesttest testt es ttes ttest testte stte sttest
        </StyledSidebarCardBoxContainer>
      </StyledSidebarCardBox>
    </StyledSidebarCard>
  );
}

export default SidebarCard;
