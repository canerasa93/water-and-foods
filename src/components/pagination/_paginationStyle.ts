// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledPaginationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const StyledPaginationContainer = styled.div`
  display: inline-flex;
`;

export const StyledPaginationControl = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledPaginationList = styled.div`
  display: inline-flex;
  margin: 0 60px;
`;

export const StyledControlLabel = styled.span`
  color: ${(props) => (props.primary ? THEME.COLORS.BLUE_1 : THEME.COLORS.GRAY_3)};
  font-weight: ${THEME.FONT.SEMIBOLD};
  font-size: 14px;
  margin: 0 14px;
`;
