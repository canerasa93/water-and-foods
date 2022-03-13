// Import Styled Components
import styled from 'styled-components';

// Import Constants
import { THEME } from 'src/common/constants/theme';

// Styled Components
export const StyledProductCard = styled.div`
  width: calc(25% - 20px);
  padding: 10px;
  display: inline-flex;
  flex-direction: column;
`;

export const StyledCardBottomWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`;
export const StyledProductCardImgWrapper = styled.div`
  border: 1.8px solid ${THEME.COLORS.SHADOW};
  padding: 15px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  overflow: hidden;
`;

export const StyledProductCardFigure = styled.figure`
  width: 100%;
  height: 92px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
`;

export const StyledProductCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  background: transparent;
`;

export const StyledProductPrice = styled.span`
  display: block;
  color: ${THEME.COLORS.BLUE_1};
  margin-top: 10px;
  font-size: 14px;
  font-weight: ${THEME.FONT.BOLD};
`;

export const StyledProductTitle = styled.h2`
  display: block;
  color: ${THEME.COLORS.DARK};
  margin: 6px 0 10px 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: ${THEME.FONT.SEMIBOLD};
`;
