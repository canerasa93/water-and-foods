// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from '../../../common/constants/theme';

// Styled Components
export const StyledDefaultLayout = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: ${THEME.COLORS.GRAY_1};
`;

export const StyledMain = styled.div`
  margin-top: 45px;
  @media screen and (max-width: 960px){
    padding: 0 15px;
  }
`;
