// Import Utils
import { translate } from 'src/common/utils/translate/translateUtil';

// Import Styled Components
import { StyledInput } from './_inputStyle';

interface InputProps {
  placeholder: string;
  name: string;
}

function Input(props: InputProps) {
  // Desctruct Props
  const { placeholder, name } = props;

  return <StyledInput {...props} name={name} placeholder={placeholder && translate(placeholder)} />;
}

export default Input;
