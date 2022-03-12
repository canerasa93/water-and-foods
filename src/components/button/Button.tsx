// Import Constants
import { BUTTON_VARIANTS, BUTTON_TYPES } from '../../common/constants/button/buttonConstants';

// Import Components
import TranslatedText from '../translated-text/TranslatedText';

// Import Styled Components
import { StyledButton } from './_buttonStyle';

interface ButtonProps {
  variant?: BUTTON_VARIANTS,
  label: string,
  display: BUTTON_TYPES,
  translated?: boolean;
  margin?: string;
}

function Button(props: ButtonProps) {
  // Desctruct Props
  const { label, translated } = props;

  return <StyledButton {...props}>{translated ? <TranslatedText label={label} /> : label}</StyledButton>;
}

export default Button;

Button.defaultProps = {
  variant: BUTTON_VARIANTS.PRIMARY,
  label: '',
  display: BUTTON_TYPES.INLINE_BLOCK,
  translated: true,
  margin: 0
};
