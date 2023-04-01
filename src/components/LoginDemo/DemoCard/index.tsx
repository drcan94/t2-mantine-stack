import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;
const DemoCard: React.FC<any> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default DemoCard;
