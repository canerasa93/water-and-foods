// Import Styled Components
import { StyledContainer, StyledCenterContent } from './_containerStyle';

function Container(props) {
  // Desctruct Props
  const { children } = props;

  return (
    <StyledContainer>
      <StyledCenterContent>{children}</StyledCenterContent>
    </StyledContainer>
  );
}

export default Container;
