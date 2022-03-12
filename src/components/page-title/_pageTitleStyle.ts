// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledPageTitleWrapper = styled.div`
  flex: 1;
  flex-direction: row;
`;

export const StyledPageTitle= styled.h1`
  font-size: 20px;
  font-weight: ${THEME.FONT.REGULAR};
  color: ${THEME.COLORS.GRAY_2};
  margin: 0;
  padding: 0;
`;