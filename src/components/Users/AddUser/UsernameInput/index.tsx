import CustomInput from "../../../UI/CustomInput/index";

type UsernameInputProps = {
  value: string;
  isError: boolean;
  isValid: boolean;
  errorMessage: string;
  refObject?: React.RefObject<HTMLInputElement>;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UsernameInput: React.FC<UsernameInputProps> = ({
  value,
  isError,
  isValid,
  errorMessage,
  onChange,
  refObject,
}) => {
  return (
    <CustomInput
      refObject={refObject}
      id="username"
      label="Name"
      value={value}
      isError={isError}
      isValid={isValid}
      errorMessage={errorMessage}
      onChange={onChange}
    />
  );
};
