// Import Utils
import { translate } from 'src/common/utils/translate/translateUtil';

// Import Styled Components
import { StyledInput } from './_inputStyle';

interface InputProps {
  placeholder: string;
  name: string;
  handleOnChange?: (val: string) => void;
}

function Input(props: InputProps) {
  // Desctruct Props
  const { placeholder, name, handleOnChange } = props;

  return (
    <StyledInput
      {...props}
      name={name}
      placeholder={placeholder && translate(placeholder)}
      onChange={(e) => handleOnChange && handleOnChange(e.target.value)}
      autoComplete="off"
    />
  );
}

export default Input;
