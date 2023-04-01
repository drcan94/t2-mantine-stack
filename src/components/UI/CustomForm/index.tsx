import React from "react";
import { StyledForm } from "./styles";

type CustomFormProps = {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  style?: React.CSSProperties;
};

const CustomForm: React.FC<CustomFormProps> = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

export default CustomForm;
