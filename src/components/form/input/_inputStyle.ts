// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledInput = styled.input`
  border: 2px solid ${THEME.COLORS.GRAY_6};
  background-color: ${THEME.COLORS.WHITE};
  color: ${THEME.COLORS.GRAY_7};
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  width: 100%;
  padding: 15px 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: ${THEME.FONT.REGULAR};

  ::placeholder {
    font-size: 14px;
    font-weight: ${THEME.FONT.REGULAR};
    color: ${THEME.COLORS.GRAY_7};
  }
`;
