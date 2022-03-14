// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Import Images
import checkImg from '../../../assets/images/radio_select.svg';
import unCheckImg from '../../../assets/images/radio_unselect.svg';

// Styled Components
export const StyledRadioWrapper = styled.div`
  display: block;
  margin-bottom: 10px;
  padding: 5px 0;
  &:last-child{
    margin-bottom: 5px;
  }
`;

export const StyledRadioLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-left: 38px;
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
    left: 0;
    top: -6px;
    background: url(${checkImg}) center center no-repeat;
  }
`;

export const StyledRadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
  &:checked {
    + label {
      &::before {
        background: url(${unCheckImg}) center center no-repeat;
      }
    }
  }
`;
