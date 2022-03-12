// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledSidebarCard = styled.div`
  margin-bottom: 24px;
`;

export const StyledSidebarCardBox = styled.div`
  background-color: ${THEME.COLORS.WHITE};
  padding: 24px;
  box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
  -webkit-box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
  -moz-box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  word-wrap: break-all;
  overflow: hidden;
`;

export const StyledSidebarCardBoxContainer = styled.div`
  overflow: hidden;
  overflow-y: ${(props) => (props.scrollable ? 'auto' : 'hidden')};
  height: ${(props) => (props.scrollable ? '140px' : 'auto')};
  max-height: ${(props) => (props.scrollable ? '140px' : 'auto')};
  margin-top: ${(props) => (props.scrollable ? '17px' : '0px')};
  padding-top:${(props) => (props.scrollable ? '5px' : '0px')};
`;

export const StyledSidebarCardTitle = styled.span`
  font-size: 13px;
  font-weight: ${THEME.FONT.SEMIBOLD};
  color: ${THEME.COLORS.GRAY_3};
  margin-bottom: 14px;
  display: block;
`;
