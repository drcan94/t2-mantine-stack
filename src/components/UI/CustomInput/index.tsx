import React from "react";
import { StyledInput, StyledLabel } from "./styles/index";

type Props = {
  id: string;
  label: string;
  value: string | number;
  isError: boolean;
  isValid: boolean;
  errorMessage: string;
  type?: string;
  refObject?: React.RefObject<HTMLInputElement>;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FC<Props> = ({
  id,
  label,
  value,
  isError,
  isValid,
  errorMessage,
  type,
  refObject,
  onChange,
}) => {
  return (
    <React.Fragment>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <div style={{ maxWidth: "100%" }}>
        {!isValid && isError && (
          <p style={{ color: "red", fontSize: 11, marginLeft: 6 }}>
            {errorMessage}
          </p>
        )}
        <StyledInput
          ref={refObject}
          value={value}
          onChange={onChange}
          type={type || "text"}
          id={id}
          style={{
            borderColor: isValid || !isError ? "unset" : "red",
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default CustomInput;
