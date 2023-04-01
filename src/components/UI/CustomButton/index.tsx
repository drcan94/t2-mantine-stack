import React from "react";
import { StyledButton } from "./styles";
import { useMantineTheme } from "@mantine/core";

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
  const theme = useMantineTheme();
  return (
    <StyledButton theme={theme} type={type || "button"} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
