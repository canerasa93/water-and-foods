// Import Styled Components
import styled from 'styled-components';

// Import Constants
// import { THEME } from 'src/common/constants/theme';

// background-color: ${THEME.COLORS.WHITE};
// padding: 15px;
// border-radius: 5px;
// -webkit-border-radius: 5px;
// -moz-border-radius: 5px;
// box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
// -webkit-box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};
// -moz-box-shadow: 0px 6px 20px 0px ${THEME.COLORS.SHADOW};

// Styled Components
export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1 0 100%;
  max-width: 296px;
  position: sticky;
  top: 100px;
  @media screen and (max-width: 1240px) {
    max-width: 225px;
  }

  @media screen and (max-width: 960px) {
    max-width: 250px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: initial;
    max-width: 210px;
    left: 0
    position: sticky;
    top: 100px;
    display: block;
  }

  @media screen and (max-width: 730px) {
    margin-left: ${(props) => (props.mobileActiveFilters === true ? '0' : '-225px')};
    top: 0;
    position: relative;
    transition: all linear 250ms;
    -webkit-transition: all linear 250ms;
    -moz-transition: all linear 250ms;
  }
`;

export const StyledSidebarRight = styled.aside`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 1 0 100%;
  max-width: 296px;
  position: sticky;
  top: 100px;
  @media screen and (max-width: 1240px) {
    max-width: 225px;
  }
  @media screen and (max-width: 960px) {
    position: fixed;
    right: 40px;
    top: 70px;
    z-index: 999;
    max-width: 330px;
    display: ${(props) => (props.mobileActiveBasket === true ? 'initial' : 'none')};
  }
`;
