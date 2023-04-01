import React from "react";
import { StyledDemoButton } from "./styles";

interface IDemoButton {
  type?: "button" | "submit";
  onClick?: any;
  disabled?: boolean;
  children: React.ReactNode;
}

const DemoButton: React.FC<IDemoButton> = ({
  type,
  children,
  ...props
}) => {
  return (
    <StyledDemoButton type={type || "button"} {...props}>
      {children}
    </StyledDemoButton>
  );
};

export default DemoButton;
