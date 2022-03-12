// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { BUTTON_VARIANTS, BUTTON_TYPES } from '../../common/constants/button/buttonConstants';

import { THEME } from '../../common/constants/theme'

// Styled Components
export const StyledButton = styled.button`
  background: ${(props) => (props.variant === BUTTON_VARIANTS.PRIMARY ? THEME.COLORS.BLUE_1 : THEME.COLORS.GRAY_4)};
  color: ${(props) => (props.variant === BUTTON_VARIANTS.PRIMARY ? THEME.COLORS.WHITE : THEME.COLORS.BLUE_1)};
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  &:hover {
    background: ${(props) => (props.variant === BUTTON_VARIANTS.PRIMARY ? THEME.COLORS.BLUE_2 : THEME.COLORS.GRAY_5)};
  }
  font: inherit;
  font-weight: ${() => THEME.FONT.SEMIBOLD};
  font-size: 13px;
  transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-decoration: none;
  white-space: nowrap;
  width: ${(props) => props.display === BUTTON_TYPES.BLOCK ? '100%' : 'auto'};
  margin: ${(props) => props.margin};
`;
