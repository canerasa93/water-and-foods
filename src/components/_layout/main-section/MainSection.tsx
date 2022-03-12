// Import Styled Components
import { StyledMainSection } from './_mainSectionStyle';

// Import Components
import PageTitle from 'src/components/page-title/PageTitle';

function MainSection(props) {
  // Desctruct Props
  const { children } = props;

  console.log('history', props);

  return(
    <StyledMainSection>
      <PageTitle />
      {children}
    </StyledMainSection>
  );
}

export default MainSection;
