// Import Styled Components
import styled from 'styled-components';

// Styled Components
export const StyledMainSection = styled.section`
  display: flex;
  flex: 2 1 0%;
  flex-direction: column;
  margin: 0 15px;
  @media screen and (max-width: 960px) {
    margin: 0 0 0 15px;
  }
  @media screen and (max-width: 500px) {
    display: block;
    flex: initial;
    flex-direction: initial;
    width: 100%;
  }
`;

export const StyledSectionChildren = styled.div`
  display: block;
`;
