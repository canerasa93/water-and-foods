// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Import Assets
import logo from 'src/assets/images/logo.png';


// Styled Components
export const StyledHeader = styled.div`
  flex: 1;
  flex-direction: row;
  align-content: center;
  background-color: ${THEME.COLORS.BLUE_1};
`;

export const StyledHeaderCenter = styled.div`
  flex: 1;
  flex-direction: row;
  padding: 15px 15px;
  text-align: center;
`;

export const StyledLogo = styled.a`
  width: 141px;
  height: 40px;
  background: url(${logo}) no-repeat;
  display: inline-block;
`;
export const StyledHeaderRight = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0 30px;
  height: 100%;
  background-color: red;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.COLORS.BLUE_2};
`;

export const StyledBasketTotalPrice = styled.span`
  color: ${THEME.COLORS.WHITE};
  font-size: 14px;
  font-weight: ${THEME.FONT.SEMIBOLD};
  line-height: 16px;
  margin-left: 5px;
`;
