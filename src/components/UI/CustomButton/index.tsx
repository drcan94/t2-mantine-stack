import React from "react";
import { StyledButton } from "./styles";

type CustomButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type,
  ...props
}) => {
  return (
    <StyledButton type={type || "button"} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
