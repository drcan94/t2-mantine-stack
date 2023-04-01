import React from "react";
import { StyledCard } from "./styles";

type CustomCardProps = {
  children: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default CustomCard;
