// Import Styled Components
import {
  StyledCheckboxWrapper,
  StyledCheckboxLabel,
  StyledCheckboxInput,
  StyledCheckboxLabelCount
} from './_checkboxStyle';

interface CheckboxProps {
  name: string;
  label: string;
  id: string;
  count: number;
  defaultChecked?: boolean;
  handleOnChange?: (val: boolean, name: string) => void;
}

function Checkbox(props: CheckboxProps) {
  // Desctruct Props
  const { label, name, handleOnChange, id, defaultChecked, count } = props;

  return (
    <StyledCheckboxWrapper>
      <div className="checkbox">
        <StyledCheckboxInput
          id={id}
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          onChange={(e) => handleOnChange && handleOnChange(e?.target?.checked || false, name)}
        />
        <StyledCheckboxLabel htmlFor={id}>
          {label}
          <StyledCheckboxLabelCount>({count})</StyledCheckboxLabelCount>
        </StyledCheckboxLabel>
      </div>
    </StyledCheckboxWrapper>
  );
}

export default Checkbox;
