import React from "react";
import { StyledCard } from "./styles";
import { useMantineTheme } from "@mantine/core";

type CustomCardProps = {
  children: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({ children }) => {
  const theme = useMantineTheme();
  return <StyledCard theme={theme}>{children}</StyledCard>;
};

export default CustomCard;
