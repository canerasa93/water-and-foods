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

export const StyledPaginationControl = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: all 400ms linear;
  -webkit-transition: all 400ms linear;
  -moz-transition: all 400ms linear;
  &:hover {
    opacity: 0.7;
  }
`;

export const StyledPaginationList = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 35px;
`;

export const StyledControlLabel = styled.span`
  color: ${(props) => (props.primary ? THEME.COLORS.BLUE_1 : THEME.COLORS.GRAY_3)};
  font-weight: ${THEME.FONT.SEMIBOLD};
  font-size: 14px;
  margin: 0 14px;
  
`;

export const StyledPaginationDots = styled.span`
  color: ${THEME.COLORS.GRAY_3};
  font-weight: ${THEME.FONT.SEMIBOLD};
  font-size: 14px;
  margin: 0 14px;
  padding-bottom: 5px;
  display: inline-flex;
`;

export const StyledPaginationNumber = styled.button`
  color: ${(props) => (props.active ? THEME.COLORS.WHITE : THEME.COLORS.GRAY_3)};
  background-color: ${(props) => (props.active ? THEME.COLORS.BLUE_1 : 'transparent')};
  padding: 15px 13px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border: none;
  font-weight: ${THEME.FONT.SEMIBOLD};
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${(props) => !props.active && THEME.COLORS.BLUE_1};
  }
`;
