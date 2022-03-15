import { THEME } from 'src/common/constants/theme';
// Import Styled Components
import styled from 'styled-components';

// Styled Components
export const StyledFooter = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  margin: 100px 0 0 0;
  padding: 45px 0;

  & > span {
    color: ${THEME.COLORS.BLUE_1};
    margin: 0 30px;
    font-size: 13px;
    font-weight: ${THEME.FONT.REGULAR};
    display: inline-flex;
    &:first-child {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        right: -30px;
        top: 8px;
        width: 3px;
        height: 3px;
        background-color: ${THEME.COLORS.BLUE_1};
      }
    }
    &:last-child {
      cursor: pointer;
      &:hover {
        color: ${THEME.COLORS.BLUE_2};
      }
    }
  }
`;
