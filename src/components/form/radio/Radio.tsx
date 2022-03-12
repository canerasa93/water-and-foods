// Import Styled Components
import { StyledRadioWrapper, StyledRadioInput, StyledRadioLabel } from './_radioStyle';

interface RadioProps {
  name: string;
  label: string;
  id: string;
  handleOnChange?: (val: boolean, id: string) => void;
}

function Radio(props: RadioProps) {
  // Desctruct Props
  const { label, name, handleOnChange, id } = props;

  return (
    <StyledRadioWrapper>
      <div className="checkbox">
        <StyledRadioInput
          id={id}
          type="radio"
          name={name}
          onChange={(e) => handleOnChange && handleOnChange(e?.target?.checked || false, id)}
        />
        <StyledRadioLabel htmlFor={id}>{label}</StyledRadioLabel>
      </div>
    </StyledRadioWrapper>
  );
}

export default Radio;
