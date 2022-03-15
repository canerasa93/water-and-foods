// Import Styled Commponents
import { StyledContentBox } from './_contentBoxStyle';

function ContentBox(props) {
  // Desctruct Props
  const { children } = props;

  return <StyledContentBox>{children}</StyledContentBox>;
}

export default ContentBox;
