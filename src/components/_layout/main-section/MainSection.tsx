// Import Styled Components
import { StyledMainSection } from './_mainSectionStyle';

function MainSection(props) {
  // Desctruct Props
  const { children } = props;

  return <StyledMainSection>{children}</StyledMainSection>;
}

export default MainSection;
