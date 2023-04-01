import CustomInput from "../../../UI/CustomInput/index";

type AgeInputProps = {
  value: string;
  isError: boolean;
  isValid: boolean;
  errorMessage: string;
  refObject?: React.RefObject<HTMLInputElement>;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AgeInput: React.FC<AgeInputProps> = ({
  value,
  isError,
  isValid,
  errorMessage,
  refObject,
  onChange,
}) => {
  return (
    <CustomInput
      id="age"
      refObject={refObject}
      label="Age (Years)"
      value={value}
      type="number"
      isError={isError}
      isValid={isValid}
      errorMessage={errorMessage}
      onChange={onChange}
    />
  );
};
