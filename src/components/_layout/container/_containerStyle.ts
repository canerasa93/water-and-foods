// Import Styled Components
import styled from 'styled-components';

// Styled Components
export const StyledContainer = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960px){
    padding: 0 0;
  }
`;

export const StyledCenterContent = styled.div`
  max-width: 1232px;
  width: 100%;
  display: flex;
  position: relative;
`;
