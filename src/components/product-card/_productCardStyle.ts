// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledProductCard = styled.div`
  width: calc(50% - 10px);
  padding: 10px;
`;
export const StyledProductCardImgWrapper = styled.div`
  border: 1.8px solid ${THEME.COLORS.SHADOW};
  padding: 15px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
`;

export const StyledProductCardImg = styled.div`
  width: 100%;
  height: 92px;
  background: #C4C4C4;
`;

export const StyledProductPrice = styled.span`
  display: block;
  color: ${THEME.COLORS.BLUE_1};
  margin-top: 10px;
  font-size: 14px;
  font-weight:  ${THEME.FONT.BOLD};
`;

export const StyledProductTitle= styled.h2`
  display: block;
  color: ${THEME.COLORS.DARK};
  margin: 6px 0 10px 0;
  font-size: 14px;
  line-height: 16px;
  font-weight:  ${THEME.FONT.SEMIBOLD};
`;
