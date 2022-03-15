// Import Constants
import { THEME } from 'src/common/constants/theme';

// Import Styled Components
import styled from 'styled-components';

// Styled Components
export const StyledProductTopLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

export const StyledFilterMobileTrigger = styled.div`
  border: 1px solid ${THEME.COLORS.BLUE_1};
  padding: 5px 8px;
  margin-right: 10px;
  margin-bottom: 15px;
  display: none;
  @media screen and (max-width: 730px) {
    display: inline-block;
  }
`;
