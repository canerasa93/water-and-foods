// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Import Images
import checkImg from '../../../assets/images/checkbox_select.svg';
import unCheckImg from '../../../assets/images/checkbox_unselect.svg';

// Styled Components
export const StyledCheckboxWrapper = styled.div`
  display: block;
  margin-bottom: 16px;
`;

export const StyledCheckboxLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-left: 30px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: ${THEME.FONT.REGULAR};
  color: ${THEME.COLORS.DARK_2};
  opacity: 1;
  text-transform: capitalize;
  &::before {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    left: -5px;
    top: -6px;
    background: url(${unCheckImg}) center center no-repeat;
  }
`;

export const StyledCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked {
    + label {
      &::before {
        background: url(${checkImg}) center center no-repeat;
      }
    }
  }
`;
