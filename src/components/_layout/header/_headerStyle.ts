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
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const StyledHeaderCenter = styled.div`
  flex: 1;
  flex-direction: row;
  padding: 15px 15px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 10px 15px;
  }
  @media screen and (max-width: 960px) {
    padding: 10px 0;
  }
  @media screen and (max-width: 500px) {
    flex: initial;
  }
`;

export const StyledLogo = styled.a`
  width: 141px;
  height: 40px;
  background: url(${logo}) no-repeat;
  display: inline-block;
  background-size: 100%;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  @media screen and (max-width: 1024px) {
    width: 106px;
    height: 30px;
  }
  @media screen and (max-width: 500px) {
    margin-left: 15px;
  }
`;
export const StyledHeaderRight = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.COLORS.BLUE_2};
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledBasketTotalPrice = styled.span`
  color: ${THEME.COLORS.WHITE};
  font-size: 14px;
  font-weight: ${THEME.FONT.SEMIBOLD};
  line-height: 16px;
  margin-left: 5px;
`;
