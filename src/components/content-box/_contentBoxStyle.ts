// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledContentBox = styled.div`
  background-color: ${THEME.COLORS.WHITE};
  padding: 20px;
  box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
  -webkit-box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
  -moz-box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
`;
