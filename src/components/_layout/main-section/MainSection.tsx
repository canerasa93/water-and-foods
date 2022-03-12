// Import Styled Components
import { StyledMainSection, StyledSectionChildren } from './_mainSectionStyle';

// Import Components
import PageTitle from 'src/components/page-title/PageTitle';

function MainSection(props) {
  // Desctruct Props
  const { children } = props;

  return (
    <StyledMainSection>
      <PageTitle />
      <StyledSectionChildren>{children}</StyledSectionChildren>
    </StyledMainSection>
  );
}

export default MainSection;
