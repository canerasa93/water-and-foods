// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledBasketWrapper = styled.section`
  border: 8px solid ${THEME.COLORS.BLUE_1};
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  padding: 16px 16px;
  background-color: ${THEME.COLORS.WHITE};
  display: flex;
  flex-direction: column;
`;

export const StyledBasketItemWrapper = styled.div`
  border-bottom: 1px solid ${THEME.COLORS.BORDER_1};
  padding: 0 0 20px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  flex: 1;
`;

export const StyledBasketItemContent = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const StyledBasketItemControls = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBasketItemTitle = styled.h6`
  margin: 0 0 0 0;
  color: ${THEME.COLORS.DARK};
  font-size: 14px;
  font-weight: ${THEME.FONT.REGULAR};
  margin-bottom: 5px;
  display: block;
`;

export const StyledBasketItemPrice = styled.span`
  color: ${THEME.COLORS.BLUE_1};
  font-size: 14px;
  font-weight: ${THEME.FONT.SEMIBOLD};
`;

export const StyledBasketItemTrigger = styled.span`
  cursor: pointer;
  transition: all 400ms linear;
  -webkit-transition: all 400ms linear;
  -moz-transition: all 400ms linear;
  &:hover {
    opacity: 0.5;
  }
`;

export const StyledBasketItemCounter = styled.div`
  width: 32px;
  heigth: 32px;
  color: ${THEME.COLORS.WHITE};
  font-size: 15px;
  line-height: 32px;
  text-align: center;
  font-weight: ${THEME.FONT.BOLD};
  background-color: ${THEME.COLORS.BLUE_1};
  margin: 0 10px;
`;

export const StyledBasketTotalPrice = styled.div`
  border: 2px solid ${THEME.COLORS.BLUE_1};
  align-self: flex-end;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  font-size: 14px;
  font-weight: ${THEME.FONT.SEMIBOLD};
  color: ${THEME.COLORS.BLUE_1};
  padding: 15px 20px;
`;
