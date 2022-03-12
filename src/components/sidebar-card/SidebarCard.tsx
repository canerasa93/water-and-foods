// Import Styled Components
import { StyledSidebarCardTitle, StyledSidebarCard, StyledSidebarCardBox } from './_sidebarCardStyle';

// Import Components
import TranslatedText from '../translated-text/TranslatedText';

interface SidebarCardProps {
  title: string;
  search?: boolean;
  data?: Array<any>;
}

SidebarCard.defaultProps = {
  search: false,
  data: []
};

function SidebarCard(props: SidebarCardProps) {
  // Desctruct Props
  const { title } = props;

  return (
    <StyledSidebarCard>
      <StyledSidebarCardTitle>
        <TranslatedText label={'GLOBAL.SIDEBAR.CARD_TITLES.' + title} />
      </StyledSidebarCardTitle>
      <StyledSidebarCardBox>test</StyledSidebarCardBox>
    </StyledSidebarCard>
  );
}

export default SidebarCard;
